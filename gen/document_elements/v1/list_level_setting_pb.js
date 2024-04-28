// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/list_level_setting.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ProtoBoxedUint32 } from "../../box/v1/uint32_pb.js";
import { ProtoFont } from "../../utils/v1/font_pb.js";
import { ProtoColor } from "../../utils/v1/color_pb.js";
import { ProtoBoxedBool } from "../../box/v1/bool_pb.js";

/**
 * @generated from enum document_elements.v1.ProtoNumberType
 */
export const ProtoNumberType = /*@__PURE__*/ proto3.makeEnum(
  "document_elements.v1.ProtoNumberType",
  [
    {no: 0, name: "PROTO_NUMBER_TYPE_ARABIC", localName: "ARABIC"},
    {no: 1, name: "PROTO_NUMBER_TYPE_ROM_UPPERCASE", localName: "ROM_UPPERCASE"},
    {no: 2, name: "PROTO_NUMBER_TYPE_ROM_LOWERCASE", localName: "ROM_LOWERCASE"},
    {no: 3, name: "PROTO_NUMBER_TYPE_LETTER_UPPERCASE", localName: "LETTER_UPPERCASE"},
    {no: 4, name: "PROTO_NUMBER_TYPE_LETTER_LOWERCASE", localName: "LETTER_LOWERCASE"},
  ],
);

/**
 * @generated from enum document_elements.v1.ProtoListLevelSettingType
 */
export const ProtoListLevelSettingType = /*@__PURE__*/ proto3.makeEnum(
  "document_elements.v1.ProtoListLevelSettingType",
  [
    {no: 0, name: "PROTO_LIST_LEVEL_SETTING_TYPE_UNNUMBERED", localName: "UNNUMBERED"},
    {no: 1, name: "PROTO_LIST_LEVEL_SETTING_TYPE_NUMERIC", localName: "NUMERIC"},
    {no: 2, name: "PROTO_LIST_LEVEL_SETTING_TYPE_IMAGE", localName: "IMAGE"},
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoListLevelSetting
 */
export const ProtoListLevelSetting = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoListLevelSetting",
  () => [
    { no: 1, name: "list_setting_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "font_size", kind: "message", T: ProtoBoxedUint32 },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(ProtoListLevelSettingType) },
    { no: 4, name: "level", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "suffix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "fix_font_family", kind: "message", T: ProtoFont },
    { no: 8, name: "fix_bold", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "fix_italic", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "indention_width", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 11, name: "color", kind: "message", T: ProtoColor },
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoImageListLevelSetting
 */
export const ProtoImageListLevelSetting = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoImageListLevelSetting",
  () => [
    { no: 1, name: "list_level_setting", kind: "message", T: ProtoListLevelSetting },
    { no: 2, name: "image_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoTextListLevelSetting
 */
export const ProtoTextListLevelSetting = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoTextListLevelSetting",
  () => [
    { no: 1, name: "list_level_setting", kind: "message", T: ProtoListLevelSetting },
    { no: 2, name: "font_family", kind: "message", T: ProtoFont },
    { no: 3, name: "bold", kind: "message", T: ProtoBoxedBool },
    { no: 4, name: "italic", kind: "message", T: ProtoBoxedBool },
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoNumberedListLevelSetting
 */
export const ProtoNumberedListLevelSetting = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoNumberedListLevelSetting",
  () => [
    { no: 1, name: "text_list_level_setting", kind: "message", T: ProtoTextListLevelSetting },
    { no: 2, name: "number_type", kind: "enum", T: proto3.getEnumType(ProtoNumberType) },
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoUnnumberedListLevelSetting
 */
export const ProtoUnnumberedListLevelSetting = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoUnnumberedListLevelSetting",
  () => [
    { no: 1, name: "text_list_level_setting", kind: "message", T: ProtoTextListLevelSetting },
    { no: 2, name: "character", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoAnyListLevelSetting
 */
export const ProtoAnyListLevelSetting = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoAnyListLevelSetting",
  () => [
    { no: 1, name: "image_list_level_setting", kind: "message", T: ProtoImageListLevelSetting, oneof: "list_level_setting" },
    { no: 2, name: "numbered_list_level_setting", kind: "message", T: ProtoNumberedListLevelSetting, oneof: "list_level_setting" },
    { no: 3, name: "unnumbered_list_level_setting", kind: "message", T: ProtoUnnumberedListLevelSetting, oneof: "list_level_setting" },
  ],
);

