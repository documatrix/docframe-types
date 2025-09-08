PROTO_FILES = $(shell find proto -name '*.proto')

gen/document_elements/v1/message_generated.go: $(PROTO_FILES)
	buf lint proto
	buf generate proto

	go run ./tools/proto_node_generator/proto_node_generator.go -proto-document-element-dir ./proto/document_element/v1 -proto-util-dir ./proto/util/v1 -destination-dir gen/document_element/v1/

.PHONY: clean
clean:
	rm -rf gen