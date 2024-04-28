// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        (unknown)
// source: box/v1/int32.proto

package boxv1

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

type ProtoBoxedInt32 struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Value  int32 `protobuf:"varint,1,opt,name=value,proto3" json:"value,omitempty"`
	IsNull bool  `protobuf:"varint,2,opt,name=is_null,json=isNull,proto3" json:"is_null,omitempty"`
}

func (x *ProtoBoxedInt32) Reset() {
	*x = ProtoBoxedInt32{}
	if protoimpl.UnsafeEnabled {
		mi := &file_box_v1_int32_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProtoBoxedInt32) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProtoBoxedInt32) ProtoMessage() {}

func (x *ProtoBoxedInt32) ProtoReflect() protoreflect.Message {
	mi := &file_box_v1_int32_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProtoBoxedInt32.ProtoReflect.Descriptor instead.
func (*ProtoBoxedInt32) Descriptor() ([]byte, []int) {
	return file_box_v1_int32_proto_rawDescGZIP(), []int{0}
}

func (x *ProtoBoxedInt32) GetValue() int32 {
	if x != nil {
		return x.Value
	}
	return 0
}

func (x *ProtoBoxedInt32) GetIsNull() bool {
	if x != nil {
		return x.IsNull
	}
	return false
}

var File_box_v1_int32_proto protoreflect.FileDescriptor

var file_box_v1_int32_proto_rawDesc = []byte{
	0x0a, 0x12, 0x62, 0x6f, 0x78, 0x2f, 0x76, 0x31, 0x2f, 0x69, 0x6e, 0x74, 0x33, 0x32, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x62, 0x6f, 0x78, 0x2e, 0x76, 0x31, 0x22, 0x40, 0x0a, 0x0f,
	0x50, 0x72, 0x6f, 0x74, 0x6f, 0x42, 0x6f, 0x78, 0x65, 0x64, 0x49, 0x6e, 0x74, 0x33, 0x32, 0x12,
	0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x69, 0x73, 0x5f, 0x6e, 0x75, 0x6c, 0x6c,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x69, 0x73, 0x4e, 0x75, 0x6c, 0x6c, 0x42, 0x88,
	0x01, 0x0a, 0x0a, 0x63, 0x6f, 0x6d, 0x2e, 0x62, 0x6f, 0x78, 0x2e, 0x76, 0x31, 0x42, 0x0a, 0x49,
	0x6e, 0x74, 0x33, 0x32, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x35, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x61, 0x74, 0x72,
	0x69, 0x78, 0x2f, 0x64, 0x6f, 0x63, 0x66, 0x72, 0x61, 0x6d, 0x65, 0x2d, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x62, 0x6f, 0x78, 0x2f, 0x76, 0x31, 0x3b, 0x62, 0x6f, 0x78,
	0x76, 0x31, 0xa2, 0x02, 0x03, 0x42, 0x58, 0x58, 0xaa, 0x02, 0x06, 0x42, 0x6f, 0x78, 0x2e, 0x56,
	0x31, 0xca, 0x02, 0x06, 0x42, 0x6f, 0x78, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x12, 0x42, 0x6f, 0x78,
	0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea,
	0x02, 0x07, 0x42, 0x6f, 0x78, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_box_v1_int32_proto_rawDescOnce sync.Once
	file_box_v1_int32_proto_rawDescData = file_box_v1_int32_proto_rawDesc
)

func file_box_v1_int32_proto_rawDescGZIP() []byte {
	file_box_v1_int32_proto_rawDescOnce.Do(func() {
		file_box_v1_int32_proto_rawDescData = protoimpl.X.CompressGZIP(file_box_v1_int32_proto_rawDescData)
	})
	return file_box_v1_int32_proto_rawDescData
}

var file_box_v1_int32_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_box_v1_int32_proto_goTypes = []interface{}{
	(*ProtoBoxedInt32)(nil), // 0: box.v1.ProtoBoxedInt32
}
var file_box_v1_int32_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_box_v1_int32_proto_init() }
func file_box_v1_int32_proto_init() {
	if File_box_v1_int32_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_box_v1_int32_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProtoBoxedInt32); i {
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
			RawDescriptor: file_box_v1_int32_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_box_v1_int32_proto_goTypes,
		DependencyIndexes: file_box_v1_int32_proto_depIdxs,
		MessageInfos:      file_box_v1_int32_proto_msgTypes,
	}.Build()
	File_box_v1_int32_proto = out.File
	file_box_v1_int32_proto_rawDesc = nil
	file_box_v1_int32_proto_goTypes = nil
	file_box_v1_int32_proto_depIdxs = nil
}
