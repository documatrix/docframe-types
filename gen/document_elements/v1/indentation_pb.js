// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/indentation.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ProtoBoxedMeasure } from "../../utils/v1/measure_pb.js";

/**
 * @generated from message document_elements.v1.ProtoIndentation
 */
export const ProtoIndentation = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoIndentation",
  () => [
    { no: 1, name: "left", kind: "message", T: ProtoBoxedMeasure },
    { no: 2, name: "right", kind: "message", T: ProtoBoxedMeasure },
    { no: 3, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "com_channel_uuids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

