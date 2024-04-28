// @generated by protoc-gen-es v1.9.0
// @generated from file box/v1/int32.proto (package box.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message box.v1.ProtoBoxedInt32
 */
export declare class ProtoBoxedInt32 extends Message<ProtoBoxedInt32> {
  /**
   * @generated from field: int32 value = 1;
   */
  value: number;

  /**
   * @generated from field: bool is_null = 2;
   */
  isNull: boolean;

  constructor(data?: PartialMessage<ProtoBoxedInt32>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "box.v1.ProtoBoxedInt32";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoBoxedInt32;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoBoxedInt32;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoBoxedInt32;

  static equals(a: ProtoBoxedInt32 | PlainMessage<ProtoBoxedInt32> | undefined, b: ProtoBoxedInt32 | PlainMessage<ProtoBoxedInt32> | undefined): boolean;
}
