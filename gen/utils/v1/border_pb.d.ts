// @generated by protoc-gen-es v1.9.0
// @generated from file utils/v1/border.proto (package utils.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ProtoMeasure } from "./measure_pb.js";
import type { ProtoColor } from "./color_pb.js";

/**
 * @generated from message utils.v1.ProtoBorder
 */
export declare class ProtoBorder extends Message<ProtoBorder> {
  /**
   * @generated from field: utils.v1.ProtoMeasure weight = 1;
   */
  weight?: ProtoMeasure;

  /**
   * @generated from field: utils.v1.ProtoColor color = 2;
   */
  color?: ProtoColor;

  constructor(data?: PartialMessage<ProtoBorder>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "utils.v1.ProtoBorder";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoBorder;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoBorder;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoBorder;

  static equals(a: ProtoBorder | PlainMessage<ProtoBorder> | undefined, b: ProtoBorder | PlainMessage<ProtoBorder> | undefined): boolean;
}

/**
 * @generated from message utils.v1.ProtoSideBorders
 */
export declare class ProtoSideBorders extends Message<ProtoSideBorders> {
  /**
   * @generated from field: utils.v1.ProtoBorder top = 1;
   */
  top?: ProtoBorder;

  /**
   * @generated from field: utils.v1.ProtoBorder right = 2;
   */
  right?: ProtoBorder;

  /**
   * @generated from field: utils.v1.ProtoBorder bottom = 3;
   */
  bottom?: ProtoBorder;

  /**
   * @generated from field: utils.v1.ProtoBorder left = 4;
   */
  left?: ProtoBorder;

  constructor(data?: PartialMessage<ProtoSideBorders>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "utils.v1.ProtoSideBorders";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoSideBorders;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoSideBorders;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoSideBorders;

  static equals(a: ProtoSideBorders | PlainMessage<ProtoSideBorders> | undefined, b: ProtoSideBorders | PlainMessage<ProtoSideBorders> | undefined): boolean;
}
