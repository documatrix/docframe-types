// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        (unknown)
// source: utils/v1/align.proto

package utilsv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ProtoHorizontalAlignment int32

const (
	ProtoHorizontalAlignment_PROTO_HORIZONTAL_ALIGNMENT_LEFT           ProtoHorizontalAlignment = 0
	ProtoHorizontalAlignment_PROTO_HORIZONTAL_ALIGNMENT_CENTER         ProtoHorizontalAlignment = 1
	ProtoHorizontalAlignment_PROTO_HORIZONTAL_ALIGNMENT_RIGHT          ProtoHorizontalAlignment = 2
	ProtoHorizontalAlignment_PROTO_HORIZONTAL_ALIGNMENT_JUSTIFY        ProtoHorizontalAlignment = 3
	ProtoHorizontalAlignment_PROTO_HORIZONTAL_ALIGNMENT_FULL_JUSTIFY   ProtoHorizontalAlignment = 4
	ProtoHorizontalAlignment_PROTO_HORIZONTAL_ALIGNMENT_CENTER_ON_PAGE ProtoHorizontalAlignment = 5
)

// Enum value maps for ProtoHorizontalAlignment.
var (
	ProtoHorizontalAlignment_name = map[int32]string{
		0: "PROTO_HORIZONTAL_ALIGNMENT_LEFT",
		1: "PROTO_HORIZONTAL_ALIGNMENT_CENTER",
		2: "PROTO_HORIZONTAL_ALIGNMENT_RIGHT",
		3: "PROTO_HORIZONTAL_ALIGNMENT_JUSTIFY",
		4: "PROTO_HORIZONTAL_ALIGNMENT_FULL_JUSTIFY",
		5: "PROTO_HORIZONTAL_ALIGNMENT_CENTER_ON_PAGE",
	}
	ProtoHorizontalAlignment_value = map[string]int32{
		"PROTO_HORIZONTAL_ALIGNMENT_LEFT":           0,
		"PROTO_HORIZONTAL_ALIGNMENT_CENTER":         1,
		"PROTO_HORIZONTAL_ALIGNMENT_RIGHT":          2,
		"PROTO_HORIZONTAL_ALIGNMENT_JUSTIFY":        3,
		"PROTO_HORIZONTAL_ALIGNMENT_FULL_JUSTIFY":   4,
		"PROTO_HORIZONTAL_ALIGNMENT_CENTER_ON_PAGE": 5,
	}
)

func (x ProtoHorizontalAlignment) Enum() *ProtoHorizontalAlignment {
	p := new(ProtoHorizontalAlignment)
	*p = x
	return p
}

func (x ProtoHorizontalAlignment) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ProtoHorizontalAlignment) Descriptor() protoreflect.EnumDescriptor {
	return file_utils_v1_align_proto_enumTypes[0].Descriptor()
}

func (ProtoHorizontalAlignment) Type() protoreflect.EnumType {
	return &file_utils_v1_align_proto_enumTypes[0]
}

func (x ProtoHorizontalAlignment) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ProtoHorizontalAlignment.Descriptor instead.
func (ProtoHorizontalAlignment) EnumDescriptor() ([]byte, []int) {
	return file_utils_v1_align_proto_rawDescGZIP(), []int{0}
}

type ProtoVerticalAlignment int32

const (
	ProtoVerticalAlignment_PROTO_VERTICAL_ALIGNMENT_TOP    ProtoVerticalAlignment = 0
	ProtoVerticalAlignment_PROTO_VERTICAL_ALIGNMENT_MIDDLE ProtoVerticalAlignment = 1
	ProtoVerticalAlignment_PROTO_VERTICAL_ALIGNMENT_BOTTOM ProtoVerticalAlignment = 2
)

// Enum value maps for ProtoVerticalAlignment.
var (
	ProtoVerticalAlignment_name = map[int32]string{
		0: "PROTO_VERTICAL_ALIGNMENT_TOP",
		1: "PROTO_VERTICAL_ALIGNMENT_MIDDLE",
		2: "PROTO_VERTICAL_ALIGNMENT_BOTTOM",
	}
	ProtoVerticalAlignment_value = map[string]int32{
		"PROTO_VERTICAL_ALIGNMENT_TOP":    0,
		"PROTO_VERTICAL_ALIGNMENT_MIDDLE": 1,
		"PROTO_VERTICAL_ALIGNMENT_BOTTOM": 2,
	}
)

func (x ProtoVerticalAlignment) Enum() *ProtoVerticalAlignment {
	p := new(ProtoVerticalAlignment)
	*p = x
	return p
}

func (x ProtoVerticalAlignment) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ProtoVerticalAlignment) Descriptor() protoreflect.EnumDescriptor {
	return file_utils_v1_align_proto_enumTypes[1].Descriptor()
}

func (ProtoVerticalAlignment) Type() protoreflect.EnumType {
	return &file_utils_v1_align_proto_enumTypes[1]
}

func (x ProtoVerticalAlignment) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ProtoVerticalAlignment.Descriptor instead.
func (ProtoVerticalAlignment) EnumDescriptor() ([]byte, []int) {
	return file_utils_v1_align_proto_rawDescGZIP(), []int{1}
}

type ProtoBoxedHorizontalAlignment struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Value  ProtoHorizontalAlignment `protobuf:"varint,1,opt,name=value,proto3,enum=utils.v1.ProtoHorizontalAlignment" json:"value,omitempty"`
	IsNull bool                     `protobuf:"varint,2,opt,name=is_null,json=isNull,proto3" json:"is_null,omitempty"`
}

func (x *ProtoBoxedHorizontalAlignment) Reset() {
	*x = ProtoBoxedHorizontalAlignment{}
	if protoimpl.UnsafeEnabled {
		mi := &file_utils_v1_align_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProtoBoxedHorizontalAlignment) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProtoBoxedHorizontalAlignment) ProtoMessage() {}

func (x *ProtoBoxedHorizontalAlignment) ProtoReflect() protoreflect.Message {
	mi := &file_utils_v1_align_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProtoBoxedHorizontalAlignment.ProtoReflect.Descriptor instead.
func (*ProtoBoxedHorizontalAlignment) Descriptor() ([]byte, []int) {
	return file_utils_v1_align_proto_rawDescGZIP(), []int{0}
}

func (x *ProtoBoxedHorizontalAlignment) GetValue() ProtoHorizontalAlignment {
	if x != nil {
		return x.Value
	}
	return ProtoHorizontalAlignment_PROTO_HORIZONTAL_ALIGNMENT_LEFT
}

func (x *ProtoBoxedHorizontalAlignment) GetIsNull() bool {
	if x != nil {
		return x.IsNull
	}
	return false
}

type ProtoBoxedVerticalAlignment struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Value  ProtoVerticalAlignment `protobuf:"varint,1,opt,name=value,proto3,enum=utils.v1.ProtoVerticalAlignment" json:"value,omitempty"`
	IsNull bool                   `protobuf:"varint,2,opt,name=is_null,json=isNull,proto3" json:"is_null,omitempty"`
}

func (x *ProtoBoxedVerticalAlignment) Reset() {
	*x = ProtoBoxedVerticalAlignment{}
	if protoimpl.UnsafeEnabled {
		mi := &file_utils_v1_align_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProtoBoxedVerticalAlignment) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProtoBoxedVerticalAlignment) ProtoMessage() {}

func (x *ProtoBoxedVerticalAlignment) ProtoReflect() protoreflect.Message {
	mi := &file_utils_v1_align_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProtoBoxedVerticalAlignment.ProtoReflect.Descriptor instead.
func (*ProtoBoxedVerticalAlignment) Descriptor() ([]byte, []int) {
	return file_utils_v1_align_proto_rawDescGZIP(), []int{1}
}

func (x *ProtoBoxedVerticalAlignment) GetValue() ProtoVerticalAlignment {
	if x != nil {
		return x.Value
	}
	return ProtoVerticalAlignment_PROTO_VERTICAL_ALIGNMENT_TOP
}

func (x *ProtoBoxedVerticalAlignment) GetIsNull() bool {
	if x != nil {
		return x.IsNull
	}
	return false
}

var File_utils_v1_align_proto protoreflect.FileDescriptor

var file_utils_v1_align_proto_rawDesc = []byte{
	0x0a, 0x14, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x6c, 0x69, 0x67, 0x6e,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31,
	0x22, 0x72, 0x0a, 0x1d, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x42, 0x6f, 0x78, 0x65, 0x64, 0x48, 0x6f,
	0x72, 0x69, 0x7a, 0x6f, 0x6e, 0x74, 0x61, 0x6c, 0x41, 0x6c, 0x69, 0x67, 0x6e, 0x6d, 0x65, 0x6e,
	0x74, 0x12, 0x38, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x22, 0x2e, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x74,
	0x6f, 0x48, 0x6f, 0x72, 0x69, 0x7a, 0x6f, 0x6e, 0x74, 0x61, 0x6c, 0x41, 0x6c, 0x69, 0x67, 0x6e,
	0x6d, 0x65, 0x6e, 0x74, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x69,
	0x73, 0x5f, 0x6e, 0x75, 0x6c, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x69, 0x73,
	0x4e, 0x75, 0x6c, 0x6c, 0x22, 0x6e, 0x0a, 0x1b, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x42, 0x6f, 0x78,
	0x65, 0x64, 0x56, 0x65, 0x72, 0x74, 0x69, 0x63, 0x61, 0x6c, 0x41, 0x6c, 0x69, 0x67, 0x6e, 0x6d,
	0x65, 0x6e, 0x74, 0x12, 0x36, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x20, 0x2e, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x56, 0x65, 0x72, 0x74, 0x69, 0x63, 0x61, 0x6c, 0x41, 0x6c, 0x69, 0x67, 0x6e,
	0x6d, 0x65, 0x6e, 0x74, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x69,
	0x73, 0x5f, 0x6e, 0x75, 0x6c, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x69, 0x73,
	0x4e, 0x75, 0x6c, 0x6c, 0x2a, 0x90, 0x02, 0x0a, 0x18, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x48, 0x6f,
	0x72, 0x69, 0x7a, 0x6f, 0x6e, 0x74, 0x61, 0x6c, 0x41, 0x6c, 0x69, 0x67, 0x6e, 0x6d, 0x65, 0x6e,
	0x74, 0x12, 0x23, 0x0a, 0x1f, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x48, 0x4f, 0x52, 0x49, 0x5a,
	0x4f, 0x4e, 0x54, 0x41, 0x4c, 0x5f, 0x41, 0x4c, 0x49, 0x47, 0x4e, 0x4d, 0x45, 0x4e, 0x54, 0x5f,
	0x4c, 0x45, 0x46, 0x54, 0x10, 0x00, 0x12, 0x25, 0x0a, 0x21, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f,
	0x48, 0x4f, 0x52, 0x49, 0x5a, 0x4f, 0x4e, 0x54, 0x41, 0x4c, 0x5f, 0x41, 0x4c, 0x49, 0x47, 0x4e,
	0x4d, 0x45, 0x4e, 0x54, 0x5f, 0x43, 0x45, 0x4e, 0x54, 0x45, 0x52, 0x10, 0x01, 0x12, 0x24, 0x0a,
	0x20, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x48, 0x4f, 0x52, 0x49, 0x5a, 0x4f, 0x4e, 0x54, 0x41,
	0x4c, 0x5f, 0x41, 0x4c, 0x49, 0x47, 0x4e, 0x4d, 0x45, 0x4e, 0x54, 0x5f, 0x52, 0x49, 0x47, 0x48,
	0x54, 0x10, 0x02, 0x12, 0x26, 0x0a, 0x22, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x48, 0x4f, 0x52,
	0x49, 0x5a, 0x4f, 0x4e, 0x54, 0x41, 0x4c, 0x5f, 0x41, 0x4c, 0x49, 0x47, 0x4e, 0x4d, 0x45, 0x4e,
	0x54, 0x5f, 0x4a, 0x55, 0x53, 0x54, 0x49, 0x46, 0x59, 0x10, 0x03, 0x12, 0x2b, 0x0a, 0x27, 0x50,
	0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x48, 0x4f, 0x52, 0x49, 0x5a, 0x4f, 0x4e, 0x54, 0x41, 0x4c, 0x5f,
	0x41, 0x4c, 0x49, 0x47, 0x4e, 0x4d, 0x45, 0x4e, 0x54, 0x5f, 0x46, 0x55, 0x4c, 0x4c, 0x5f, 0x4a,
	0x55, 0x53, 0x54, 0x49, 0x46, 0x59, 0x10, 0x04, 0x12, 0x2d, 0x0a, 0x29, 0x50, 0x52, 0x4f, 0x54,
	0x4f, 0x5f, 0x48, 0x4f, 0x52, 0x49, 0x5a, 0x4f, 0x4e, 0x54, 0x41, 0x4c, 0x5f, 0x41, 0x4c, 0x49,
	0x47, 0x4e, 0x4d, 0x45, 0x4e, 0x54, 0x5f, 0x43, 0x45, 0x4e, 0x54, 0x45, 0x52, 0x5f, 0x4f, 0x4e,
	0x5f, 0x50, 0x41, 0x47, 0x45, 0x10, 0x05, 0x2a, 0x84, 0x01, 0x0a, 0x16, 0x50, 0x72, 0x6f, 0x74,
	0x6f, 0x56, 0x65, 0x72, 0x74, 0x69, 0x63, 0x61, 0x6c, 0x41, 0x6c, 0x69, 0x67, 0x6e, 0x6d, 0x65,
	0x6e, 0x74, 0x12, 0x20, 0x0a, 0x1c, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x56, 0x45, 0x52, 0x54,
	0x49, 0x43, 0x41, 0x4c, 0x5f, 0x41, 0x4c, 0x49, 0x47, 0x4e, 0x4d, 0x45, 0x4e, 0x54, 0x5f, 0x54,
	0x4f, 0x50, 0x10, 0x00, 0x12, 0x23, 0x0a, 0x1f, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x56, 0x45,
	0x52, 0x54, 0x49, 0x43, 0x41, 0x4c, 0x5f, 0x41, 0x4c, 0x49, 0x47, 0x4e, 0x4d, 0x45, 0x4e, 0x54,
	0x5f, 0x4d, 0x49, 0x44, 0x44, 0x4c, 0x45, 0x10, 0x01, 0x12, 0x23, 0x0a, 0x1f, 0x50, 0x52, 0x4f,
	0x54, 0x4f, 0x5f, 0x56, 0x45, 0x52, 0x54, 0x49, 0x43, 0x41, 0x4c, 0x5f, 0x41, 0x4c, 0x49, 0x47,
	0x4e, 0x4d, 0x45, 0x4e, 0x54, 0x5f, 0x42, 0x4f, 0x54, 0x54, 0x4f, 0x4d, 0x10, 0x02, 0x42, 0x96,
	0x01, 0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x2e, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x42,
	0x0a, 0x41, 0x6c, 0x69, 0x67, 0x6e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x39, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x61,
	0x74, 0x72, 0x69, 0x78, 0x2f, 0x64, 0x6f, 0x63, 0x66, 0x72, 0x61, 0x6d, 0x65, 0x2d, 0x74, 0x79,
	0x70, 0x65, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2f, 0x76, 0x31,
	0x3b, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x55, 0x58, 0x58, 0xaa, 0x02,
	0x08, 0x55, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x08, 0x55, 0x74, 0x69, 0x6c,
	0x73, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x14, 0x55, 0x74, 0x69, 0x6c, 0x73, 0x5c, 0x56, 0x31, 0x5c,
	0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x09, 0x55, 0x74,
	0x69, 0x6c, 0x73, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_utils_v1_align_proto_rawDescOnce sync.Once
	file_utils_v1_align_proto_rawDescData = file_utils_v1_align_proto_rawDesc
)

func file_utils_v1_align_proto_rawDescGZIP() []byte {
	file_utils_v1_align_proto_rawDescOnce.Do(func() {
		file_utils_v1_align_proto_rawDescData = protoimpl.X.CompressGZIP(file_utils_v1_align_proto_rawDescData)
	})
	return file_utils_v1_align_proto_rawDescData
}

var file_utils_v1_align_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_utils_v1_align_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_utils_v1_align_proto_goTypes = []interface{}{
	(ProtoHorizontalAlignment)(0),         // 0: utils.v1.ProtoHorizontalAlignment
	(ProtoVerticalAlignment)(0),           // 1: utils.v1.ProtoVerticalAlignment
	(*ProtoBoxedHorizontalAlignment)(nil), // 2: utils.v1.ProtoBoxedHorizontalAlignment
	(*ProtoBoxedVerticalAlignment)(nil),   // 3: utils.v1.ProtoBoxedVerticalAlignment
}
var file_utils_v1_align_proto_depIdxs = []int32{
	0, // 0: utils.v1.ProtoBoxedHorizontalAlignment.value:type_name -> utils.v1.ProtoHorizontalAlignment
	1, // 1: utils.v1.ProtoBoxedVerticalAlignment.value:type_name -> utils.v1.ProtoVerticalAlignment
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_utils_v1_align_proto_init() }
func file_utils_v1_align_proto_init() {
	if File_utils_v1_align_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_utils_v1_align_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProtoBoxedHorizontalAlignment); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_utils_v1_align_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProtoBoxedVerticalAlignment); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_utils_v1_align_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_utils_v1_align_proto_goTypes,
		DependencyIndexes: file_utils_v1_align_proto_depIdxs,
		EnumInfos:         file_utils_v1_align_proto_enumTypes,
		MessageInfos:      file_utils_v1_align_proto_msgTypes,
	}.Build()
	File_utils_v1_align_proto = out.File
	file_utils_v1_align_proto_rawDesc = nil
	file_utils_v1_align_proto_goTypes = nil
	file_utils_v1_align_proto_depIdxs = nil
}