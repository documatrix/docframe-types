// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/brick_reference.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message document_elements.v1.ProtoBrickReference
 */
export declare class ProtoBrickReference extends Message<ProtoBrickReference> {
  /**
   * comparable with BricksTemplates::BRICK
   *
   * @generated from field: string intern_name = 1;
   */
  internName: string;

  /**
   * @generated from field: uint32 version = 2;
   */
  version: number;

  constructor(data?: PartialMessage<ProtoBrickReference>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoBrickReference";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoBrickReference;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoBrickReference;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoBrickReference;

  static equals(a: ProtoBrickReference | PlainMessage<ProtoBrickReference> | undefined, b: ProtoBrickReference | PlainMessage<ProtoBrickReference> | undefined): boolean;
}

