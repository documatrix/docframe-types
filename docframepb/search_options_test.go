package docframepb_test

import (
	"testing"

	"github.com/documatrix/docframe-types/docframepb"
	"google.golang.org/protobuf/proto"
)

// TestSearchOptionsRoundTrip verifies the search.v1-style field options
// (searchable, weight, field_group, identity) survive the createDocframe.sh
// build pipeline and are readable at runtime via proto reflection, the way
// a consumer (e.g. a search index) would read them.
func TestSearchOptionsRoundTrip(t *testing.T) {
	fields := (&docframepb.ProtoText{}).ProtoReflect().Descriptor().Fields()

	content := fields.ByName("content")
	if content == nil {
		t.Fatal("ProtoText has no content field")
	}

	opts := content.Options()
	if !proto.GetExtension(opts, docframepb.E_Searchable).(bool) {
		t.Error("ProtoText.content: searchable = false, want true")
	}
	if weight := proto.GetExtension(opts, docframepb.E_Weight).(float32); weight != 3.0 {
		t.Errorf("ProtoText.content: weight = %v, want 3.0", weight)
	}
	if group := proto.GetExtension(opts, docframepb.E_FieldGroup).(string); group != "content" {
		t.Errorf("ProtoText.content: field_group = %q, want %q", group, "content")
	}

	comChannelUUIDs := fields.ByName("comChannelUUIDs")
	if comChannelUUIDs == nil {
		t.Fatal("ProtoText has no comChannelUUIDs field")
	}
	if proto.GetExtension(comChannelUUIDs.Options(), docframepb.E_Searchable).(bool) {
		t.Error("ProtoText.comChannelUUIDs: searchable = true, want false (unannotated field)")
	}
}

// TestIdentityAnnotation verifies the identity option on an element's uuid
// field, which a search index uses to scope matched text to that element.
func TestIdentityAnnotation(t *testing.T) {
	uuid := (&docframepb.ProtoParagraph{}).ProtoReflect().Descriptor().Fields().ByName("uuid")
	if uuid == nil {
		t.Fatal("ProtoParagraph has no uuid field")
	}
	if !proto.GetExtension(uuid.Options(), docframepb.E_Identity).(bool) {
		t.Error("ProtoParagraph.uuid: identity = false, want true")
	}
}

// TestNoSearchableOnNonStringField guards the schema-compile-time invariant
// documented on the searchable option: it must never sit on a non-string
// field. This walks every message field in the compiled file descriptor.
func TestNoSearchableOnNonStringField(t *testing.T) {
	fd := docframepb.File_build_docframe_proto
	msgs := fd.Messages()
	for i := 0; i < msgs.Len(); i++ {
		md := msgs.Get(i)
		fields := md.Fields()
		for j := 0; j < fields.Len(); j++ {
			fd := fields.Get(j)
			if !proto.GetExtension(fd.Options(), docframepb.E_Searchable).(bool) {
				continue
			}
			if fd.Kind().String() != "string" {
				t.Errorf(
					"%s: searchable = true on a %s field, only string fields are allowed",
					fd.FullName(), fd.Kind(),
				)
			}
		}
	}
}
