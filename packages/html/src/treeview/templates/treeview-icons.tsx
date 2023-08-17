import { Treeview, TreeviewItem, TreeviewGroup } from "../../treeview";

export const TreeviewIcons = (props) => (
    <Treeview
        children={[
            <TreeviewItem text="Root 1" />,
            <TreeviewItem text="Root 2" showIcon icon="folder" expanded>
                <TreeviewGroup>
                    <TreeviewItem showIcon icon="folder" text="Child 2.1"/>
                    <TreeviewItem showIcon icon="folder" text="Child 2.2">
                        <TreeviewGroup>
                            <TreeviewItem showIcon icon="folder" text="Child 2.2.1"/>
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem showIcon icon="folder" text="Child 2.3" />
                    <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..." />
                </TreeviewGroup>
            </TreeviewItem>,
            <TreeviewItem text="Root 3" showIcon icon="folder">
                <TreeviewGroup>
                    <TreeviewItem showIcon icon="folder" text="Child 3.1" />
                    <TreeviewItem showIcon icon="folder" text="Child 3.2" />
                    <TreeviewItem showIcon icon="folder" text="Child 3.3" />
                </TreeviewGroup>
            </TreeviewItem>
        ]}
        {...props}
    >
    </Treeview>
);
