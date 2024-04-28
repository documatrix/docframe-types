// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/table.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ProtoMeasure, ProtoSideMeasures } from "../../utils/v1/measure_pb.js";
import { ProtoBoxedBool } from "../../box/v1/bool_pb.js";
import { ProtoBoxedUint32 } from "../../box/v1/uint32_pb.js";
import { ProtoColor } from "../../utils/v1/color_pb.js";
import { ProtoBoxedHorizontalAlignment, ProtoBoxedVerticalAlignment } from "../../utils/v1/align_pb.js";
import { ProtoSideBorders } from "../../utils/v1/border_pb.js";
import { ProtoBoxedDouble } from "../../box/v1/double_pb.js";
import { ProtoBoxedString } from "../../box/v1/string_pb.js";

/**
 * @generated from enum document_elements.v1.ProtoTableContentGroupType
 */
export const ProtoTableContentGroupType = /*@__PURE__*/ proto3.makeEnum(
  "document_elements.v1.ProtoTableContentGroupType",
  [
    {no: 0, name: "PROTO_TABLE_CONTENT_GROUP_TYPE_BODY", localName: "BODY"},
    {no: 1, name: "PROTO_TABLE_CONTENT_GROUP_TYPE_HEADER", localName: "HEADER"},
    {no: 2, name: "PROTO_TABLE_CONTENT_GROUP_TYPE_FOOTER", localName: "FOOTER"},
    {no: 3, name: "PROTO_TABLE_CONTENT_GROUP_TYPE_SUB_HEADER", localName: "SUB_HEADER"},
  ],
);

/**
 * @generated from enum document_elements.v1.ProtoTableCellType
 */
export const ProtoTableCellType = /*@__PURE__*/ proto3.makeEnum(
  "document_elements.v1.ProtoTableCellType",
  [
    {no: 0, name: "PROTO_TABLE_CELL_TYPE_BODY", localName: "BODY"},
    {no: 1, name: "PROTO_TABLE_CELL_TYPE_ROW_HEADER", localName: "ROW_HEADER"},
    {no: 2, name: "PROTO_TABLE_CELL_TYPE_ROW_FOOTER", localName: "ROW_FOOTER"},
  ],
);

/**
 * @generated from message document_elements.v1.ProtoTableConfig
 */
export const ProtoTableConfig = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoTableConfig",
  () => [
    { no: 1, name: "settings", kind: "message", T: ProtoTableSettings },
    { no: 2, name: "config_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoTableSettings
 */
export const ProtoTableSettings = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoTableSettings",
  () => [
    { no: 1, name: "x_offset", kind: "message", T: ProtoMeasure },
    { no: 2, name: "left_measure", kind: "message", T: ProtoBoxedBool },
    { no: 3, name: "width", kind: "message", T: ProtoMeasure },
    { no: 4, name: "repeat_header", kind: "message", T: ProtoBoxedUint32 },
    { no: 5, name: "ws", kind: "message", T: ProtoTableWS },
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoBoxedTableContentGroupType
 */
export const ProtoBoxedTableContentGroupType = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoBoxedTableContentGroupType",
  () => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(ProtoTableContentGroupType) },
    { no: 2, name: "is_null", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message document_elements.v1.ProtoTableContentGroup
 */
export const ProtoTableContentGroup = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoTableContentGroup",
  () => [
    { no: 1, name: "settings", kind: "message", T: ProtoTableContentGroupSettings },
  ],
);

/**
 * @generated from message document_elements.v1.ProtoTableContentGroupConfig
 */
export const ProtoTableContentGroupConfig = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoTableContentGroupConfig",
  () => [
    { no: 1, name: "settings", kind: "message", T: ProtoTableContentGroupSettings },
    { no: 2, name: "config_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoTableContentGroupSettings
 */
export const ProtoTableContentGroupSettings = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoTableContentGroupSettings",
  () => [
    { no: 1, name: "content_group_type", kind: "message", T: ProtoBoxedTableContentGroupType },
    { no: 2, name: "background_colors", kind: "message", T: ProtoColor, repeated: true },
    { no: 3, name: "ws", kind: "message", T: ProtoTableWS },
  ],
);

/**
 * @generated from message document_elements.v1.ProtoTableRow
 */
export const ProtoTableRow = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoTableRow",
  () => [
    { no: 1, name: "settings", kind: "message", T: ProtoTableRowSettings },
    { no: 2, name: "row_config_number", kind: "message", T: ProtoBoxedUint32 },
  ],
);

/**
 * @generated from message document_elements.v1.ProtoTableRowConfig
 */
export const ProtoTableRowConfig = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoTableRowConfig",
  () => [
    { no: 1, name: "settings", kind: "message", T: ProtoTableRowSettings },
    { no: 2, name: "config_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "row_header", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "row_footer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoTableRowSettings
 */
export const ProtoTableRowSettings = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoTableRowSettings",
  () => [
    { no: 1, name: "min_height", kind: "message", T: ProtoMeasure },
    { no: 2, name: "ws", kind: "message", T: ProtoTableWS },
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoBoxedTableCellType
 */
export const ProtoBoxedTableCellType = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoBoxedTableCellType",
  () => [
    { no: 1, name: "value", kind: "enum", T: proto3.getEnumType(ProtoTableCellType) },
    { no: 2, name: "is_null", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message document_elements.v1.ProtoTableCell
 */
export const ProtoTableCell = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoTableCell",
  () => [
    { no: 1, name: "settings", kind: "message", T: ProtoTableCellSettings },
    { no: 2, name: "cell_config_number", kind: "message", T: ProtoBoxedUint32 },
    { no: 3, name: "index", kind: "message", T: ProtoBoxedUint32 },
    { no: 4, name: "merged_left", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "merged_up", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message document_elements.v1.ProtoTableCellConfig
 */
export const ProtoTableCellConfig = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoTableCellConfig",
  () => [
    { no: 1, name: "settings", kind: "message", T: ProtoTableCellSettings },
    { no: 2, name: "config_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "cell_type", kind: "message", T: ProtoBoxedTableCellType },
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoTableCellSettings
 */
export const ProtoTableCellSettings = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoTableCellSettings",
  () => [
    { no: 1, name: "width", kind: "message", T: ProtoMeasure },
    { no: 2, name: "align", kind: "message", T: ProtoBoxedHorizontalAlignment },
    { no: 3, name: "valign", kind: "message", T: ProtoBoxedVerticalAlignment },
    { no: 4, name: "background_color", kind: "message", T: ProtoColor },
    { no: 5, name: "padding", kind: "message", T: ProtoSideMeasures },
    { no: 6, name: "border", kind: "message", T: ProtoSideBorders },
    { no: 7, name: "margin", kind: "message", T: ProtoSideMeasures },
    { no: 8, name: "rotation", kind: "message", T: ProtoBoxedDouble },
    { no: 9, name: "default_paragraph_format", kind: "message", T: ProtoBoxedString },
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoTableWS
 */
export const ProtoTableWS = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoTableWS",
  () => [
    { no: 1, name: "min_lines_before", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "min_lines_after", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "priority", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);
