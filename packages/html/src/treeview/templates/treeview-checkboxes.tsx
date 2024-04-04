import { Treeview, TreeviewItem, TreeviewGroup } from "../../treeview";

export const TreeviewCheckboxes = (props) => (
    <Treeview
        children={[
            <TreeviewItem key="treeview-item-1" top text="Root 1" showCheckbox />,
            <TreeviewItem key="treeview-item-2" text="Root 2" showCheckbox expanded>
                <TreeviewGroup>
                    <TreeviewItem top text="Child 2.1" showCheckbox />
                    <TreeviewItem text="Child 2.2" showCheckbox>
                        <TreeviewGroup>
                            <TreeviewItem bottom text="Child 2.2.1" />
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem bottom text="Child 2.3" showCheckbox />
                </TreeviewGroup>
            </TreeviewItem>,
            <TreeviewItem key="treeview-item-3" bottom text="Root 3" showCheckbox>
                <TreeviewItem top text="Child 3.1" />
                <TreeviewItem text="Child 3.2" />
                <TreeviewItem bottom text="Child 3.3" />
            </TreeviewItem>
        ]}
        {...props}
    >
    </Treeview>
);
