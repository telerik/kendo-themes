import { Treeview, TreeviewItem, TreeviewGroup } from "../../treeview";

export const TreeviewIcons = (props) => (
    <Treeview
        children={[
            <TreeviewItem key="treeview-item-1" top text="Root 1" />,
            <TreeviewItem key="treeview-item-2" text="Root 2" showIcon icon="folder" expanded>
                <TreeviewGroup>
                    <TreeviewItem top showIcon icon="folder" text="Child 2.1"/>
                    <TreeviewItem showIcon icon="folder" text="Child 2.2">
                        <TreeviewGroup>
                            <TreeviewItem bottom showIcon icon="folder" text="Child 2.2.1"/>
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem showIcon icon="folder" text="Child 2.3" />
                    <TreeviewItem bottom leafClassName="k-treeview-load-more-button" text="Load more..." />
                </TreeviewGroup>
            </TreeviewItem>,
            <TreeviewItem key="treeview-item-3" bottom text="Root 3" showIcon icon="folder">
                <TreeviewGroup>
                    <TreeviewItem top showIcon icon="folder" text="Child 3.1" />
                    <TreeviewItem showIcon icon="folder" text="Child 3.2" />
                    <TreeviewItem bottom showIcon icon="folder" text="Child 3.3" />
                </TreeviewGroup>
            </TreeviewItem>
        ]}
        {...props}
    >
    </Treeview>
);
