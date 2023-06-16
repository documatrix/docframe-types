package docframepb

import (
	"fmt"

	"google.golang.org/protobuf/proto"
)

//go:generate go run ../tools/proto_node_generator/proto_node_generator.go -proto-document-element-dir ../src/DocumentElements -proto-util-dir ../src/Util -destination-dir .

type Message interface {
	proto.Message

	ToNode(children ...Message) *Node
}

func (n *Node) ToNode(...Message) *Node {
	return n
}

type Protos []Message

func (protos Protos) ToProtoBytes() ([]byte, error) {
	rootNode := &Node{}

	var err error

	rootNode.Children = make([]*Node, len(protos))

	for i, p := range protos {
		rootNode.Children[i] = p.ToNode()
	}

	data, err := proto.Marshal(rootNode)
	if err != nil {
		return nil, fmt.Errorf("error marshalling root node: %w", err)
	}

	return data, nil
}
