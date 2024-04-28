// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/rule.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ProtoMeasure } from "../../utils/v1/measure_pb.js";
import { ProtoColor } from "../../utils/v1/color_pb.js";
import { ProtoRuleStyle } from "../../utils/v1/rule_style_pb.js";

/**
 * @generated from enum document_elements.v1.ProtoRuleMode
 */
export const ProtoRuleMode = /*@__PURE__*/ proto3.makeEnum(
  "document_elements.v1.ProtoRuleMode",
  [
    {no: 0, name: "PROTO_RULE_MODE_NORMAL", localName: "NORMAL"},
    {no: 1, name: "PROTO_RULE_MODE_BOUNDARY", localName: "BOUNDARY"},
  ],
);

/**
 * @generated from message document_elements.v1.ProtoRule
 */
export const ProtoRule = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoRule",
  () => [
    { no: 1, name: "x_offset", kind: "message", T: ProtoMeasure },
    { no: 2, name: "y_offset", kind: "message", T: ProtoMeasure },
    { no: 3, name: "width", kind: "message", T: ProtoMeasure },
    { no: 4, name: "thickness", kind: "message", T: ProtoMeasure },
    { no: 5, name: "rotation", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 6, name: "color", kind: "message", T: ProtoColor },
    { no: 7, name: "style", kind: "enum", T: proto3.getEnumType(ProtoRuleStyle) },
    { no: 8, name: "mode", kind: "enum", T: proto3.getEnumType(ProtoRuleMode) },
    { no: 9, name: "boundaries", kind: "message", T: ProtoRuleBoundaries },
  ],
);

/**
 * go-gen:ignore
 *
 * @generated from message document_elements.v1.ProtoRuleBoundaries
 */
export const ProtoRuleBoundaries = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoRuleBoundaries",
  () => [
    { no: 1, name: "start", kind: "message", T: ProtoMeasure },
    { no: 2, name: "end", kind: "message", T: ProtoMeasure },
  ],
);

