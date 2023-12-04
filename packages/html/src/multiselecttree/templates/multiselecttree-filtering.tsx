
import { Checkbox } from "../../checkbox";
import { Icon } from "../../icon";
import { Textbox } from "../../textbox";
import { TreeviewGroup, TreeviewItem, Treeview } from "../../treeview";
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
                    <TreeviewItem text="Furniture" showCheckbox checked>
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
