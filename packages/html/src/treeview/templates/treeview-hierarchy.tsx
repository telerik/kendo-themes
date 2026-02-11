import { Treeview } from "../../treeview/treeview.spec";
import { TreeviewItem  } from "../../treeview/treeview-item.spec";
import { TreeviewGroup } from "../../treeview/treeview-group";

export const TreeviewHierarchy = ({ children, ...other }: any) => (
    <Treeview {...other}>
        {children || [
            <TreeviewItem key="treeview-item-1" text="Root 1" />,
            <TreeviewItem key="treeview-item-2" text="Root 2" expanded>
                <TreeviewGroup>
                    <TreeviewItem text="Child 2.1" />
                    <TreeviewItem text="Child 2.2">
                        <TreeviewGroup>
                            <TreeviewItem text="Child 2.2.1" />
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem text="Child 2.3" />
                </TreeviewGroup>
            </TreeviewItem>,
            <TreeviewItem key="treeview-item-3" text="Root 3">
                <TreeviewGroup>
                    <TreeviewItem text="Child 3.1" />
                    <TreeviewItem text="Child 3.2" />
                    <TreeviewItem text="Child 3.3" />
                </TreeviewGroup>
            </TreeviewItem>
        ]}
    </Treeview>
);
