// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/paragraph_format.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ProtoBoxedString, ProtoSimpleBoxedString } from "../../box/v1/string_pb.js";
import type { ProtoBoxedBool } from "../../box/v1/bool_pb.js";
import type { ProtoBoxedFont } from "../../utils/v1/font_pb.js";
import type { ProtoBoxedColor } from "../../utils/v1/color_pb.js";
import type { ProtoBoxedUnderlineSpec } from "../../utils/v1/underline_spec_pb.js";
import type { ProtoBoxedMeasure } from "../../utils/v1/measure_pb.js";
import type { ProtoBoxedHorizontalAlignment } from "../../utils/v1/align_pb.js";
import type { ProtoBoxedInt32 } from "../../box/v1/int32_pb.js";
import type { ProtoBoxedStrikethroughSpec } from "../../utils/v1/strikethrough_spec_pb.js";
import type { ProtoBoxedSPBMode } from "../../utils/v1/spb_mode_pb.js";
import type { ProtoBoxedListSetting } from "./list_setting_pb.js";

/**
 * @generated from message document_elements.v1.ProtoParagraphFormat
 */
export declare class ProtoParagraphFormat extends Message<ProtoParagraphFormat> {
  /**
   * @generated from field: box.v1.ProtoSimpleBoxedString base_format = 1;
   */
  baseFormat?: ProtoSimpleBoxedString;

  /**
   * @generated from field: box.v1.ProtoBoxedString name = 2;
   */
  name?: ProtoBoxedString;

  /**
   * @generated from field: box.v1.ProtoBoxedBool default = 3;
   */
  default?: ProtoBoxedBool;

  /**
   * @generated from field: utils.v1.ProtoBoxedFont font = 4;
   */
  font?: ProtoBoxedFont;

  /**
   * @generated from field: box.v1.ProtoBoxedBool bold = 5;
   */
  bold?: ProtoBoxedBool;

  /**
   * @generated from field: box.v1.ProtoBoxedBool italic = 6;
   */
  italic?: ProtoBoxedBool;

  /**
   * @generated from field: utils.v1.ProtoBoxedColor font_color = 7;
   */
  fontColor?: ProtoBoxedColor;

  /**
   * @generated from field: utils.v1.ProtoBoxedUnderlineSpec underline = 8;
   */
  underline?: ProtoBoxedUnderlineSpec;

  /**
   * @generated from field: utils.v1.ProtoBoxedMeasure font_size = 9;
   */
  fontSize?: ProtoBoxedMeasure;

  /**
   * @generated from field: utils.v1.ProtoBoxedMeasure character_width = 10;
   */
  characterWidth?: ProtoBoxedMeasure;

  /**
   * @generated from field: utils.v1.ProtoBoxedMeasure character_spacing = 11;
   */
  characterSpacing?: ProtoBoxedMeasure;

  /**
   * @generated from field: utils.v1.ProtoBoxedMeasure line_feed = 12;
   */
  lineFeed?: ProtoBoxedMeasure;

  /**
   * @generated from field: utils.v1.ProtoBoxedHorizontalAlignment alignment = 13;
   */
  alignment?: ProtoBoxedHorizontalAlignment;

  /**
   * @generated from field: utils.v1.ProtoBoxedMeasure indention_width = 14;
   */
  indentionWidth?: ProtoBoxedMeasure;

  /**
   * @generated from field: box.v1.ProtoBoxedInt32 indention_level = 15;
   */
  indentionLevel?: ProtoBoxedInt32;

  /**
   * @generated from field: utils.v1.ProtoBoxedMeasure space_above = 16;
   */
  spaceAbove?: ProtoBoxedMeasure;

  /**
   * @generated from field: utils.v1.ProtoBoxedMeasure space_below = 17;
   */
  spaceBelow?: ProtoBoxedMeasure;

  /**
   * @generated from field: box.v1.ProtoBoxedInt32 widow_setting = 18;
   */
  widowSetting?: ProtoBoxedInt32;

  /**
   * @generated from field: box.v1.ProtoBoxedInt32 orphan_setting = 19;
   */
  orphanSetting?: ProtoBoxedInt32;

  /**
   * @generated from field: box.v1.ProtoBoxedInt32 widow_priority = 20;
   */
  widowPriority?: ProtoBoxedInt32;

  /**
   * @generated from field: utils.v1.ProtoBoxedStrikethroughSpec strikethrough = 21;
   */
  strikethrough?: ProtoBoxedStrikethroughSpec;

  /**
   * @generated from field: utils.v1.ProtoBoxedSPBMode superscript_subscript = 22;
   */
  superscriptSubscript?: ProtoBoxedSPBMode;

  /**
   * @generated from field: utils.v1.ProtoBoxedColor background_color = 23;
   */
  backgroundColor?: ProtoBoxedColor;

  /**
   * @generated from field: document_elements.v1.ProtoBoxedListSetting list_setting = 24;
   */
  listSetting?: ProtoBoxedListSetting;

  /**
   * @generated from field: box.v1.ProtoBoxedBool hyphenation = 25;
   */
  hyphenation?: ProtoBoxedBool;

  /**
   * @generated from field: box.v1.ProtoBoxedString pre_named_string = 26;
   */
  preNamedString?: ProtoBoxedString;

  /**
   * @generated from field: box.v1.ProtoBoxedString post_named_string = 27;
   */
  postNamedString?: ProtoBoxedString;

  /**
   * @generated from field: box.v1.ProtoBoxedString semantic_type = 28;
   */
  semanticType?: ProtoBoxedString;

  constructor(data?: PartialMessage<ProtoParagraphFormat>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoParagraphFormat";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoParagraphFormat;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoParagraphFormat;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoParagraphFormat;

  static equals(a: ProtoParagraphFormat | PlainMessage<ProtoParagraphFormat> | undefined, b: ProtoParagraphFormat | PlainMessage<ProtoParagraphFormat> | undefined): boolean;
}

