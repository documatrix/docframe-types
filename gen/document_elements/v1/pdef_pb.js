// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/pdef.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ProtoBoxedMeasure } from "../../utils/v1/measure_pb.js";

/**
 * @generated from message document_elements.v1.ProtoPDef
 */
export const ProtoPDef = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoPDef",
  () => [
    { no: 1, name: "page_width", kind: "message", T: ProtoBoxedMeasure },
    { no: 2, name: "page_depth", kind: "message", T: ProtoBoxedMeasure },
    { no: 3, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
