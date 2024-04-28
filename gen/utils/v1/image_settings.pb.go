// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        (unknown)
// source: utils/v1/image_settings.proto

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

type ProtoImageReferencePoint int32

const (
	ProtoImageReferencePoint_PROTO_IMAGE_REFERENCE_POINT_DO_NOT_USE_AT_ALL ProtoImageReferencePoint = 0
	ProtoImageReferencePoint_PROTO_IMAGE_REFERENCE_POINT_BOTTOM_LEFT       ProtoImageReferencePoint = 1
	ProtoImageReferencePoint_PROTO_IMAGE_REFERENCE_POINT_TOP_LEFT          ProtoImageReferencePoint = 2
	ProtoImageReferencePoint_PROTO_IMAGE_REFERENCE_POINT_CENTER            ProtoImageReferencePoint = 3
	ProtoImageReferencePoint_PROTO_IMAGE_REFERENCE_POINT_BOTTOM_RIGHT      ProtoImageReferencePoint = 4
	ProtoImageReferencePoint_PROTO_IMAGE_REFERENCE_POINT_TOP_RIGHT         ProtoImageReferencePoint = 5
)

// Enum value maps for ProtoImageReferencePoint.
var (
	ProtoImageReferencePoint_name = map[int32]string{
		0: "PROTO_IMAGE_REFERENCE_POINT_DO_NOT_USE_AT_ALL",
		1: "PROTO_IMAGE_REFERENCE_POINT_BOTTOM_LEFT",
		2: "PROTO_IMAGE_REFERENCE_POINT_TOP_LEFT",
		3: "PROTO_IMAGE_REFERENCE_POINT_CENTER",
		4: "PROTO_IMAGE_REFERENCE_POINT_BOTTOM_RIGHT",
		5: "PROTO_IMAGE_REFERENCE_POINT_TOP_RIGHT",
	}
	ProtoImageReferencePoint_value = map[string]int32{
		"PROTO_IMAGE_REFERENCE_POINT_DO_NOT_USE_AT_ALL": 0,
		"PROTO_IMAGE_REFERENCE_POINT_BOTTOM_LEFT":       1,
		"PROTO_IMAGE_REFERENCE_POINT_TOP_LEFT":          2,
		"PROTO_IMAGE_REFERENCE_POINT_CENTER":            3,
		"PROTO_IMAGE_REFERENCE_POINT_BOTTOM_RIGHT":      4,
		"PROTO_IMAGE_REFERENCE_POINT_TOP_RIGHT":         5,
	}
)

func (x ProtoImageReferencePoint) Enum() *ProtoImageReferencePoint {
	p := new(ProtoImageReferencePoint)
	*p = x
	return p
}

func (x ProtoImageReferencePoint) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ProtoImageReferencePoint) Descriptor() protoreflect.EnumDescriptor {
	return file_utils_v1_image_settings_proto_enumTypes[0].Descriptor()
}

func (ProtoImageReferencePoint) Type() protoreflect.EnumType {
	return &file_utils_v1_image_settings_proto_enumTypes[0]
}

func (x ProtoImageReferencePoint) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ProtoImageReferencePoint.Descriptor instead.
func (ProtoImageReferencePoint) EnumDescriptor() ([]byte, []int) {
	return file_utils_v1_image_settings_proto_rawDescGZIP(), []int{0}
}

type ProtoCropSettings struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	X      *ProtoBoxedMeasure `protobuf:"bytes,1,opt,name=x,proto3" json:"x,omitempty"`
	Y      *ProtoBoxedMeasure `protobuf:"bytes,2,opt,name=y,proto3" json:"y,omitempty"`
	Width  *ProtoBoxedMeasure `protobuf:"bytes,3,opt,name=width,proto3" json:"width,omitempty"`
	Height *ProtoBoxedMeasure `protobuf:"bytes,4,opt,name=height,proto3" json:"height,omitempty"`
}

func (x *ProtoCropSettings) Reset() {
	*x = ProtoCropSettings{}
	if protoimpl.UnsafeEnabled {
		mi := &file_utils_v1_image_settings_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProtoCropSettings) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProtoCropSettings) ProtoMessage() {}

func (x *ProtoCropSettings) ProtoReflect() protoreflect.Message {
	mi := &file_utils_v1_image_settings_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProtoCropSettings.ProtoReflect.Descriptor instead.
func (*ProtoCropSettings) Descriptor() ([]byte, []int) {
	return file_utils_v1_image_settings_proto_rawDescGZIP(), []int{0}
}

func (x *ProtoCropSettings) GetX() *ProtoBoxedMeasure {
	if x != nil {
		return x.X
	}
	return nil
}

func (x *ProtoCropSettings) GetY() *ProtoBoxedMeasure {
	if x != nil {
		return x.Y
	}
	return nil
}

func (x *ProtoCropSettings) GetWidth() *ProtoBoxedMeasure {
	if x != nil {
		return x.Width
	}
	return nil
}

func (x *ProtoCropSettings) GetHeight() *ProtoBoxedMeasure {
	if x != nil {
		return x.Height
	}
	return nil
}

type ProtoFlipSettings struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	X bool `protobuf:"varint,1,opt,name=x,proto3" json:"x,omitempty"`
	Y bool `protobuf:"varint,2,opt,name=y,proto3" json:"y,omitempty"`
}

func (x *ProtoFlipSettings) Reset() {
	*x = ProtoFlipSettings{}
	if protoimpl.UnsafeEnabled {
		mi := &file_utils_v1_image_settings_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProtoFlipSettings) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProtoFlipSettings) ProtoMessage() {}

func (x *ProtoFlipSettings) ProtoReflect() protoreflect.Message {
	mi := &file_utils_v1_image_settings_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProtoFlipSettings.ProtoReflect.Descriptor instead.
func (*ProtoFlipSettings) Descriptor() ([]byte, []int) {
	return file_utils_v1_image_settings_proto_rawDescGZIP(), []int{1}
}

func (x *ProtoFlipSettings) GetX() bool {
	if x != nil {
		return x.X
	}
	return false
}

func (x *ProtoFlipSettings) GetY() bool {
	if x != nil {
		return x.Y
	}
	return false
}

var File_utils_v1_image_settings_proto protoreflect.FileDescriptor

var file_utils_v1_image_settings_proto_rawDesc = []byte{
	0x0a, 0x1d, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2f, 0x76, 0x31, 0x2f, 0x69, 0x6d, 0x61, 0x67, 0x65,
	0x5f, 0x73, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x08, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x1a, 0x16, 0x75, 0x74, 0x69, 0x6c, 0x73,
	0x2f, 0x76, 0x31, 0x2f, 0x6d, 0x65, 0x61, 0x73, 0x75, 0x72, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x22, 0xd1, 0x01, 0x0a, 0x11, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x43, 0x72, 0x6f, 0x70, 0x53,
	0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x12, 0x29, 0x0a, 0x01, 0x78, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x42, 0x6f, 0x78, 0x65, 0x64, 0x4d, 0x65, 0x61, 0x73, 0x75, 0x72, 0x65, 0x52,
	0x01, 0x78, 0x12, 0x29, 0x0a, 0x01, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e,
	0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x42, 0x6f,
	0x78, 0x65, 0x64, 0x4d, 0x65, 0x61, 0x73, 0x75, 0x72, 0x65, 0x52, 0x01, 0x79, 0x12, 0x31, 0x0a,
	0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x75,
	0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x42, 0x6f, 0x78,
	0x65, 0x64, 0x4d, 0x65, 0x61, 0x73, 0x75, 0x72, 0x65, 0x52, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68,
	0x12, 0x33, 0x0a, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1b, 0x2e, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x74,
	0x6f, 0x42, 0x6f, 0x78, 0x65, 0x64, 0x4d, 0x65, 0x61, 0x73, 0x75, 0x72, 0x65, 0x52, 0x06, 0x68,
	0x65, 0x69, 0x67, 0x68, 0x74, 0x22, 0x2f, 0x0a, 0x11, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x46, 0x6c,
	0x69, 0x70, 0x53, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x12, 0x0c, 0x0a, 0x01, 0x78, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x01, 0x78, 0x12, 0x0c, 0x0a, 0x01, 0x79, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x01, 0x79, 0x2a, 0xa5, 0x02, 0x0a, 0x18, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x49, 0x6d, 0x61, 0x67, 0x65, 0x52, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x50, 0x6f,
	0x69, 0x6e, 0x74, 0x12, 0x31, 0x0a, 0x2d, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x49, 0x4d, 0x41,
	0x47, 0x45, 0x5f, 0x52, 0x45, 0x46, 0x45, 0x52, 0x45, 0x4e, 0x43, 0x45, 0x5f, 0x50, 0x4f, 0x49,
	0x4e, 0x54, 0x5f, 0x44, 0x4f, 0x5f, 0x4e, 0x4f, 0x54, 0x5f, 0x55, 0x53, 0x45, 0x5f, 0x41, 0x54,
	0x5f, 0x41, 0x4c, 0x4c, 0x10, 0x00, 0x12, 0x2b, 0x0a, 0x27, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f,
	0x49, 0x4d, 0x41, 0x47, 0x45, 0x5f, 0x52, 0x45, 0x46, 0x45, 0x52, 0x45, 0x4e, 0x43, 0x45, 0x5f,
	0x50, 0x4f, 0x49, 0x4e, 0x54, 0x5f, 0x42, 0x4f, 0x54, 0x54, 0x4f, 0x4d, 0x5f, 0x4c, 0x45, 0x46,
	0x54, 0x10, 0x01, 0x12, 0x28, 0x0a, 0x24, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x49, 0x4d, 0x41,
	0x47, 0x45, 0x5f, 0x52, 0x45, 0x46, 0x45, 0x52, 0x45, 0x4e, 0x43, 0x45, 0x5f, 0x50, 0x4f, 0x49,
	0x4e, 0x54, 0x5f, 0x54, 0x4f, 0x50, 0x5f, 0x4c, 0x45, 0x46, 0x54, 0x10, 0x02, 0x12, 0x26, 0x0a,
	0x22, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x49, 0x4d, 0x41, 0x47, 0x45, 0x5f, 0x52, 0x45, 0x46,
	0x45, 0x52, 0x45, 0x4e, 0x43, 0x45, 0x5f, 0x50, 0x4f, 0x49, 0x4e, 0x54, 0x5f, 0x43, 0x45, 0x4e,
	0x54, 0x45, 0x52, 0x10, 0x03, 0x12, 0x2c, 0x0a, 0x28, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x49,
	0x4d, 0x41, 0x47, 0x45, 0x5f, 0x52, 0x45, 0x46, 0x45, 0x52, 0x45, 0x4e, 0x43, 0x45, 0x5f, 0x50,
	0x4f, 0x49, 0x4e, 0x54, 0x5f, 0x42, 0x4f, 0x54, 0x54, 0x4f, 0x4d, 0x5f, 0x52, 0x49, 0x47, 0x48,
	0x54, 0x10, 0x04, 0x12, 0x29, 0x0a, 0x25, 0x50, 0x52, 0x4f, 0x54, 0x4f, 0x5f, 0x49, 0x4d, 0x41,
	0x47, 0x45, 0x5f, 0x52, 0x45, 0x46, 0x45, 0x52, 0x45, 0x4e, 0x43, 0x45, 0x5f, 0x50, 0x4f, 0x49,
	0x4e, 0x54, 0x5f, 0x54, 0x4f, 0x50, 0x5f, 0x52, 0x49, 0x47, 0x48, 0x54, 0x10, 0x05, 0x42, 0x9e,
	0x01, 0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x2e, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x42,
	0x12, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x53, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x39, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x61, 0x74, 0x72, 0x69, 0x78, 0x2f, 0x64, 0x6f, 0x63,
	0x66, 0x72, 0x61, 0x6d, 0x65, 0x2d, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f,
	0x75, 0x74, 0x69, 0x6c, 0x73, 0x2f, 0x76, 0x31, 0x3b, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x76, 0x31,
	0xa2, 0x02, 0x03, 0x55, 0x58, 0x58, 0xaa, 0x02, 0x08, 0x55, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x56,
	0x31, 0xca, 0x02, 0x08, 0x55, 0x74, 0x69, 0x6c, 0x73, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x14, 0x55,
	0x74, 0x69, 0x6c, 0x73, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0xea, 0x02, 0x09, 0x55, 0x74, 0x69, 0x6c, 0x73, 0x3a, 0x3a, 0x56, 0x31, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_utils_v1_image_settings_proto_rawDescOnce sync.Once
	file_utils_v1_image_settings_proto_rawDescData = file_utils_v1_image_settings_proto_rawDesc
)

func file_utils_v1_image_settings_proto_rawDescGZIP() []byte {
	file_utils_v1_image_settings_proto_rawDescOnce.Do(func() {
		file_utils_v1_image_settings_proto_rawDescData = protoimpl.X.CompressGZIP(file_utils_v1_image_settings_proto_rawDescData)
	})
	return file_utils_v1_image_settings_proto_rawDescData
}

var file_utils_v1_image_settings_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_utils_v1_image_settings_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_utils_v1_image_settings_proto_goTypes = []interface{}{
	(ProtoImageReferencePoint)(0), // 0: utils.v1.ProtoImageReferencePoint
	(*ProtoCropSettings)(nil),     // 1: utils.v1.ProtoCropSettings
	(*ProtoFlipSettings)(nil),     // 2: utils.v1.ProtoFlipSettings
	(*ProtoBoxedMeasure)(nil),     // 3: utils.v1.ProtoBoxedMeasure
}
var file_utils_v1_image_settings_proto_depIdxs = []int32{
	3, // 0: utils.v1.ProtoCropSettings.x:type_name -> utils.v1.ProtoBoxedMeasure
	3, // 1: utils.v1.ProtoCropSettings.y:type_name -> utils.v1.ProtoBoxedMeasure
	3, // 2: utils.v1.ProtoCropSettings.width:type_name -> utils.v1.ProtoBoxedMeasure
	3, // 3: utils.v1.ProtoCropSettings.height:type_name -> utils.v1.ProtoBoxedMeasure
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_utils_v1_image_settings_proto_init() }
func file_utils_v1_image_settings_proto_init() {
	if File_utils_v1_image_settings_proto != nil {
		return
	}
	file_utils_v1_measure_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_utils_v1_image_settings_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProtoCropSettings); i {
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
		file_utils_v1_image_settings_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProtoFlipSettings); i {
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
			RawDescriptor: file_utils_v1_image_settings_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_utils_v1_image_settings_proto_goTypes,
		DependencyIndexes: file_utils_v1_image_settings_proto_depIdxs,
		EnumInfos:         file_utils_v1_image_settings_proto_enumTypes,
		MessageInfos:      file_utils_v1_image_settings_proto_msgTypes,
	}.Build()
	File_utils_v1_image_settings_proto = out.File
	file_utils_v1_image_settings_proto_rawDesc = nil
	file_utils_v1_image_settings_proto_goTypes = nil
	file_utils_v1_image_settings_proto_depIdxs = nil
}