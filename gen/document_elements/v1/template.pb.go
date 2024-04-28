// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        (unknown)
// source: document_elements/v1/template.proto

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

type ProtoTemplate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Maps DCT intern name to DCD intern name of the current template.
	// This mapping might change while traversing the template tree and entering a new subtemplate.
	ContainerMapping map[string]string `protobuf:"bytes,3,rep,name=container_mapping,json=containerMapping,proto3" json:"container_mapping,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	ComChannelUuids  []string          `protobuf:"bytes,4,rep,name=com_channel_uuids,json=comChannelUuids,proto3" json:"com_channel_uuids,omitempty"`
}

func (x *ProtoTemplate) Reset() {
	*x = ProtoTemplate{}
	if protoimpl.UnsafeEnabled {
		mi := &file_document_elements_v1_template_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProtoTemplate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProtoTemplate) ProtoMessage() {}

func (x *ProtoTemplate) ProtoReflect() protoreflect.Message {
	mi := &file_document_elements_v1_template_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProtoTemplate.ProtoReflect.Descriptor instead.
func (*ProtoTemplate) Descriptor() ([]byte, []int) {
	return file_document_elements_v1_template_proto_rawDescGZIP(), []int{0}
}

func (x *ProtoTemplate) GetContainerMapping() map[string]string {
	if x != nil {
		return x.ContainerMapping
	}
	return nil
}

func (x *ProtoTemplate) GetComChannelUuids() []string {
	if x != nil {
		return x.ComChannelUuids
	}
	return nil
}

var File_document_elements_v1_template_proto protoreflect.FileDescriptor

var file_document_elements_v1_template_proto_rawDesc = []byte{
	0x0a, 0x23, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x65, 0x6c, 0x65, 0x6d, 0x65,
	0x6e, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f,
	0x65, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x22, 0xe8, 0x01, 0x0a, 0x0d,
	0x50, 0x72, 0x6f, 0x74, 0x6f, 0x54, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x12, 0x66, 0x0a,
	0x11, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x5f, 0x6d, 0x61, 0x70, 0x70, 0x69,
	0x6e, 0x67, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x39, 0x2e, 0x64, 0x6f, 0x63, 0x75, 0x6d,
	0x65, 0x6e, 0x74, 0x5f, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x2e,
	0x50, 0x72, 0x6f, 0x74, 0x6f, 0x54, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x2e, 0x43, 0x6f,
	0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x4d, 0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x52, 0x10, 0x63, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x4d, 0x61,
	0x70, 0x70, 0x69, 0x6e, 0x67, 0x12, 0x2a, 0x0a, 0x11, 0x63, 0x6f, 0x6d, 0x5f, 0x63, 0x68, 0x61,
	0x6e, 0x6e, 0x65, 0x6c, 0x5f, 0x75, 0x75, 0x69, 0x64, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x09,
	0x52, 0x0f, 0x63, 0x6f, 0x6d, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x55, 0x75, 0x69, 0x64,
	0x73, 0x1a, 0x43, 0x0a, 0x15, 0x43, 0x6f, 0x6e, 0x74, 0x61, 0x69, 0x6e, 0x65, 0x72, 0x4d, 0x61,
	0x70, 0x70, 0x69, 0x6e, 0x67, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65,
	0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0xe9, 0x01, 0x0a, 0x18, 0x63, 0x6f, 0x6d, 0x2e, 0x64,
	0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73,
	0x2e, 0x76, 0x31, 0x42, 0x0d, 0x54, 0x65, 0x6d, 0x70, 0x6c, 0x61, 0x74, 0x65, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x50, 0x01, 0x5a, 0x51, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x61, 0x74, 0x72, 0x69, 0x78, 0x2f, 0x64, 0x6f, 0x63, 0x66,
	0x72, 0x61, 0x6d, 0x65, 0x2d, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x64,
	0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73,
	0x2f, 0x76, 0x31, 0x3b, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x65, 0x6c, 0x65,
	0x6d, 0x65, 0x6e, 0x74, 0x73, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x44, 0x58, 0x58, 0xaa, 0x02, 0x13,
	0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73,
	0x2e, 0x56, 0x31, 0xca, 0x02, 0x13, 0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x45, 0x6c,
	0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x1f, 0x44, 0x6f, 0x63, 0x75,
	0x6d, 0x65, 0x6e, 0x74, 0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x5c, 0x56, 0x31, 0x5c,
	0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x14, 0x44, 0x6f,
	0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x3a, 0x3a,
	0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_document_elements_v1_template_proto_rawDescOnce sync.Once
	file_document_elements_v1_template_proto_rawDescData = file_document_elements_v1_template_proto_rawDesc
)

func file_document_elements_v1_template_proto_rawDescGZIP() []byte {
	file_document_elements_v1_template_proto_rawDescOnce.Do(func() {
		file_document_elements_v1_template_proto_rawDescData = protoimpl.X.CompressGZIP(file_document_elements_v1_template_proto_rawDescData)
	})
	return file_document_elements_v1_template_proto_rawDescData
}

var file_document_elements_v1_template_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_document_elements_v1_template_proto_goTypes = []interface{}{
	(*ProtoTemplate)(nil), // 0: document_elements.v1.ProtoTemplate
	nil,                   // 1: document_elements.v1.ProtoTemplate.ContainerMappingEntry
}
var file_document_elements_v1_template_proto_depIdxs = []int32{
	1, // 0: document_elements.v1.ProtoTemplate.container_mapping:type_name -> document_elements.v1.ProtoTemplate.ContainerMappingEntry
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_document_elements_v1_template_proto_init() }
func file_document_elements_v1_template_proto_init() {
	if File_document_elements_v1_template_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_document_elements_v1_template_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProtoTemplate); i {
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
			RawDescriptor: file_document_elements_v1_template_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_document_elements_v1_template_proto_goTypes,
		DependencyIndexes: file_document_elements_v1_template_proto_depIdxs,
		MessageInfos:      file_document_elements_v1_template_proto_msgTypes,
	}.Build()
	File_document_elements_v1_template_proto = out.File
	file_document_elements_v1_template_proto_rawDesc = nil
	file_document_elements_v1_template_proto_goTypes = nil
	file_document_elements_v1_template_proto_depIdxs = nil
}
