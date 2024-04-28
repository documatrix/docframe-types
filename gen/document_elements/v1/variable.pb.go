// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        (unknown)
// source: document_elements/v1/variable.proto

package document_elementsv1

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

type ProtoVariableSpecialType int32

const (
	ProtoVariableSpecialType_PROTO_VARIABLE_SPECIAL_TYPE_NOT_SPECIAL    ProtoVariableSpecialType = 0
	ProtoVariableSpecialType_PROTO_VARIABLE_SPECIAL_TYPE_TABLE_NUMBER   ProtoVariableSpecialType = 1
	ProtoVariableSpecialType_PROTO_VARIABLE_SPECIAL_TYPE_DOC_PAGE_COUNT ProtoVariableSpecialType = 2
	ProtoVariableSpecialType_PROTO_VARIABLE_SPECIAL_TYPE_DOC_CUR_PAGE   ProtoVariableSpecialType = 3
	ProtoVariableSpecialType_PROTO_VARIABLE_SPECIAL_TYPE_CUR_PAGE       ProtoVariableSpecialType = 4
	ProtoVariableSpecialType_PROTO_VARIABLE_SPECIAL_TYPE_PAGE_COUNT     ProtoVariableSpecialType = 5
	ProtoVariableSpecialType_PROTO_VARIABLE_SPECIAL_TYPE_PREV_PAGE      ProtoVariableSpecialType = 6
	ProtoVariableSpecialType_PROTO_VARIABLE_SPECIAL_TYPE_SECTION_PAGE   ProtoVariableSpecialType = 7
	ProtoVariableSpecialType_PROTO_VARIABLE_SPECIAL_TYPE_UPDATED_AT     ProtoVariableSpecialType = 8
	ProtoVariableSpecialType_PROTO_VARIABLE_SPECIAL_TYPE_GENERATED_AT   ProtoVariableSpecialType = 9
)

// Enum value maps for ProtoVariableSpecialType.
var (
	ProtoVariableSpecialType_name = map[int32]string{
		0: "PROTO_VARIABLE_SPECIAL_TYPE_NOT_SPECIAL",
		1: "PROTO_VARIABLE_SPECIAL_TYPE_TABLE_NUMBER",
		2: "PROTO_VARIABLE_SPECIAL_TYPE_DOC_PAGE_COUNT",
		3: "PROTO_VARIABLE_SPECIAL_TYPE_DOC_CUR_PAGE",
		4: "PROTO_VARIABLE_SPECIAL_TYPE_CUR_PAGE",
		5: "PROTO_VARIABLE_SPECIAL_TYPE_PAGE_COUNT",
		6: "PROTO_VARIABLE_SPECIAL_TYPE_PREV_PAGE",
		7: "PROTO_VARIABLE_SPECIAL_TYPE_SECTION_PAGE",
		8: "PROTO_VARIABLE_SPECIAL_TYPE_UPDATED_AT",
		9: "PROTO_VARIABLE_SPECIAL_TYPE_GENERATED_AT",
	}
	ProtoVariableSpecialType_value = map[string]int32{
		"PROTO_VARIABLE_SPECIAL_TYPE_NOT_SPECIAL":    0,
		"PROTO_VARIABLE_SPECIAL_TYPE_TABLE_NUMBER":   1,
		"PROTO_VARIABLE_SPECIAL_TYPE_DOC_PAGE_COUNT": 2,
		"PROTO_VARIABLE_SPECIAL_TYPE_DOC_CUR_PAGE":   3,
		"PROTO_VARIABLE_SPECIAL_TYPE_CUR_PAGE":       4,
		"PROTO_VARIABLE_SPECIAL_TYPE_PAGE_COUNT":     5,
		"PROTO_VARIABLE_SPECIAL_TYPE_PREV_PAGE":      6,
		"PROTO_VARIABLE_SPECIAL_TYPE_SECTION_PAGE":   7,
		"PROTO_VARIABLE_SPECIAL_TYPE_UPDATED_AT":     8,
		"PROTO_VARIABLE_SPECIAL_TYPE_GENERATED_AT":   9,
	}
)

func (x ProtoVariableSpecialType) Enum() *ProtoVariableSpecialType {
	p := new(ProtoVariableSpecialType)
	*p = x
	return p
}

func (x ProtoVariableSpecialType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ProtoVariableSpecialType) Descriptor() protoreflect.EnumDescriptor {
	return file_document_elements_v1_variable_proto_enumTypes[0].Descriptor()
}

func (ProtoVariableSpecialType) Type() protoreflect.EnumType {
	return &file_document_elements_v1_variable_proto_enumTypes[0]
}

func (x ProtoVariableSpecialType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ProtoVariableSpecialType.Descriptor instead.
func (ProtoVariableSpecialType) EnumDescriptor() ([]byte, []int) {
	return file_document_elements_v1_variable_proto_rawDescGZIP(), []int{0}
}

type ProtoVariable struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Path        string                   `protobuf:"bytes,1,opt,name=path,proto3" json:"path,omitempty"`
	Content     string                   `protobuf:"bytes,2,opt,name=content,proto3" json:"content,omitempty"` // Should this be optional or "empty string"
	FormatUuid  string                   `protobuf:"bytes,3,opt,name=format_uuid,json=formatUuid,proto3" json:"format_uuid,omitempty"`
	SpecialType ProtoVariableSpecialType `protobuf:"varint,4,opt,name=special_type,json=specialType,proto3,enum=document_elements.v1.ProtoVariableSpecialType" json:"special_type,omitempty"`
}

func (x *ProtoVariable) Reset() {
	*x = ProtoVariable{}
	if protoimpl.UnsafeEnabled {
		mi := &file_document_elements_v1_variable_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProtoVariable) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProtoVariable) ProtoMessage() {}

func (x *ProtoVariable) ProtoReflect() protoreflect.Message {
	mi := &file_document_elements_v1_variable_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProtoVariable.ProtoReflect.Descriptor instead.
func (*ProtoVariable) Descriptor() ([]byte, []int) {
	return file_document_elements_v1_variable_proto_rawDescGZIP(), []int{0}
}

func (x *ProtoVariable) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

func (x *ProtoVariable) GetContent() string {
	if x != nil {
		return x.Content
	}
	return ""
}

func (x *ProtoVariable) GetFormatUuid() string {
	if x != nil {
		return x.FormatUuid
	}
	return ""
}

func (x *ProtoVariable) GetSpecialType() ProtoVariableSpecialType {
	if x != nil {
		return x.SpecialType
	}
	return ProtoVariableSpecialType_PROTO_VARIABLE_SPECIAL_TYPE_NOT_SPECIAL
}

var File_document_elements_v1_variable_proto protoreflect.FileDescriptor

var file_document_elements_v1_variable_proto_rawDesc = []byte{
	0x0a, 0x23, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x65, 0x6c, 0x65, 0x6d, 0x65,
	0x6e, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x2f, 0x76, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f,
	0x65, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x22, 0xb1, 0x01, 0x0a, 0x0d,
	0x50, 0x72, 0x6f, 0x74, 0x6f, 0x56, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x12, 0x12, 0x0a,
	0x04, 0x70, 0x61, 0x74, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x70, 0x61, 0x74,
	0x68, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x12, 0x1f, 0x0a, 0x0b, 0x66,
	0x6f, 0x72, 0x6d, 0x61, 0x74, 0x5f, 0x75, 0x75, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0a, 0x66, 0x6f, 0x72, 0x6d, 0x61, 0x74, 0x55, 0x75, 0x69, 0x64, 0x12, 0x51, 0x0a, 0x0c,
	0x73, 0x70, 0x65, 0x63, 0x69, 0x61, 0x6c, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x2e, 0x2e, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x65, 0x6c,
	0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x56,
	0x61, 0x72, 0x69, 0x61, 0x62, 0x6c, 0x65, 0x53, 0x70, 0x65, 0x63, 0x69, 0x61, 0x6c, 0x54, 0x79,
	0x70, 0x65, 0x52, 0x0b, 0x73, 0x70, 0x65, 0x63, 0x69, 0x61, 0x6c, 0x54, 0x79, 0x70, 0x65, 0x2a,
	0xdc, 0x03, 0x0a, 0x18, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x56, 0x61, 0x72, 0x69, 0x61, 0x62, 0x6c,
	0x65, 0x53, 0x70, 0x65, 0x63, 0x69, 0x61, 0x6c, 0x54, 0x79, 0x70, 0x65, 0x12, 0x2b, 0x0a, 0x27,
	0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x56, 0x41, 0x52, 0x49, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x53,
	0x50, 0x45, 0x43, 0x49, 0x41, 0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x4e, 0x4f, 0x54, 0x5f,
	0x53, 0x50, 0x45, 0x43, 0x49, 0x41, 0x4c, 0x10, 0x00, 0x12, 0x2c, 0x0a, 0x28, 0x50, 0x52, 0x4f,
	0x54, 0x4f, 0x5f, 0x56, 0x41, 0x52, 0x49, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x53, 0x50, 0x45, 0x43,
	0x49, 0x41, 0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x54, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x4e,
	0x55, 0x4d, 0x42, 0x45, 0x52, 0x10, 0x01, 0x12, 0x2e, 0x0a, 0x2a, 0x50, 0x52, 0x4f, 0x54, 0x4f,
	0x5f, 0x56, 0x41, 0x52, 0x49, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x53, 0x50, 0x45, 0x43, 0x49, 0x41,
	0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x44, 0x4f, 0x43, 0x5f, 0x50, 0x41, 0x47, 0x45, 0x5f,
	0x43, 0x4f, 0x55, 0x4e, 0x54, 0x10, 0x02, 0x12, 0x2c, 0x0a, 0x28, 0x50, 0x52, 0x4f, 0x54, 0x4f,
	0x5f, 0x56, 0x41, 0x52, 0x49, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x53, 0x50, 0x45, 0x43, 0x49, 0x41,
	0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x44, 0x4f, 0x43, 0x5f, 0x43, 0x55, 0x52, 0x5f, 0x50,
	0x41, 0x47, 0x45, 0x10, 0x03, 0x12, 0x28, 0x0a, 0x24, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x56,
	0x41, 0x52, 0x49, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x53, 0x50, 0x45, 0x43, 0x49, 0x41, 0x4c, 0x5f,
	0x54, 0x59, 0x50, 0x45, 0x5f, 0x43, 0x55, 0x52, 0x5f, 0x50, 0x41, 0x47, 0x45, 0x10, 0x04, 0x12,
	0x2a, 0x0a, 0x26, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x56, 0x41, 0x52, 0x49, 0x41, 0x42, 0x4c,
	0x45, 0x5f, 0x53, 0x50, 0x45, 0x43, 0x49, 0x41, 0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x50,
	0x41, 0x47, 0x45, 0x5f, 0x43, 0x4f, 0x55, 0x4e, 0x54, 0x10, 0x05, 0x12, 0x29, 0x0a, 0x25, 0x50,
	0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x56, 0x41, 0x52, 0x49, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x53, 0x50,
	0x45, 0x43, 0x49, 0x41, 0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x50, 0x52, 0x45, 0x56, 0x5f,
	0x50, 0x41, 0x47, 0x45, 0x10, 0x06, 0x12, 0x2c, 0x0a, 0x28, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f,
	0x56, 0x41, 0x52, 0x49, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x53, 0x50, 0x45, 0x43, 0x49, 0x41, 0x4c,
	0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x53, 0x45, 0x43, 0x54, 0x49, 0x4f, 0x4e, 0x5f, 0x50, 0x41,
	0x47, 0x45, 0x10, 0x07, 0x12, 0x2a, 0x0a, 0x26, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x56, 0x41,
	0x52, 0x49, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x53, 0x50, 0x45, 0x43, 0x49, 0x41, 0x4c, 0x5f, 0x54,
	0x59, 0x50, 0x45, 0x5f, 0x55, 0x50, 0x44, 0x41, 0x54, 0x45, 0x44, 0x5f, 0x41, 0x54, 0x10, 0x08,
	0x12, 0x2c, 0x0a, 0x28, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x56, 0x41, 0x52, 0x49, 0x41, 0x42,
	0x4c, 0x45, 0x5f, 0x53, 0x50, 0x45, 0x43, 0x49, 0x41, 0x4c, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f,
	0x47, 0x45, 0x4e, 0x45, 0x52, 0x41, 0x54, 0x45, 0x44, 0x5f, 0x41, 0x54, 0x10, 0x09, 0x42, 0xe9,
	0x01, 0x0a, 0x18, 0x63, 0x6f, 0x6d, 0x2e, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f,
	0x65, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x42, 0x0d, 0x56, 0x61, 0x72,
	0x69, 0x61, 0x62, 0x6c, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x51, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x61, 0x74,
	0x72, 0x69, 0x78, 0x2f, 0x64, 0x6f, 0x63, 0x66, 0x72, 0x61, 0x6d, 0x65, 0x2d, 0x74, 0x79, 0x70,
	0x65, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f,
	0x65, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x3b, 0x64, 0x6f, 0x63, 0x75,
	0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x76, 0x31, 0xa2,
	0x02, 0x03, 0x44, 0x58, 0x58, 0xaa, 0x02, 0x13, 0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74,
	0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x13, 0x44, 0x6f,
	0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x5c, 0x56,
	0x31, 0xe2, 0x02, 0x1f, 0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x45, 0x6c, 0x65, 0x6d,
	0x65, 0x6e, 0x74, 0x73, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0xea, 0x02, 0x14, 0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x45, 0x6c,
	0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_document_elements_v1_variable_proto_rawDescOnce sync.Once
	file_document_elements_v1_variable_proto_rawDescData = file_document_elements_v1_variable_proto_rawDesc
)

func file_document_elements_v1_variable_proto_rawDescGZIP() []byte {
	file_document_elements_v1_variable_proto_rawDescOnce.Do(func() {
		file_document_elements_v1_variable_proto_rawDescData = protoimpl.X.CompressGZIP(file_document_elements_v1_variable_proto_rawDescData)
	})
	return file_document_elements_v1_variable_proto_rawDescData
}

var file_document_elements_v1_variable_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_document_elements_v1_variable_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_document_elements_v1_variable_proto_goTypes = []interface{}{
	(ProtoVariableSpecialType)(0), // 0: document_elements.v1.ProtoVariableSpecialType
	(*ProtoVariable)(nil),         // 1: document_elements.v1.ProtoVariable
}
var file_document_elements_v1_variable_proto_depIdxs = []int32{
	0, // 0: document_elements.v1.ProtoVariable.special_type:type_name -> document_elements.v1.ProtoVariableSpecialType
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_document_elements_v1_variable_proto_init() }
func file_document_elements_v1_variable_proto_init() {
	if File_document_elements_v1_variable_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_document_elements_v1_variable_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProtoVariable); i {
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
			RawDescriptor: file_document_elements_v1_variable_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_document_elements_v1_variable_proto_goTypes,
		DependencyIndexes: file_document_elements_v1_variable_proto_depIdxs,
		EnumInfos:         file_document_elements_v1_variable_proto_enumTypes,
		MessageInfos:      file_document_elements_v1_variable_proto_msgTypes,
	}.Build()
	File_document_elements_v1_variable_proto = out.File
	file_document_elements_v1_variable_proto_rawDesc = nil
	file_document_elements_v1_variable_proto_goTypes = nil
	file_document_elements_v1_variable_proto_depIdxs = nil
}