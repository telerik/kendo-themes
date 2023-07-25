import { Treeview, TreeviewItem, TreeviewGroup } from "../../treeview";

export const TreeviewHierarchy = (props) => (
    <Treeview
        children={[
            <TreeviewItem text="Root 1" />,
            <TreeviewItem text="Root 2" expanded>
                <TreeviewGroup>
                    <TreeviewItem text="Child 2.1" />
                    <TreeviewItem text="Child 2.2">
                        <TreeviewGroup>
                            <TreeviewItem text="Child 2.2.1" />
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem text="Child 2.3" />
                    <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more ..." />
                </TreeviewGroup>
            </TreeviewItem>,
            <TreeviewItem text="Root 3">
                <TreeviewGroup>
                    <TreeviewItem text="Child 3.1" />
                    <TreeviewItem text="Child 3.2" />
                    <TreeviewItem text="Child 3.3" />
                </TreeviewGroup>
            </TreeviewItem>
        ]}
        {...props}
    >
    </Treeview>
);
