import { Treeview, TreeviewItem } from "../../treeview";

export const TreeviewNormal = (props) => (
    <Treeview
        children={[
            <TreeviewItem text="Treeview item" />,
            <TreeviewItem text="Treeview item" />,
            <TreeviewItem text="Treeview item" />
        ]}
        {...props}
    >
    </Treeview>
);
