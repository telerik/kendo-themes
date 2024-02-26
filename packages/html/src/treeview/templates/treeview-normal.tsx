import { Treeview, TreeviewItem } from "../../treeview";

export const TreeviewNormal = (props) => (
    <Treeview
        children={[
            <TreeviewItem top text="Treeview item" />,
            <TreeviewItem text="Treeview item" />,
            <TreeviewItem bottom text="Treeview item" />
        ]}
        {...props}
    >
    </Treeview>
);
