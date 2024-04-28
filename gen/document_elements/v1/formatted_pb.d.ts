// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/formatted.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message document_elements.v1.ProtoFormatted
 */
export declare class ProtoFormatted extends Message<ProtoFormatted> {
  /**
   * @generated from field: bool dteditor_syntax = 1;
   */
  dteditorSyntax: boolean;

  /**
   * @generated from field: string doctype_content = 2;
   */
  doctypeContent: string;

  /**
   * @generated from field: string html_content = 3;
   */
  htmlContent: string;

  constructor(data?: PartialMessage<ProtoFormatted>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoFormatted";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoFormatted;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoFormatted;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoFormatted;

  static equals(a: ProtoFormatted | PlainMessage<ProtoFormatted> | undefined, b: ProtoFormatted | PlainMessage<ProtoFormatted> | undefined): boolean;
}
