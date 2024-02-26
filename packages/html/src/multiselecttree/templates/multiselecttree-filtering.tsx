
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
                    <TreeviewItem top text="Furniture" showCheckbox checked>
                        <TreeviewGroup>
                            <TreeviewItem top text="Child 1" showCheckbox />
                            <TreeviewItem text="Child 2" showCheckbox />
                            <TreeviewItem bottom text="Child 3" showCheckbox />
                        </TreeviewGroup>
                    </TreeviewItem>
                    <TreeviewItem bottom text="Decor" showCheckbox>
                        <TreeviewGroup>
                            <TreeviewItem top text="Child 1" showCheckbox />
                            <TreeviewItem text="Child 2" showCheckbox />
                            <TreeviewItem bottom text="Child 3" showCheckbox />
                        </TreeviewGroup>
                    </TreeviewItem>
                </Treeview>
            </>
        )}
        {...props}
    />
);
