// @generated by protoc-gen-es v1.9.0
// @generated from file utils/v1/color.proto (package utils.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ProtoBoxedString } from "../../box/v1/string_pb.js";

/**
 * @generated from enum utils.v1.ProtoColorType
 */
export const ProtoColorType = /*@__PURE__*/ proto3.makeEnum(
  "utils.v1.ProtoColorType",
  [
    {no: 0, name: "PROTO_COLOR_TYPE_DUMMY_COLOR_TYPE", localName: "DUMMY_COLOR_TYPE"},
    {no: 3, name: "PROTO_COLOR_TYPE_RGB", localName: "RGB"},
    {no: 4, name: "PROTO_COLOR_TYPE_CMYK", localName: "CMYK"},
  ],
);

/**
 * Use ProtoColor both for ProtoRGBColor
 * and ProtoCMYKColor. Inheritance is not
 * supported by protobuf and this is the
 * easiest and fastest way found.
 *
 * @generated from message utils.v1.ProtoColor
 */
export const ProtoColor = /*@__PURE__*/ proto3.makeMessageType(
  "utils.v1.ProtoColor",
  () => [
    { no: 1, name: "name", kind: "message", T: ProtoBoxedString },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(ProtoColorType) },
    { no: 3, name: "r", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "g", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "b", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "c", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "m", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "y", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "k", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message utils.v1.ProtoBoxedColor
 */
export const ProtoBoxedColor = /*@__PURE__*/ proto3.makeMessageType(
  "utils.v1.ProtoBoxedColor",
  () => [
    { no: 1, name: "value", kind: "message", T: ProtoColor },
    { no: 2, name: "is_null", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message utils.v1.ProtoRGBColor
 */
export const ProtoRGBColor = /*@__PURE__*/ proto3.makeMessageType(
  "utils.v1.ProtoRGBColor",
  () => [
    { no: 1, name: "name", kind: "message", T: ProtoBoxedString },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(ProtoColorType) },
    { no: 3, name: "r", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "g", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "b", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message utils.v1.ProtoCMYKColor
 */
export const ProtoCMYKColor = /*@__PURE__*/ proto3.makeMessageType(
  "utils.v1.ProtoCMYKColor",
  () => [
    { no: 1, name: "name", kind: "message", T: ProtoBoxedString },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(ProtoColorType) },
    { no: 3, name: "c", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "m", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "y", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "k", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);
