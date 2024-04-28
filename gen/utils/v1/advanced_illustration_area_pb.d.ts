// @generated by protoc-gen-es v1.9.0
// @generated from file utils/v1/advanced_illustration_area.proto (package utils.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ProtoSideMeasures } from "./measure_pb.js";

/**
 * @generated from enum utils.v1.ProtoAdvancedIllustrationAreaTextFlowType
 */
export declare enum ProtoAdvancedIllustrationAreaTextFlowType {
  /**
   * @generated from enum value: PROTO_ADVANCED_ILLUSTRATION_AREA_TEXT_FLOW_TYPE_DO_NOT_USE_AT_ALL = 0;
   */
  DO_NOT_USE_AT_ALL = 0,

  /**
   * @generated from enum value: PROTO_ADVANCED_ILLUSTRATION_AREA_TEXT_FLOW_TYPE_AROUND = 1;
   */
  AROUND = 1,

  /**
   * @generated from enum value: PROTO_ADVANCED_ILLUSTRATION_AREA_TEXT_FLOW_TYPE_NO_FLOW = 2;
   */
  NO_FLOW = 2,

  /**
   * @generated from enum value: PROTO_ADVANCED_ILLUSTRATION_AREA_TEXT_FLOW_TYPE_FOREGROUND = 3;
   */
  FOREGROUND = 3,

  /**
   * @generated from enum value: PROTO_ADVANCED_ILLUSTRATION_AREA_TEXT_FLOW_TYPE_BACKGROUND = 4;
   */
  BACKGROUND = 4,
}

/**
 * @generated from message utils.v1.ProtoBoxedAdvancedIllustrationAreaTextFlowType
 */
export declare class ProtoBoxedAdvancedIllustrationAreaTextFlowType extends Message<ProtoBoxedAdvancedIllustrationAreaTextFlowType> {
  /**
   * @generated from field: utils.v1.ProtoAdvancedIllustrationAreaTextFlowType value = 1;
   */
  value: ProtoAdvancedIllustrationAreaTextFlowType;

  /**
   * @generated from field: bool is_null = 2;
   */
  isNull: boolean;

  constructor(data?: PartialMessage<ProtoBoxedAdvancedIllustrationAreaTextFlowType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "utils.v1.ProtoBoxedAdvancedIllustrationAreaTextFlowType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoBoxedAdvancedIllustrationAreaTextFlowType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoBoxedAdvancedIllustrationAreaTextFlowType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoBoxedAdvancedIllustrationAreaTextFlowType;

  static equals(a: ProtoBoxedAdvancedIllustrationAreaTextFlowType | PlainMessage<ProtoBoxedAdvancedIllustrationAreaTextFlowType> | undefined, b: ProtoBoxedAdvancedIllustrationAreaTextFlowType | PlainMessage<ProtoBoxedAdvancedIllustrationAreaTextFlowType> | undefined): boolean;
}

/**
 * @generated from message utils.v1.ProtoAdvancedIllustrationArea
 */
export declare class ProtoAdvancedIllustrationArea extends Message<ProtoAdvancedIllustrationArea> {
  /**
   * @generated from field: utils.v1.ProtoBoxedAdvancedIllustrationAreaTextFlowType text_flow = 1;
   */
  textFlow?: ProtoBoxedAdvancedIllustrationAreaTextFlowType;

  /**
   * @generated from field: utils.v1.ProtoSideMeasures margin = 2;
   */
  margin?: ProtoSideMeasures;

  constructor(data?: PartialMessage<ProtoAdvancedIllustrationArea>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "utils.v1.ProtoAdvancedIllustrationArea";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoAdvancedIllustrationArea;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoAdvancedIllustrationArea;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoAdvancedIllustrationArea;

  static equals(a: ProtoAdvancedIllustrationArea | PlainMessage<ProtoAdvancedIllustrationArea> | undefined, b: ProtoAdvancedIllustrationArea | PlainMessage<ProtoAdvancedIllustrationArea> | undefined): boolean;
}
