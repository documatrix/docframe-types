// Code generated by go generate; DO NOT EDIT.
// This file was generated by docframe document element generator
package docframepb


func (ProtoDirectory *ProtoDirectory) ToNode(children ...Message) *Node {
	nodeChildren := make([]*Node, len(children))
	for i, c := range children {
		nodeChildren[i] = c.ToNode()
	}

	node := &Node{
		Object: &Node_Directory{
			Directory: ProtoDirectory,
		},
		Children: nodeChildren,
	}

	return node
}

