import DropdownTree from "../dropdowntree.spec";
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';
import { Icon } from "../../icon";
import { Textbox } from "../../textbox";

export const DropdownTreeFiltering = (props) => (
    <DropdownTree
        opened={true}
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
        )}
        {...props}
    />
);
