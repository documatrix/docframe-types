// @generated by protoc-gen-es v1.9.0
// @generated from file document_elements/v1/new_page.proto (package document_elements.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum document_elements.v1.ProtoPageMode
 */
export const ProtoPageMode = /*@__PURE__*/ proto3.makeEnum(
  "document_elements.v1.ProtoPageMode",
  [
    {no: 0, name: "PROTO_PAGE_MODE_NEXT_PAGE", localName: "NEXT_PAGE"},
    {no: 1, name: "PROTO_PAGE_MODE_NEXT_RECTO_PAGE", localName: "NEXT_RECTO_PAGE"},
    {no: 2, name: "PROTO_PAGE_MODE_NEXT_VERSO_PAGE", localName: "NEXT_VERSO_PAGE"},
  ],
);

/**
 * @generated from enum document_elements.v1.ProtoPageOrientation
 */
export const ProtoPageOrientation = /*@__PURE__*/ proto3.makeEnum(
  "document_elements.v1.ProtoPageOrientation",
  [
    {no: 0, name: "PROTO_PAGE_ORIENTATION_UNSET", localName: "UNSET"},
    {no: 1, name: "PROTO_PAGE_ORIENTATION_PORTRAIT", localName: "PORTRAIT"},
    {no: 2, name: "PROTO_PAGE_ORIENTATION_LANDSCAPE", localName: "LANDSCAPE"},
    {no: 3, name: "PROTO_PAGE_ORIENTATION_INVERSE_PORTRAIT", localName: "INVERSE_PORTRAIT"},
    {no: 4, name: "PROTO_PAGE_ORIENTATION_INVERSE_LANDSCAPE", localName: "INVERSE_LANDSCAPE"},
  ],
);

/**
 * @generated from message document_elements.v1.ProtoNewPage
 */
export const ProtoNewPage = /*@__PURE__*/ proto3.makeMessageType(
  "document_elements.v1.ProtoNewPage",
  () => [
    { no: 1, name: "paper_tray", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "paper_count", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "page_mode", kind: "enum", T: proto3.getEnumType(ProtoPageMode) },
    { no: 4, name: "page_orientation", kind: "enum", T: proto3.getEnumType(ProtoPageOrientation) },
  ],
);
