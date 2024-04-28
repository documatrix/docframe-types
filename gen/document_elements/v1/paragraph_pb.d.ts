// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/paragraph.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ProtoSimpleBoxedString } from "../../box/v1/string_pb.js";
import type { ProtoParagraphFormat } from "./paragraph_format_pb.js";

/**
 * @generated from message document_elements.v1.ProtoParagraph
 */
export declare class ProtoParagraph extends Message<ProtoParagraph> {
  /**
   * @generated from field: box.v1.ProtoSimpleBoxedString format = 3;
   */
  format?: ProtoSimpleBoxedString;

  /**
   * @generated from field: document_elements.v1.ProtoParagraphFormat overwrite = 4;
   */
  overwrite?: ProtoParagraphFormat;

  constructor(data?: PartialMessage<ProtoParagraph>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoParagraph";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoParagraph;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoParagraph;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoParagraph;

  static equals(a: ProtoParagraph | PlainMessage<ProtoParagraph> | undefined, b: ProtoParagraph | PlainMessage<ProtoParagraph> | undefined): boolean;
}
