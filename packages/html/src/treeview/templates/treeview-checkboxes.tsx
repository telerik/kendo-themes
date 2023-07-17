import { Treeview, TreeviewItem, TreeviewGroup } from "../../treeview";

export const TreeviewCheckboxes = (props) => (
    <Treeview
        children={[
            <TreeviewItem text="Root 1" showCheckbox />,
            <TreeviewItem text="Root 2" showCheckbox expanded>
                <TreeviewGroup>
                    <TreeviewItem text="Child 2.1" showCheckbox />
                    <TreeviewItem text="Child 2.2" showCheckbox>
                        <TreeviewGroup>
                            <TreeviewItem text="Child 2.2.1" />
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem text="Child 2.3" showCheckbox />
                    <TreeviewItem text="Load more..." leafClassName="k-treeview-load-more-button" />
                </TreeviewGroup>
            </TreeviewItem>,
            <TreeviewItem text="Root 3" showCheckbox>
                <TreeviewItem text="Child 3.1" />
                <TreeviewItem text="Child 3.2" />
                <TreeviewItem text="Child 3.3" />
            </TreeviewItem>
        ]}
        {...props}
    >
    </Treeview>
);
