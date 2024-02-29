import { Treeview, TreeviewItem, TreeviewGroup } from "../../treeview";

export const TreeviewHierarchy = (props) => (
    <Treeview
        children={[
            <TreeviewItem top text="Root 1" />,
            <TreeviewItem text="Root 2" expanded>
                <TreeviewGroup>
                    <TreeviewItem top text="Child 2.1" />
                    <TreeviewItem text="Child 2.2">
                        <TreeviewGroup>
                            <TreeviewItem top text="Child 2.2.1" />
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem text="Child 2.3" />
                    <TreeviewItem bottom leafClassName="k-treeview-load-more-button" text="Load more ..." />
                </TreeviewGroup>
            </TreeviewItem>,
            <TreeviewItem bottom text="Root 3">
                <TreeviewGroup>
                    <TreeviewItem top text="Child 3.1" />
                    <TreeviewItem text="Child 3.2" />
                    <TreeviewItem bottom text="Child 3.3" />
                </TreeviewGroup>
            </TreeviewItem>
        ]}
        {...props}
    >
    </Treeview>
);
