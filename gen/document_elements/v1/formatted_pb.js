// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/formatted.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message document_elements.v1.ProtoFormatted
 */
export const ProtoFormatted = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoFormatted",
  () => [
    { no: 1, name: "dteditor_syntax", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "doctype_content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "html_content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
