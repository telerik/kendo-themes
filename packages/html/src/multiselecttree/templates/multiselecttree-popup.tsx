
import { Checkbox } from "../../checkbox";
import { TreeviewGroup, TreeviewItem, Treeview } from "../../treeview";
import MultiSelectTree from "../multiselecttree.spec";

export const MultiSelectTreePopup = (props) => {
    const { id = 'multiselecttree', ...other } = props;

    return (
        <MultiSelectTree id={id} opened
        popup={(
            <>
                <div className="k-check-all">
                    <Checkbox />
                    <span className="k-checkbox-label">
                        Check all
                    </span>
                </div>
                <Treeview id={`${id}-treeview`} dir={props.dir}>
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
        {...other}
    />
    );
};
