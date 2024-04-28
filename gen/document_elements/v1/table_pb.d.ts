// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/table.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ProtoMeasure, ProtoSideMeasures } from "../../utils/v1/measure_pb.js";
import type { ProtoBoxedBool } from "../../box/v1/bool_pb.js";
import type { ProtoBoxedUint32 } from "../../box/v1/uint32_pb.js";
import type { ProtoColor } from "../../utils/v1/color_pb.js";
import type { ProtoBoxedHorizontalAlignment, ProtoBoxedVerticalAlignment } from "../../utils/v1/align_pb.js";
import type { ProtoSideBorders } from "../../utils/v1/border_pb.js";
import type { ProtoBoxedDouble } from "../../box/v1/double_pb.js";
import type { ProtoBoxedString } from "../../box/v1/string_pb.js";

/**
 * @generated from enum document_elements.v1.ProtoTableContentGroupType
 */
export declare enum ProtoTableContentGroupType {
  /**
   * @generated from enum value: PROTO_TABLE_CONTENT_GROUP_TYPE_BODY = 0;
   */
  BODY = 0,

  /**
   * @generated from enum value: PROTO_TABLE_CONTENT_GROUP_TYPE_HEADER = 1;
   */
  HEADER = 1,

  /**
   * @generated from enum value: PROTO_TABLE_CONTENT_GROUP_TYPE_FOOTER = 2;
   */
  FOOTER = 2,

  /**
   * @generated from enum value: PROTO_TABLE_CONTENT_GROUP_TYPE_SUB_HEADER = 3;
   */
  SUB_HEADER = 3,
}

/**
 * @generated from enum document_elements.v1.ProtoTableCellType
 */
export declare enum ProtoTableCellType {
  /**
   * @generated from enum value: PROTO_TABLE_CELL_TYPE_BODY = 0;
   */
  BODY = 0,

  /**
   * @generated from enum value: PROTO_TABLE_CELL_TYPE_ROW_HEADER = 1;
   */
  ROW_HEADER = 1,

  /**
   * @generated from enum value: PROTO_TABLE_CELL_TYPE_ROW_FOOTER = 2;
   */
  ROW_FOOTER = 2,
}

/**
 * @generated from message document_elements.v1.ProtoTableConfig
 */
export declare class ProtoTableConfig extends Message<ProtoTableConfig> {
  /**
   * @generated from field: document_elements.v1.ProtoTableSettings settings = 1;
   */
  settings?: ProtoTableSettings;

  /**
   * @generated from field: string config_name = 2;
   */
  configName: string;

  constructor(data?: PartialMessage<ProtoTableConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoTableConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoTableConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoTableConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoTableConfig;

  static equals(a: ProtoTableConfig | PlainMessage<ProtoTableConfig> | undefined, b: ProtoTableConfig | PlainMessage<ProtoTableConfig> | undefined): boolean;
}

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoTableSettings
 */
export declare class ProtoTableSettings extends Message<ProtoTableSettings> {
  /**
   * @generated from field: utils.v1.ProtoMeasure x_offset = 1;
   */
  xOffset?: ProtoMeasure;

  /**
   * @generated from field: box.v1.ProtoBoxedBool left_measure = 2;
   */
  leftMeasure?: ProtoBoxedBool;

  /**
   * @generated from field: utils.v1.ProtoMeasure width = 3;
   */
  width?: ProtoMeasure;

  /**
   * @generated from field: box.v1.ProtoBoxedUint32 repeat_header = 4;
   */
  repeatHeader?: ProtoBoxedUint32;

  /**
   * @generated from field: document_elements.v1.ProtoTableWS ws = 5;
   */
  ws?: ProtoTableWS;

  constructor(data?: PartialMessage<ProtoTableSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoTableSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoTableSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoTableSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoTableSettings;

  static equals(a: ProtoTableSettings | PlainMessage<ProtoTableSettings> | undefined, b: ProtoTableSettings | PlainMessage<ProtoTableSettings> | undefined): boolean;
}

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoBoxedTableContentGroupType
 */
export declare class ProtoBoxedTableContentGroupType extends Message<ProtoBoxedTableContentGroupType> {
  /**
   * @generated from field: document_elements.v1.ProtoTableContentGroupType value = 1;
   */
  value: ProtoTableContentGroupType;

  /**
   * @generated from field: bool is_null = 2;
   */
  isNull: boolean;

  constructor(data?: PartialMessage<ProtoBoxedTableContentGroupType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoBoxedTableContentGroupType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoBoxedTableContentGroupType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoBoxedTableContentGroupType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoBoxedTableContentGroupType;

  static equals(a: ProtoBoxedTableContentGroupType | PlainMessage<ProtoBoxedTableContentGroupType> | undefined, b: ProtoBoxedTableContentGroupType | PlainMessage<ProtoBoxedTableContentGroupType> | undefined): boolean;
}

/**
 * @generated from message document_elements.v1.ProtoTableContentGroup
 */
export declare class ProtoTableContentGroup extends Message<ProtoTableContentGroup> {
  /**
   * @generated from field: document_elements.v1.ProtoTableContentGroupSettings settings = 1;
   */
  settings?: ProtoTableContentGroupSettings;

  constructor(data?: PartialMessage<ProtoTableContentGroup>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoTableContentGroup";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoTableContentGroup;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoTableContentGroup;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoTableContentGroup;

  static equals(a: ProtoTableContentGroup | PlainMessage<ProtoTableContentGroup> | undefined, b: ProtoTableContentGroup | PlainMessage<ProtoTableContentGroup> | undefined): boolean;
}

/**
 * @generated from message document_elements.v1.ProtoTableContentGroupConfig
 */
export declare class ProtoTableContentGroupConfig extends Message<ProtoTableContentGroupConfig> {
  /**
   * @generated from field: document_elements.v1.ProtoTableContentGroupSettings settings = 1;
   */
  settings?: ProtoTableContentGroupSettings;

  /**
   * @generated from field: string config_name = 2;
   */
  configName: string;

  constructor(data?: PartialMessage<ProtoTableContentGroupConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoTableContentGroupConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoTableContentGroupConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoTableContentGroupConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoTableContentGroupConfig;

  static equals(a: ProtoTableContentGroupConfig | PlainMessage<ProtoTableContentGroupConfig> | undefined, b: ProtoTableContentGroupConfig | PlainMessage<ProtoTableContentGroupConfig> | undefined): boolean;
}

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoTableContentGroupSettings
 */
export declare class ProtoTableContentGroupSettings extends Message<ProtoTableContentGroupSettings> {
  /**
   * @generated from field: document_elements.v1.ProtoBoxedTableContentGroupType content_group_type = 1;
   */
  contentGroupType?: ProtoBoxedTableContentGroupType;

  /**
   * @generated from field: repeated utils.v1.ProtoColor background_colors = 2;
   */
  backgroundColors: ProtoColor[];

  /**
   * @generated from field: document_elements.v1.ProtoTableWS ws = 3;
   */
  ws?: ProtoTableWS;

  constructor(data?: PartialMessage<ProtoTableContentGroupSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoTableContentGroupSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoTableContentGroupSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoTableContentGroupSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoTableContentGroupSettings;

  static equals(a: ProtoTableContentGroupSettings | PlainMessage<ProtoTableContentGroupSettings> | undefined, b: ProtoTableContentGroupSettings | PlainMessage<ProtoTableContentGroupSettings> | undefined): boolean;
}

/**
 * @generated from message document_elements.v1.ProtoTableRow
 */
export declare class ProtoTableRow extends Message<ProtoTableRow> {
  /**
   * @generated from field: document_elements.v1.ProtoTableRowSettings settings = 1;
   */
  settings?: ProtoTableRowSettings;

  /**
   * @generated from field: box.v1.ProtoBoxedUint32 row_config_number = 2;
   */
  rowConfigNumber?: ProtoBoxedUint32;

  constructor(data?: PartialMessage<ProtoTableRow>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoTableRow";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoTableRow;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoTableRow;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoTableRow;

  static equals(a: ProtoTableRow | PlainMessage<ProtoTableRow> | undefined, b: ProtoTableRow | PlainMessage<ProtoTableRow> | undefined): boolean;
}

/**
 * @generated from message document_elements.v1.ProtoTableRowConfig
 */
export declare class ProtoTableRowConfig extends Message<ProtoTableRowConfig> {
  /**
   * @generated from field: document_elements.v1.ProtoTableRowSettings settings = 1;
   */
  settings?: ProtoTableRowSettings;

  /**
   * @generated from field: string config_name = 2;
   */
  configName: string;

  /**
   * @generated from field: string row_header = 3;
   */
  rowHeader: string;

  /**
   * @generated from field: string row_footer = 4;
   */
  rowFooter: string;

  constructor(data?: PartialMessage<ProtoTableRowConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoTableRowConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoTableRowConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoTableRowConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoTableRowConfig;

  static equals(a: ProtoTableRowConfig | PlainMessage<ProtoTableRowConfig> | undefined, b: ProtoTableRowConfig | PlainMessage<ProtoTableRowConfig> | undefined): boolean;
}

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoTableRowSettings
 */
export declare class ProtoTableRowSettings extends Message<ProtoTableRowSettings> {
  /**
   * @generated from field: utils.v1.ProtoMeasure min_height = 1;
   */
  minHeight?: ProtoMeasure;

  /**
   * @generated from field: document_elements.v1.ProtoTableWS ws = 2;
   */
  ws?: ProtoTableWS;

  constructor(data?: PartialMessage<ProtoTableRowSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoTableRowSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoTableRowSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoTableRowSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoTableRowSettings;

  static equals(a: ProtoTableRowSettings | PlainMessage<ProtoTableRowSettings> | undefined, b: ProtoTableRowSettings | PlainMessage<ProtoTableRowSettings> | undefined): boolean;
}

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoBoxedTableCellType
 */
export declare class ProtoBoxedTableCellType extends Message<ProtoBoxedTableCellType> {
  /**
   * @generated from field: document_elements.v1.ProtoTableCellType value = 1;
   */
  value: ProtoTableCellType;

  /**
   * @generated from field: bool is_null = 2;
   */
  isNull: boolean;

  constructor(data?: PartialMessage<ProtoBoxedTableCellType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoBoxedTableCellType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoBoxedTableCellType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoBoxedTableCellType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoBoxedTableCellType;

  static equals(a: ProtoBoxedTableCellType | PlainMessage<ProtoBoxedTableCellType> | undefined, b: ProtoBoxedTableCellType | PlainMessage<ProtoBoxedTableCellType> | undefined): boolean;
}

/**
 * @generated from message document_elements.v1.ProtoTableCell
 */
export declare class ProtoTableCell extends Message<ProtoTableCell> {
  /**
   * @generated from field: document_elements.v1.ProtoTableCellSettings settings = 1;
   */
  settings?: ProtoTableCellSettings;

  /**
   * @generated from field: box.v1.ProtoBoxedUint32 cell_config_number = 2;
   */
  cellConfigNumber?: ProtoBoxedUint32;

  /**
   * @generated from field: box.v1.ProtoBoxedUint32 index = 3;
   */
  index?: ProtoBoxedUint32;

  /**
   * Indicates if this table cell should merged with the left table cell.
   *
   * @generated from field: bool merged_left = 4;
   */
  mergedLeft: boolean;

  /**
   * Indicates if this table cell should be merged with the cell above.
   *
   * @generated from field: bool merged_up = 5;
   */
  mergedUp: boolean;

  constructor(data?: PartialMessage<ProtoTableCell>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoTableCell";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoTableCell;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoTableCell;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoTableCell;

  static equals(a: ProtoTableCell | PlainMessage<ProtoTableCell> | undefined, b: ProtoTableCell | PlainMessage<ProtoTableCell> | undefined): boolean;
}

/**
 * @generated from message document_elements.v1.ProtoTableCellConfig
 */
export declare class ProtoTableCellConfig extends Message<ProtoTableCellConfig> {
  /**
   * @generated from field: document_elements.v1.ProtoTableCellSettings settings = 1;
   */
  settings?: ProtoTableCellSettings;

  /**
   * @generated from field: string config_name = 2;
   */
  configName: string;

  /**
   * @generated from field: document_elements.v1.ProtoBoxedTableCellType cell_type = 3;
   */
  cellType?: ProtoBoxedTableCellType;

  constructor(data?: PartialMessage<ProtoTableCellConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoTableCellConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoTableCellConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoTableCellConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoTableCellConfig;

  static equals(a: ProtoTableCellConfig | PlainMessage<ProtoTableCellConfig> | undefined, b: ProtoTableCellConfig | PlainMessage<ProtoTableCellConfig> | undefined): boolean;
}

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoTableCellSettings
 */
export declare class ProtoTableCellSettings extends Message<ProtoTableCellSettings> {
  /**
   * @generated from field: utils.v1.ProtoMeasure width = 1;
   */
  width?: ProtoMeasure;

  /**
   * @generated from field: utils.v1.ProtoBoxedHorizontalAlignment align = 2;
   */
  align?: ProtoBoxedHorizontalAlignment;

  /**
   * @generated from field: utils.v1.ProtoBoxedVerticalAlignment valign = 3;
   */
  valign?: ProtoBoxedVerticalAlignment;

  /**
   * @generated from field: utils.v1.ProtoColor background_color = 4;
   */
  backgroundColor?: ProtoColor;

  /**
   * @generated from field: utils.v1.ProtoSideMeasures padding = 5;
   */
  padding?: ProtoSideMeasures;

  /**
   * @generated from field: utils.v1.ProtoSideBorders border = 6;
   */
  border?: ProtoSideBorders;

  /**
   * @generated from field: utils.v1.ProtoSideMeasures margin = 7;
   */
  margin?: ProtoSideMeasures;

  /**
   * @generated from field: box.v1.ProtoBoxedDouble rotation = 8;
   */
  rotation?: ProtoBoxedDouble;

  /**
   * If defaultParagraphFormat is not null, it contains the name of
   * a paragraph format, which should be used as default paragraph format
   * for content in a table cell using these settings.
   *
   * @generated from field: box.v1.ProtoBoxedString default_paragraph_format = 9;
   */
  defaultParagraphFormat?: ProtoBoxedString;

  constructor(data?: PartialMessage<ProtoTableCellSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoTableCellSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoTableCellSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoTableCellSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoTableCellSettings;

  static equals(a: ProtoTableCellSettings | PlainMessage<ProtoTableCellSettings> | undefined, b: ProtoTableCellSettings | PlainMessage<ProtoTableCellSettings> | undefined): boolean;
}

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoTableWS
 */
export declare class ProtoTableWS extends Message<ProtoTableWS> {
  /**
   * @generated from field: uint32 min_lines_before = 1;
   */
  minLinesBefore: number;

  /**
   * @generated from field: uint32 min_lines_after = 2;
   */
  minLinesAfter: number;

  /**
   * @generated from field: uint32 priority = 3;
   */
  priority: number;

  constructor(data?: PartialMessage<ProtoTableWS>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoTableWS";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoTableWS;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoTableWS;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoTableWS;

  static equals(a: ProtoTableWS | PlainMessage<ProtoTableWS> | undefined, b: ProtoTableWS | PlainMessage<ProtoTableWS> | undefined): boolean;
}

