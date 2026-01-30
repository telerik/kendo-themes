import { Treeview, TreeviewItem, TreeviewGroup } from "../../treeview";

export const TreeviewIcons = ({ children, ...other }: any) => (
    <Treeview {...other}>
        {children || [
            <TreeviewItem key="treeview-item-1" text="Root 1" />,
            <TreeviewItem key="treeview-item-2" text="Root 2" showIcon icon="folder" expanded>
                <TreeviewGroup>
                    <TreeviewItem showIcon icon="folder" text="Child 2.1"/>
                    <TreeviewItem showIcon icon="folder" text="Child 2.2">
                        <TreeviewGroup>
                            <TreeviewItem showIcon icon="folder" text="Child 2.2.1"/>
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem showIcon icon="folder" text="Child 2.3" />
                </TreeviewGroup>
            </TreeviewItem>,
            <TreeviewItem key="treeview-item-3" text="Root 3" showIcon icon="folder">
                <TreeviewGroup>
                    <TreeviewItem showIcon icon="folder" text="Child 3.1" />
                    <TreeviewItem showIcon icon="folder" text="Child 3.2" />
                    <TreeviewItem showIcon icon="folder" text="Child 3.3" />
                </TreeviewGroup>
            </TreeviewItem>
        ]}
    </Treeview>
);
