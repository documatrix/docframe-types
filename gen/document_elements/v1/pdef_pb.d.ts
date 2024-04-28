// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/pdef.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ProtoBoxedMeasure } from "../../utils/v1/measure_pb.js";

/**
 * @generated from message document_elements.v1.ProtoPDef
 */
export declare class ProtoPDef extends Message<ProtoPDef> {
  /**
   * @generated from field: utils.v1.ProtoBoxedMeasure page_width = 1;
   */
  pageWidth?: ProtoBoxedMeasure;

  /**
   * @generated from field: utils.v1.ProtoBoxedMeasure page_depth = 2;
   */
  pageDepth?: ProtoBoxedMeasure;

  /**
   * @generated from field: string uuid = 3;
   */
  uuid: string;

  constructor(data?: PartialMessage<ProtoPDef>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoPDef";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoPDef;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoPDef;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoPDef;

  static equals(a: ProtoPDef | PlainMessage<ProtoPDef> | undefined, b: ProtoPDef | PlainMessage<ProtoPDef> | undefined): boolean;
}

