import { Treeview, TreeviewItem } from "../../treeview";

export const TreeviewNormal = ({ children, ...other }: any) => (
    <Treeview {...other}>
        {children || [
            <TreeviewItem key="treeview-item-1" text="Treeview item" />,
            <TreeviewItem key="treeview-item-2" text="Treeview item" />,
            <TreeviewItem key="treeview-item-3" text="Treeview item" />
        ]}
    </Treeview>
);
