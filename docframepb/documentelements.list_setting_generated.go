// Code generated by go generate; DO NOT EDIT.
// This file was generated by docframe document element generator
package docframepb


func (ProtoListSetting *ProtoListSetting) ToNode(children ...Message) *Node {
	nodeChildren := make([]*Node, len(children))
	for i, c := range children {
		nodeChildren[i] = c.ToNode()
	}

	node := &Node{
		Object: &Node_ListSetting{
			ListSetting: ProtoListSetting,
		},
		Children: nodeChildren,
	}

	return node
}

