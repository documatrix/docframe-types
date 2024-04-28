// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/image.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ProtoBoxedDouble } from "../../box/v1/double_pb.js";
import { ProtoBoxedMeasure } from "../../utils/v1/measure_pb.js";
import { ProtoBoxedBool } from "../../box/v1/bool_pb.js";
import { ProtoCropSettings, ProtoFlipSettings, ProtoImageReferencePoint } from "../../utils/v1/image_settings_pb.js";
import { ProtoAdvancedIllustrationArea } from "../../utils/v1/advanced_illustration_area_pb.js";

/**
 * @generated from message document_elements.v1.ProtoImage
 */
export const ProtoImage = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoImage",
  () => [
    { no: 1, name: "alt", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "src", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "filename", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "scale", kind: "message", T: ProtoBoxedDouble },
    { no: 7, name: "column_ccale", kind: "message", T: ProtoBoxedDouble },
    { no: 8, name: "width", kind: "message", T: ProtoBoxedMeasure },
    { no: 9, name: "height", kind: "message", T: ProtoBoxedMeasure },
    { no: 10, name: "x", kind: "message", T: ProtoBoxedMeasure },
    { no: 11, name: "y", kind: "message", T: ProtoBoxedMeasure },
    { no: 12, name: "position_absolute", kind: "message", T: ProtoBoxedBool },
    { no: 13, name: "rotation", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 14, name: "flip_settings", kind: "message", T: ProtoFlipSettings },
    { no: 15, name: "crop_settings", kind: "message", T: ProtoCropSettings },
    { no: 16, name: "aia", kind: "message", T: ProtoAdvancedIllustrationArea },
    { no: 17, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "reference_point", kind: "enum", T: proto3.getEnumType(ProtoImageReferencePoint) },
    { no: 19, name: "hyperlink", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
