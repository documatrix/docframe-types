// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        (unknown)
// source: document_elements/v1/barcode.proto

package document_elementsv1

import (
	v1 "github.com/documatrix/docframe-types/gen/utils/v1"
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

type ProtoBarcode struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// like BrickBody::Brick
	Type           v1.ProtoBarcodeType         `protobuf:"varint,1,opt,name=type,proto3,enum=utils.v1.ProtoBarcodeType" json:"type,omitempty"`
	X              *v1.ProtoMeasure            `protobuf:"bytes,2,opt,name=x,proto3" json:"x,omitempty"`
	Y              *v1.ProtoMeasure            `protobuf:"bytes,3,opt,name=y,proto3" json:"y,omitempty"`
	ReferencePoint v1.ProtoImageReferencePoint `protobuf:"varint,4,opt,name=reference_point,json=referencePoint,proto3,enum=utils.v1.ProtoImageReferencePoint" json:"reference_point,omitempty"`
	// Rotation in degrees, counter-clockwise
	Rotation         float32          `protobuf:"fixed32,5,opt,name=rotation,proto3" json:"rotation,omitempty"`
	Width            *v1.ProtoMeasure `protobuf:"bytes,6,opt,name=width,proto3" json:"width,omitempty"`
	Height           *v1.ProtoMeasure `protobuf:"bytes,7,opt,name=height,proto3" json:"height,omitempty"`
	Padding          *v1.ProtoMeasure `protobuf:"bytes,8,opt,name=padding,proto3" json:"padding,omitempty"`
	Data             string           `protobuf:"bytes,9,opt,name=data,proto3" json:"data,omitempty"`
	PositionAbsolute bool             `protobuf:"varint,10,opt,name=position_absolute,json=positionAbsolute,proto3" json:"position_absolute,omitempty"`
}

func (x *ProtoBarcode) Reset() {
	*x = ProtoBarcode{}
	if protoimpl.UnsafeEnabled {
		mi := &file_document_elements_v1_barcode_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProtoBarcode) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProtoBarcode) ProtoMessage() {}

func (x *ProtoBarcode) ProtoReflect() protoreflect.Message {
	mi := &file_document_elements_v1_barcode_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProtoBarcode.ProtoReflect.Descriptor instead.
func (*ProtoBarcode) Descriptor() ([]byte, []int) {
	return file_document_elements_v1_barcode_proto_rawDescGZIP(), []int{0}
}

func (x *ProtoBarcode) GetType() v1.ProtoBarcodeType {
	if x != nil {
		return x.Type
	}
	return v1.ProtoBarcodeType(0)
}

func (x *ProtoBarcode) GetX() *v1.ProtoMeasure {
	if x != nil {
		return x.X
	}
	return nil
}

func (x *ProtoBarcode) GetY() *v1.ProtoMeasure {
	if x != nil {
		return x.Y
	}
	return nil
}

func (x *ProtoBarcode) GetReferencePoint() v1.ProtoImageReferencePoint {
	if x != nil {
		return x.ReferencePoint
	}
	return v1.ProtoImageReferencePoint(0)
}

func (x *ProtoBarcode) GetRotation() float32 {
	if x != nil {
		return x.Rotation
	}
	return 0
}

func (x *ProtoBarcode) GetWidth() *v1.ProtoMeasure {
	if x != nil {
		return x.Width
	}
	return nil
}

func (x *ProtoBarcode) GetHeight() *v1.ProtoMeasure {
	if x != nil {
		return x.Height
	}
	return nil
}

func (x *ProtoBarcode) GetPadding() *v1.ProtoMeasure {
	if x != nil {
		return x.Padding
	}
	return nil
}

func (x *ProtoBarcode) GetData() string {
	if x != nil {
		return x.Data
	}
	return ""
}

func (x *ProtoBarcode) GetPositionAbsolute() bool {
	if x != nil {
		return x.PositionAbsolute
	}
	return false
}

var File_document_elements_v1_barcode_proto protoreflect.FileDescriptor

var file_document_elements_v1_barcode_proto_rawDesc = []byte{
	0x0a, 0x22, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x65, 0x6c, 0x65, 0x6d, 0x65,
	0x6e, 0x74, 0x73, 0x2f, 0x76, 0x31, 0x2f, 0x62, 0x61, 0x72, 0x63, 0x6f, 0x64, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x65,
	0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x76, 0x31, 0x1a, 0x1b, 0x75, 0x74, 0x69, 0x6c,
	0x73, 0x2f, 0x76, 0x31, 0x2f, 0x62, 0x61, 0x72, 0x63, 0x6f, 0x64, 0x65, 0x5f, 0x74, 0x79, 0x70,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x16, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2f, 0x76,
	0x31, 0x2f, 0x6d, 0x65, 0x61, 0x73, 0x75, 0x72, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x1d, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2f, 0x76, 0x31, 0x2f, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x5f,
	0x73, 0x65, 0x74, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc4,
	0x03, 0x0a, 0x0c, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x42, 0x61, 0x72, 0x63, 0x6f, 0x64, 0x65, 0x12,
	0x2e, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1a, 0x2e,
	0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x42, 0x61,
	0x72, 0x63, 0x6f, 0x64, 0x65, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12,
	0x24, 0x0a, 0x01, 0x78, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x75, 0x74, 0x69,
	0x6c, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x4d, 0x65, 0x61, 0x73, 0x75,
	0x72, 0x65, 0x52, 0x01, 0x78, 0x12, 0x24, 0x0a, 0x01, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x16, 0x2e, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72, 0x6f, 0x74,
	0x6f, 0x4d, 0x65, 0x61, 0x73, 0x75, 0x72, 0x65, 0x52, 0x01, 0x79, 0x12, 0x4b, 0x0a, 0x0f, 0x72,
	0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x22, 0x2e, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x2e,
	0x50, 0x72, 0x6f, 0x74, 0x6f, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x52, 0x65, 0x66, 0x65, 0x72, 0x65,
	0x6e, 0x63, 0x65, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x52, 0x0e, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65,
	0x6e, 0x63, 0x65, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x72, 0x6f, 0x74, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x02, 0x52, 0x08, 0x72, 0x6f, 0x74, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2c, 0x0a, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50,
	0x72, 0x6f, 0x74, 0x6f, 0x4d, 0x65, 0x61, 0x73, 0x75, 0x72, 0x65, 0x52, 0x05, 0x77, 0x69, 0x64,
	0x74, 0x68, 0x12, 0x2e, 0x0a, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x16, 0x2e, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x4d, 0x65, 0x61, 0x73, 0x75, 0x72, 0x65, 0x52, 0x06, 0x68, 0x65, 0x69, 0x67,
	0x68, 0x74, 0x12, 0x30, 0x0a, 0x07, 0x70, 0x61, 0x64, 0x64, 0x69, 0x6e, 0x67, 0x18, 0x08, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x75, 0x74, 0x69, 0x6c, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x50,
	0x72, 0x6f, 0x74, 0x6f, 0x4d, 0x65, 0x61, 0x73, 0x75, 0x72, 0x65, 0x52, 0x07, 0x70, 0x61, 0x64,
	0x64, 0x69, 0x6e, 0x67, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x09, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12, 0x2b, 0x0a, 0x11, 0x70, 0x6f, 0x73, 0x69,
	0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x61, 0x62, 0x73, 0x6f, 0x6c, 0x75, 0x74, 0x65, 0x18, 0x0a, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x10, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x41, 0x62, 0x73,
	0x6f, 0x6c, 0x75, 0x74, 0x65, 0x42, 0xe8, 0x01, 0x0a, 0x18, 0x63, 0x6f, 0x6d, 0x2e, 0x64, 0x6f,
	0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e,
	0x76, 0x31, 0x42, 0x0c, 0x42, 0x61, 0x72, 0x63, 0x6f, 0x64, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x51, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x64,
	0x6f, 0x63, 0x75, 0x6d, 0x61, 0x74, 0x72, 0x69, 0x78, 0x2f, 0x64, 0x6f, 0x63, 0x66, 0x72, 0x61,
	0x6d, 0x65, 0x2d, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x64, 0x6f, 0x63,
	0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2f, 0x76,
	0x31, 0x3b, 0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x65, 0x6c, 0x65, 0x6d, 0x65,
	0x6e, 0x74, 0x73, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x44, 0x58, 0x58, 0xaa, 0x02, 0x13, 0x44, 0x6f,
	0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x56,
	0x31, 0xca, 0x02, 0x13, 0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x45, 0x6c, 0x65, 0x6d,
	0x65, 0x6e, 0x74, 0x73, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x1f, 0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65,
	0x6e, 0x74, 0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50,
	0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x14, 0x44, 0x6f, 0x63, 0x75,
	0x6d, 0x65, 0x6e, 0x74, 0x45, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x3a, 0x3a, 0x56, 0x31,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_document_elements_v1_barcode_proto_rawDescOnce sync.Once
	file_document_elements_v1_barcode_proto_rawDescData = file_document_elements_v1_barcode_proto_rawDesc
)

func file_document_elements_v1_barcode_proto_rawDescGZIP() []byte {
	file_document_elements_v1_barcode_proto_rawDescOnce.Do(func() {
		file_document_elements_v1_barcode_proto_rawDescData = protoimpl.X.CompressGZIP(file_document_elements_v1_barcode_proto_rawDescData)
	})
	return file_document_elements_v1_barcode_proto_rawDescData
}

var file_document_elements_v1_barcode_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_document_elements_v1_barcode_proto_goTypes = []interface{}{
	(*ProtoBarcode)(nil),             // 0: document_elements.v1.ProtoBarcode
	(v1.ProtoBarcodeType)(0),         // 1: utils.v1.ProtoBarcodeType
	(*v1.ProtoMeasure)(nil),          // 2: utils.v1.ProtoMeasure
	(v1.ProtoImageReferencePoint)(0), // 3: utils.v1.ProtoImageReferencePoint
}
var file_document_elements_v1_barcode_proto_depIdxs = []int32{
	1, // 0: document_elements.v1.ProtoBarcode.type:type_name -> utils.v1.ProtoBarcodeType
	2, // 1: document_elements.v1.ProtoBarcode.x:type_name -> utils.v1.ProtoMeasure
	2, // 2: document_elements.v1.ProtoBarcode.y:type_name -> utils.v1.ProtoMeasure
	3, // 3: document_elements.v1.ProtoBarcode.reference_point:type_name -> utils.v1.ProtoImageReferencePoint
	2, // 4: document_elements.v1.ProtoBarcode.width:type_name -> utils.v1.ProtoMeasure
	2, // 5: document_elements.v1.ProtoBarcode.height:type_name -> utils.v1.ProtoMeasure
	2, // 6: document_elements.v1.ProtoBarcode.padding:type_name -> utils.v1.ProtoMeasure
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_document_elements_v1_barcode_proto_init() }
func file_document_elements_v1_barcode_proto_init() {
	if File_document_elements_v1_barcode_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_document_elements_v1_barcode_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProtoBarcode); i {
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
			RawDescriptor: file_document_elements_v1_barcode_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_document_elements_v1_barcode_proto_goTypes,
		DependencyIndexes: file_document_elements_v1_barcode_proto_depIdxs,
		MessageInfos:      file_document_elements_v1_barcode_proto_msgTypes,
	}.Build()
	File_document_elements_v1_barcode_proto = out.File
	file_document_elements_v1_barcode_proto_rawDesc = nil
	file_document_elements_v1_barcode_proto_goTypes = nil
	file_document_elements_v1_barcode_proto_depIdxs = nil
}
