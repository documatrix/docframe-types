// @generated by protoc-gen-es v1.9.0
// @generated from file utils/v1/font.proto (package utils.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message utils.v1.ProtoFont
 */
export const ProtoFont = /*@__PURE__*/ proto3.makeMessageType(
  "utils.v1.ProtoFont",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message utils.v1.ProtoBoxedFont
 */
export const ProtoBoxedFont = /*@__PURE__*/ proto3.makeMessageType(
  "utils.v1.ProtoBoxedFont",
  () => [
    { no: 1, name: "value", kind: "message", T: ProtoFont },
    { no: 2, name: "is_null", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

