
import { Checkbox } from "../../checkbox/checkbox.spec";
import { Icon } from "../../icon/icon.spec";
import { Textbox } from "../../textbox/textbox.spec";
import { TreeviewGroup } from "../../treeview/treeview-group";
import { TreeviewItem } from "../../treeview/treeview-item.spec";
import { Treeview } from "../../treeview/treeview.spec";
import MultiSelectTree from "../multiselecttree.spec";

export const MultiSelectTreeFiltering = (props) => (
    <MultiSelectTree opened
        popup={(
            <>
                <div className="k-list-filter">
                    <Textbox
                        prefix={
                            <>
                                <Icon icon="search" />
                            </>
                        }
                    />
                </div>
                <div className="k-check-all">
                    <Checkbox />
                    <span className="k-checkbox-label">
                        Check all
                    </span>
                </div>
                <Treeview dir={props.dir}>
                    <TreeviewItem text="Furniture" showCheckbox >
                        <TreeviewGroup>
                            <TreeviewItem text="Child 1" showCheckbox />
                            <TreeviewItem text="Child 2" showCheckbox />
                            <TreeviewItem text="Child 3" showCheckbox />
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem text="Decor" showCheckbox>
                        <TreeviewGroup>
                            <TreeviewItem text="Child 1" showCheckbox />
                            <TreeviewItem text="Child 2" showCheckbox />
                            <TreeviewItem text="Child 3" showCheckbox />
                        </TreeviewGroup>
                    </TreeviewItem>
                </Treeview>
            </>
        )}
        {...props}
    />
);
