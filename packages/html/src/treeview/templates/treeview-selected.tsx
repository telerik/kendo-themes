import { Treeview, TreeviewItem, TreeviewGroup } from "../../treeview";

export const TreeviewSelected = ({ children, ...other }: any) => (
    <Treeview {...other}>
        {children || [
            <TreeviewItem key="treeview-item-1" text="Root 1" ariaSelected />,
            <TreeviewItem key="treeview-item-2" text="Root 2" expanded>
                <TreeviewGroup>
                    <TreeviewItem text="Child 2.1" />
                    <TreeviewItem text="Child 2.2" ariaSelected />
                </TreeviewGroup>
            </TreeviewItem>,
            <TreeviewItem key="treeview-item-3" text="Root 3" />
        ]}
    </Treeview>
);
