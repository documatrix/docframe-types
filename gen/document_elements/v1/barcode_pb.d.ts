// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/barcode.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ProtoBarcodeType } from "../../utils/v1/barcode_type_pb.js";
import type { ProtoMeasure } from "../../utils/v1/measure_pb.js";
import type { ProtoImageReferencePoint } from "../../utils/v1/image_settings_pb.js";

/**
 * @generated from message document_elements.v1.ProtoBarcode
 */
export declare class ProtoBarcode extends Message<ProtoBarcode> {
  /**
   * like BrickBody::Brick
   *
   * @generated from field: utils.v1.ProtoBarcodeType type = 1;
   */
  type: ProtoBarcodeType;

  /**
   * @generated from field: utils.v1.ProtoMeasure x = 2;
   */
  x?: ProtoMeasure;

  /**
   * @generated from field: utils.v1.ProtoMeasure y = 3;
   */
  y?: ProtoMeasure;

  /**
   * @generated from field: utils.v1.ProtoImageReferencePoint reference_point = 4;
   */
  referencePoint: ProtoImageReferencePoint;

  /**
   * Rotation in degrees, counter-clockwise
   *
   * @generated from field: float rotation = 5;
   */
  rotation: number;

  /**
   * @generated from field: utils.v1.ProtoMeasure width = 6;
   */
  width?: ProtoMeasure;

  /**
   * @generated from field: utils.v1.ProtoMeasure height = 7;
   */
  height?: ProtoMeasure;

  /**
   * @generated from field: utils.v1.ProtoMeasure padding = 8;
   */
  padding?: ProtoMeasure;

  /**
   * @generated from field: string data = 9;
   */
  data: string;

  /**
   * @generated from field: bool position_absolute = 10;
   */
  positionAbsolute: boolean;

  constructor(data?: PartialMessage<ProtoBarcode>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "document_elements.v1.ProtoBarcode";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtoBarcode;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtoBarcode;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtoBarcode;

  static equals(a: ProtoBarcode | PlainMessage<ProtoBarcode> | undefined, b: ProtoBarcode | PlainMessage<ProtoBarcode> | undefined): boolean;
}
