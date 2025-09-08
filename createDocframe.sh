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
  "src/Util/util.barcode.proto"
  "src/document_elements/documentelements.linebreak.proto"
  "src/Util/util.border.proto"
  "src/Util/util.column_settings.proto"
  "src/Util/util.graphic_state.proto"
  "src/Util/util.html_parser.proto"
  "src/Util/util.underline_spec.proto"
  "src/Util/util.image_settings.proto"
  "src/Util/util.semantic_type.proto"
  "src/Util/util.input_field.proto"
  "src/Util/util.inheritance.proto"
  "src/document_elements/documentelements.document_element.proto"
  "src/document_elements/documentelements.branch_document_element.proto"
  "src/document_elements/documentelements.link.proto"
  "src/document_elements/documentelements.list_level_setting.proto"
  "src/document_elements/documentelements.list_setting.proto"
  "src/document_elements/documentelements.named_string.proto"
  "src/document_elements/documentelements.paragraph.proto"
  "src/document_elements/documentelements.paragraph_format.proto"
  "src/document_elements/documentelements.section.proto"
  "src/document_elements/documentelements.space_vertically.proto"
  "src/document_elements/documentelements.span.proto"
  "src/document_elements/documentelements.table.proto"
  "src/document_elements/documentelements.text.proto"
  "src/document_elements/documentelements.barcode.proto"
  "src/document_elements/documentelements.brick_reference.proto"
  "src/document_elements/documentelements.brick.proto"
  "src/document_elements/documentelements.template.proto"
  "src/document_elements/documentelements.header.proto"
  "src/document_elements/documentelements.footer.proto"
  "src/node.proto"
  "src/document_elements/documentelements.image.proto"
  "src/document_elements/documentelements.directory.proto"
  "src/document_elements/documentelements.textbrick.proto"
  "src/document_elements/documentelements.variable.proto"
  "src/document_elements/documentelements.formatted.proto"
  "src/document_elements/documentelements.apply_cdef.proto"
  "src/document_elements/documentelements.apply_pdef.proto"
  "src/document_elements/documentelements.apply_pt_config.proto"
  "src/document_elements/documentelements.apply_ul_config.proto"
  "src/document_elements/documentelements.cdef.proto"
  "src/document_elements/documentelements.pdef.proto"
  "src/document_elements/documentelements.pt_config.proto"
  "src/document_elements/documentelements.ul_config.proto"
  "src/document_elements/documentelements.new_page.proto"
  "src/document_elements/documentelements.indentation.proto"
  "src/document_elements/documentelements.carry_over.proto"
  "src/document_elements/documentelements.loop_entry.proto"
  "src/document_elements/documentelements.loop.proto"
  "src/document_elements/documentelements.sub_total.proto"
  "src/document_elements/documentelements.ws_area.proto"
  "src/document_elements/documentelements.rule.proto"
  "src/document_elements/documentelements.color_def.proto"
  "src/document_elements/documentelements.layout.proto"
  "src/document_elements/documentelements.advanced_illustration_area.proto"
  "src/document_elements/documentelements.adjust_horizontally.proto"
  "src/document_elements/documentelements.doctype_script.proto"
  "src/document_elements/documentelements.dmscript.proto"
  "src/document_elements/documentelements.dynamic_template.proto"
  "src/document_elements/documentelements.selection.proto"
  "src/document_elements/documentelements.selection_entry.proto"
  "src/document_elements/documentelements.condition.proto"
  "src/document_elements/documentelements.page_condition.proto"
  "src/document_elements/documentelements.locale.proto"
  "src/document_elements/documentelements.tag.proto"
  "src/document_elements/documentelements.paragraph_set_default.proto"
  "src/document_elements/documentelements.input_field.proto"
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
# Add Go bin to PATH for protoc-gen-go
PATH="$HOME/go/bin:$PATH" MSYS_NO_PATHCONV=1 protoc --csharp_out=build --go_out=. --go_opt=Mbuild/docframe.proto=/docframepb ./build/docframe.proto

pushd docframepb
go generate .
popd
