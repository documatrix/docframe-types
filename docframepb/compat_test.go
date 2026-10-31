package docframepb

import (
	"os"
	"testing"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protodesc"
	"google.golang.org/protobuf/reflect/protoreflect"
	"google.golang.org/protobuf/reflect/protoregistry"
	"google.golang.org/protobuf/types/descriptorpb"
)

// legacyFieldsRemoved lists the fields which were intentionally dropped when the
// repository moved to buf. They were never serialized by any producer, and their
// numbers are reserved in the .proto files.
var legacyFieldsRemoved = map[string]bool{"parent": true, "_children": true}

// legacyMessagesRemoved lists messages which only existed as the type of the
// removed fields above.
var legacyMessagesRemoved = map[string]bool{"ProtoDocumentElement": true, "ProtoBranchDocumentElement": true}

// TestWireCompatibleWithLegacySchema guards the byte-level compatibility of
// serialized documents: every message and enum of the pre-buf schema must
// still exist with identical field numbers, names, types, cardinalities and
// oneof membership.
//
// testdata/legacy_schema.binpb is a FileDescriptorSet of the last schema
// produced by the old createDocframe.sh (commit aea2494, the parent of the buf
// migration). It is a frozen snapshot and must not be regenerated from the
// current sources. To audit or rebuild it:
//
//	git show aea2494:build/docframe.proto > /tmp/legacy/docframe.proto
//	protoc --proto_path=/tmp/legacy --descriptor_set_out=docframepb/testdata/legacy_schema.binpb docframe.proto
func TestWireCompatibleWithLegacySchema(t *testing.T) {
	raw, err := os.ReadFile("testdata/legacy_schema.binpb")
	if err != nil {
		t.Fatal(err)
	}
	fds := &descriptorpb.FileDescriptorSet{}
	if err := proto.Unmarshal(raw, fds); err != nil {
		t.Fatal(err)
	}
	legacy, err := protodesc.NewFiles(fds)
	if err != nil {
		t.Fatal(err)
	}

	checked := 0
	legacy.RangeFiles(func(fd protoreflect.FileDescriptor) bool {
		enums := fd.Enums()
		for i := 0; i < enums.Len(); i++ {
			checkEnum(t, enums.Get(i))
		}
		msgs := fd.Messages()
		for i := 0; i < msgs.Len(); i++ {
			checked += checkMessage(t, msgs.Get(i))
		}
		return true
	})
	if checked < 100 {
		t.Fatalf("only %d legacy messages checked, snapshot looks broken", checked)
	}
	t.Logf("%d legacy messages verified", checked)
}

// lookup finds the current descriptor for a legacy (package-less) full name.
// The legacy schema had no package; the current one is `docframe`.
func lookup(name protoreflect.FullName) protoreflect.Descriptor {
	d, err := protoregistry.GlobalFiles.FindDescriptorByName("docframe." + name)
	if err != nil {
		return nil
	}
	return d
}

func checkEnum(t *testing.T, old protoreflect.EnumDescriptor) {
	t.Helper()
	d := lookup(old.FullName())
	cur, ok := d.(protoreflect.EnumDescriptor)
	if !ok {
		t.Errorf("enum %s missing in current schema", old.Name())
		return
	}
	for i := 0; i < old.Values().Len(); i++ {
		ov := old.Values().Get(i)
		cv := cur.Values().ByNumber(ov.Number())
		if cv == nil || cv.Name() != ov.Name() {
			t.Errorf("enum %s: value %s=%d changed", old.Name(), ov.Name(), ov.Number())
		}
	}
}

// checkMessage verifies old against the current schema, including nested
// messages and enums, and returns the number of messages checked.
func checkMessage(t *testing.T, old protoreflect.MessageDescriptor) int {
	t.Helper()
	if legacyMessagesRemoved[string(old.Name())] {
		return 0
	}
	d := lookup(old.FullName())
	cur, ok := d.(protoreflect.MessageDescriptor)
	if !ok {
		t.Errorf("message %s missing in current schema", old.FullName())
		return 0
	}
	for i := 0; i < old.Fields().Len(); i++ {
		of := old.Fields().Get(i)
		cf := cur.Fields().ByNumber(of.Number())
		if cf == nil {
			if legacyFieldsRemoved[string(of.Name())] {
				if !cur.ReservedRanges().Has(of.Number()) || !cur.ReservedNames().Has(of.Name()) {
					t.Errorf("%s: removed field %s=%d is not reserved", old.Name(), of.Name(), of.Number())
				}
				continue
			}
			t.Errorf("%s: field %s=%d missing", old.Name(), of.Name(), of.Number())
			continue
		}
		if cf.Name() != of.Name() || cf.JSONName() != of.JSONName() || cf.Kind() != of.Kind() || cf.Cardinality() != of.Cardinality() || cf.IsPacked() != of.IsPacked() {
			t.Errorf("%s: field %d changed: %v -> %v", old.Name(), of.Number(), of, cf)
			continue
		}
		if of.Kind() == protoreflect.MessageKind && cf.Message().Name() != of.Message().Name() {
			t.Errorf("%s.%s: message type %s -> %s", old.Name(), of.Name(), of.Message().Name(), cf.Message().Name())
		}
		if of.Kind() == protoreflect.EnumKind && cf.Enum().Name() != of.Enum().Name() {
			t.Errorf("%s.%s: enum type %s -> %s", old.Name(), of.Name(), of.Enum().Name(), cf.Enum().Name())
		}
		oo, co := of.ContainingOneof(), cf.ContainingOneof()
		if (oo == nil) != (co == nil) || (oo != nil && oo.Name() != co.Name()) {
			t.Errorf("%s.%s: oneof membership changed", old.Name(), of.Name())
		}
	}

	checked := 1
	for i := 0; i < old.Enums().Len(); i++ {
		checkEnum(t, old.Enums().Get(i))
	}
	for i := 0; i < old.Messages().Len(); i++ {
		checked += checkMessage(t, old.Messages().Get(i))
	}
	return checked
}
