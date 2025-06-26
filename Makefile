PROTO_FILES = $(shell find proto -name '*.proto')

gen/document_elements/v1/message_generated.go: $(PROTO_FILES)
	buf lint proto
	buf generate proto

	go run ./tools/proto_node_generator/proto_node_generator.go -proto-document-elements-dir ./proto/document_elements/v1 -proto-utils-dir ./proto/utils/v1 -destination-dir gen/document_elements/v1/

.PHONY: clean
clean:
	rm -rf gen
