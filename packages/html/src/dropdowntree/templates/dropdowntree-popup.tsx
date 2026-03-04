import DropdownTree from "../dropdowntree.spec";
import { nextId } from "../../misc";
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';

export const DropdownTreePopup = (props) => {
    const ddtId = nextId('ddt');
    const treeviewId = nextId('ddt-tv');

    return (
        <DropdownTree
            id={ddtId}
            aria-label="Select item"
            opened={true}
            treeviewId={treeviewId}
        popup={
            <>
                <Treeview dir={props.dir}>
                    <TreeviewItem text="Root 1" />
                    <TreeviewItem text="Root 2" expanded>
                        <TreeviewGroup>
                            <TreeviewItem text="Child 2.1" expanded>
                                <TreeviewGroup>
                                    <TreeviewItem text="Child 2.1.1" />
                                </TreeviewGroup>
                            </TreeviewItem>
                            <TreeviewItem text="Child 2.2" />
                            <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more ..." />
                        </TreeviewGroup>
                    </TreeviewItem>
                </Treeview>
            </>
        }
        {...props}
    />
    );
};
