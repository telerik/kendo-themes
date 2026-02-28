
import { Checkbox } from "../../checkbox";
import { Icon } from "../../icon";
import { Textbox } from "../../textbox";
import { TreeviewGroup, TreeviewItem, Treeview } from "../../treeview";
import MultiSelectTree from "../multiselecttree.spec";

export const MultiSelectTreeFiltering = (props) => (
    <MultiSelectTree opened
        id="mst-filter"
        aria-label="Select options"
        treeviewId="mst-filter-treeview"
        popup={(
            <>
                <div className="k-list-filter">
                    <Textbox
                        aria-label="Search"
                        prefix={
                            <>
                                <Icon icon="search" />
                            </>
                        }
                    />
                </div>
                <div className="k-check-all">
                    <Checkbox aria-label="Check all" />
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
