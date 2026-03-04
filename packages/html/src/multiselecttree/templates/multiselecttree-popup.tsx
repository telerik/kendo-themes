
import { Checkbox } from "../../checkbox";
import { nextId } from "../../misc";
import { TreeviewGroup, TreeviewItem, Treeview } from "../../treeview";
import MultiSelectTree from "../multiselecttree.spec";

export const MultiSelectTreePopup = (props) => {
    const mstId = nextId('mst');
    const treeviewId = nextId('mst-tv');

    return (
        <MultiSelectTree
            id={mstId}
            aria-label="Select items"
            treeviewId={treeviewId}
        opened
        popup={(
            <>
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
};
