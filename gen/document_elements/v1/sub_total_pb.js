// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/sub_total.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ProtoMeasure } from "../../utils/v1/measure_pb.js";

/**
 * @generated from enum document_elements.v1.ProtoSubTotalPosition
 */
export const ProtoSubTotalPosition = /*@__PURE__*/ proto3.makeEnum(
  "document_elements.v1.ProtoSubTotalPosition",
  [
    {no: 0, name: "PROTO_SUB_TOTAL_POSITION_ABOVE_FOOTER", localName: "ABOVE_FOOTER"},
    {no: 1, name: "PROTO_SUB_TOTAL_POSITION_BELOW_CONTENT", localName: "BELOW_CONTENT"},
  ],
);

/**
 * @generated from message document_elements.v1.ProtoSubTotal
 */
export const ProtoSubTotal = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoSubTotal",
  () => [
    { no: 1, name: "apply_immediate", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "position", kind: "enum", T: proto3.getEnumType(ProtoSubTotalPosition) },
    { no: 3, name: "height", kind: "message", T: ProtoMeasure },
    { no: 4, name: "com_channel_uuids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

