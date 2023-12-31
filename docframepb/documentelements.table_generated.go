// Code generated by go generate; DO NOT EDIT.
// This file was generated by docframe document element generator
package docframepb


func (ProtoTable *ProtoTable) ToNode(children ...Message) *Node {
	nodeChildren := make([]*Node, len(children))
	for i, c := range children {
		nodeChildren[i] = c.ToNode()
	}

	node := &Node{
		Object: &Node_Table{
			Table: ProtoTable,
		},
		Children: nodeChildren,
	}

	return node
}

func (ProtoTableConfig *ProtoTableConfig) ToNode(children ...Message) *Node {
	nodeChildren := make([]*Node, len(children))
	for i, c := range children {
		nodeChildren[i] = c.ToNode()
	}

	node := &Node{
		Object: &Node_TableConfig{
			TableConfig: ProtoTableConfig,
		},
		Children: nodeChildren,
	}

	return node
}

func (ProtoTableContentGroup *ProtoTableContentGroup) ToNode(children ...Message) *Node {
	nodeChildren := make([]*Node, len(children))
	for i, c := range children {
		nodeChildren[i] = c.ToNode()
	}

	node := &Node{
		Object: &Node_TableContentGroup{
			TableContentGroup: ProtoTableContentGroup,
		},
		Children: nodeChildren,
	}

	return node
}

func (ProtoTableContentGroupConfig *ProtoTableContentGroupConfig) ToNode(children ...Message) *Node {
	nodeChildren := make([]*Node, len(children))
	for i, c := range children {
		nodeChildren[i] = c.ToNode()
	}

	node := &Node{
		Object: &Node_TableContentGroupConfig{
			TableContentGroupConfig: ProtoTableContentGroupConfig,
		},
		Children: nodeChildren,
	}

	return node
}

func (ProtoTableRow *ProtoTableRow) ToNode(children ...Message) *Node {
	nodeChildren := make([]*Node, len(children))
	for i, c := range children {
		nodeChildren[i] = c.ToNode()
	}

	node := &Node{
		Object: &Node_TableRow{
			TableRow: ProtoTableRow,
		},
		Children: nodeChildren,
	}

	return node
}

func (ProtoTableRowConfig *ProtoTableRowConfig) ToNode(children ...Message) *Node {
	nodeChildren := make([]*Node, len(children))
	for i, c := range children {
		nodeChildren[i] = c.ToNode()
	}

	node := &Node{
		Object: &Node_TableRowConfig{
			TableRowConfig: ProtoTableRowConfig,
		},
		Children: nodeChildren,
	}

	return node
}

func (ProtoTableCell *ProtoTableCell) ToNode(children ...Message) *Node {
	nodeChildren := make([]*Node, len(children))
	for i, c := range children {
		nodeChildren[i] = c.ToNode()
	}

	node := &Node{
		Object: &Node_TableCell{
			TableCell: ProtoTableCell,
		},
		Children: nodeChildren,
	}

	return node
}

func (ProtoTableCellConfig *ProtoTableCellConfig) ToNode(children ...Message) *Node {
	nodeChildren := make([]*Node, len(children))
	for i, c := range children {
		nodeChildren[i] = c.ToNode()
	}

	node := &Node{
		Object: &Node_TableCellConfig{
			TableCellConfig: ProtoTableCellConfig,
		},
		Children: nodeChildren,
	}

	return node
}

