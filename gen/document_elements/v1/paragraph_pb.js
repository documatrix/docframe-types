// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/paragraph.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ProtoSimpleBoxedString } from "../../box/v1/string_pb.js";
import { ProtoParagraphFormat } from "./paragraph_format_pb.js";

/**
 * @generated from message document_elements.v1.ProtoParagraph
 */
export const ProtoParagraph = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoParagraph",
  () => [
    { no: 3, name: "format", kind: "message", T: ProtoSimpleBoxedString },
    { no: 4, name: "overwrite", kind: "message", T: ProtoParagraphFormat },
  ],
);
