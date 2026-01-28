import { Treeview, TreeviewItem } from "../../treeview";

export const TreeviewNormal = (props) => (
    <Treeview
        children={[
            <TreeviewItem key="treeview-item-1" text="Treeview item" />,
            <TreeviewItem key="treeview-item-2" text="Treeview item" />,
            <TreeviewItem key="treeview-item-3" text="Treeview item" />
        ]}
        {...props}
    >
    </Treeview>
);
