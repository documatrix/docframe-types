# docframe-types

Protobuf type definitions for creating documents. Used by
[Deuterium](https://d2lib.io) for creating docframe objects and by several
DocuMatrix products.

## Layout

| Path | Content |
|------|---------|
| `src/*.proto` | Source of truth. One [buf](https://buf.build) module, package `docframe`. |
| `docframepb/` | Generated Go code (`protoc-gen-go`) plus `ToNode()` helpers. |
| `build/` | Generated TypeScript/JavaScript (`protoc-gen-es`, CommonJS + `.d.ts`). `index.js` re-exports every module. |
| `build/csharp/` | Generated C#. |
| `tools/protoc-gen-docframe-node/` | protoc plugin generating `ToNode()` for every member of `Node.object`. |
| `tools/ts-index/` | Writes `build/index.js` / `build/index.d.ts`. |

All generated code is committed. Go consumers import
`github.com/documatrix/docframe-types/docframepb`, JavaScript consumers import
the npm package `docframe-types`.

## Building

```sh
bun install
bun run build     # buf generate + index
bun run lint      # buf lint
bun run breaking  # buf breaking against main
```

`buf generate` uses remote plugins for Go and C#, and the local
`@bufbuild/protoc-gen-es` so the generator version always matches the
`@bufbuild/protobuf` runtime in `package.json`. The Go `ToNode()` plugin is run
with `go run`, so Go is required.

## JavaScript usage

The package is generated with [protobuf-es](https://github.com/bufbuild/protobuf-es):

```ts
import { create, toBinary, fromBinary } from "@bufbuild/protobuf";
import { ProtoParagraphSchema, NodeSchema } from "docframe-types";

const paragraph = create(ProtoParagraphSchema, { uuid: "p1" });
const bytes = toBinary(NodeSchema, create(NodeSchema, { object: { case: "paragraph", value: paragraph } }));
const node = fromBinary(NodeSchema, bytes);
```

## Compatibility

Serialized documents are stable across versions. Field numbers are never
reused: removed fields are kept as `reserved`, and `buf breaking` (category
`WIRE_JSON`) runs in CI against `main`.

One non-wire change: the legacy schema had no proto package, the current one
is `package docframe`. Fully-qualified type names therefore changed
(`ProtoParagraph` is now `docframe.ProtoParagraph`). This affects only
`google.protobuf.Any` payloads and descriptor lookups by full name, not
serialized documents.

The legacy `parent` and `_children` fields were removed from all document
element messages (they were never serialized; the tree structure lives in
`Node.children`). Their field numbers and names stay reserved.
