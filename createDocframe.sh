#!/bin/bash
set -v

mkdir -p build

# .proto files and the protofiles.txt file need a new line at the end

> build/docframe.proto

echo 'syntax = "proto3";' >> build/docframe.proto

# Do not change the order - some .proto files depend on other .proto files
declare -a FileArray=(
  "src/Box/box.bool.proto"
  "src/Box/box.double.proto"
  "src/Box/box.int32.proto"
  "src/Box/box.uint32.proto"
  "src/Box/box.string.proto"
  "src/Util/util.spb_mode.proto"
  "src/Util/util.rule_style.proto"
  "src/Util/util.strikethrough_spec.proto"
  "src/Util/util.text.proto"
  "src/Util/util.measure.proto"
  "src/Util/util.advanced_illustration_area_image_settings.proto"
  "src/Util/util.font.proto"
  "src/Util/util.color.proto"
  "src/Util/util.align.proto"
  "src/Util/util.barcode_type.proto"
  "src/DocumentElements/documentelements.linebreak.proto"
  "src/Util/util.border.proto"
  "src/Util/util.column_settings.proto"
  "src/Util/util.graphic_state.proto"
  "src/Util/util.html_parser.proto"
  "src/Util/util.underline_spec.proto"
  "src/Util/util.image_settings.proto"
  "src/Util/util.semantic_type.proto"
  "src/DocumentElements/documentelements.document_element.proto"
  "src/DocumentElements/documentelements.branch_document_element.proto"
  "src/DocumentElements/documentelements.link.proto"
  "src/DocumentElements/documentelements.list_level_setting.proto"
  "src/DocumentElements/documentelements.list_setting.proto"
  "src/DocumentElements/documentelements.named_string.proto"
  "src/DocumentElements/documentelements.paragraph.proto"
  "src/DocumentElements/documentelements.paragraph_format.proto"
  "src/DocumentElements/documentelements.section.proto"
  "src/DocumentElements/documentelements.space_vertically.proto"
  "src/DocumentElements/documentelements.span.proto"
  "src/DocumentElements/documentelements.table.proto"
  "src/DocumentElements/documentelements.text.proto"
  "src/DocumentElements/documentelements.barcode.proto"
  "src/DocumentElements/documentelements.brick_reference.proto"
  "src/DocumentElements/documentelements.brick.proto"
  "src/DocumentElements/documentelements.template.proto"
  "src/DocumentElements/documentelements.header.proto"
  "src/DocumentElements/documentelements.footer.proto"
  "src/node.proto"
  "src/DocumentElements/documentelements.image.proto"
  "src/DocumentElements/documentelements.directory.proto"
  "src/DocumentElements/documentelements.textbrick.proto"
  "src/DocumentElements/documentelements.variable.proto"
  "src/DocumentElements/documentelements.formatted.proto"
  "src/DocumentElements/documentelements.apply_cdef.proto"
  "src/DocumentElements/documentelements.apply_pdef.proto"
  "src/DocumentElements/documentelements.apply_pt_config.proto"
  "src/DocumentElements/documentelements.apply_ul_config.proto"
  "src/DocumentElements/documentelements.cdef.proto"
  "src/DocumentElements/documentelements.pdef.proto"
  "src/DocumentElements/documentelements.pt_config.proto"
  "src/DocumentElements/documentelements.ul_config.proto"
  "src/DocumentElements/documentelements.new_page.proto"
  "src/DocumentElements/documentelements.indentation.proto"
  "src/DocumentElements/documentelements.carry_over.proto"
  "src/DocumentElements/documentelements.loop_entry.proto"
  "src/DocumentElements/documentelements.loop.proto"
  "src/DocumentElements/documentelements.sub_total.proto"
  "src/DocumentElements/documentelements.ws_area.proto"
  "src/DocumentElements/documentelements.rule.proto"
  "src/DocumentElements/documentelements.color_def.proto"
  "src/DocumentElements/documentelements.layout.proto"
  "src/DocumentElements/documentelements.advanced_illustration_area.proto"
  "src/DocumentElements/documentelements.adjust_horizontally.proto"
  "src/DocumentElements/documentelements.doctype_script.proto"
  "src/DocumentElements/documentelements.dmscript.proto"
)

for file in ${FileArray[@]}; do
  while read line; do
    if [[ $line != *"syntax = "* ]]; then
      if [[ $line != *"import "* ]]; then
        if [[ $line != "//"* ]]; then
          echo $line >> build/docframe.proto
        fi
      fi
    fi
  done < $file
done

# replace git with https, because a github account is needed for git, but not for https
./node_modules/.bin/pbjs -t static-module -w commonjs -o ./build/Docframe.js ./build/docframe.proto
node ./repair_pbjs.js < ./build/Docframe.js >./build/Docframe.js.repaired
mv ./build/Docframe.js.repaired ./build/Docframe.js
./node_modules/.bin/pbts -o ./build/Docframe.d.ts ./build/Docframe.js

# MSYS_NO_PATHCONV=1 fixes build on windows (git bash)
MSYS_NO_PATHCONV=1 protoc --go_out=. --go_opt=Mbuild/docframe.proto=/docframepb ./build/docframe.proto

pushd docframepb
go generate .
popd

