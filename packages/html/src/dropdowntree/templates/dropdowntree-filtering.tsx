import DropdownTree from "../dropdowntree.spec";
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';
import { Icon } from "../../icon";
import { Textbox } from "../../textbox";

export const DropdownTreeFiltering = (props) => {
    const { id = 'dropdowntree', ...other } = props;
    const treeviewId = `${id}-treeview`;

    return (
        <DropdownTree
            id={id}
            opened={true}
            filterable
            popup={(
                <>
                    <div className="k-list-filter">
                        <Textbox
                            prefix={
                                <>
                                    <Icon icon="search" />
                                </>
                            }
                            inputProps={{
                                role: 'searchbox',
                                'aria-label': 'Filter options',
                                'aria-autocomplete': 'list',
                                'aria-controls': treeviewId
                            }}
                        />
                    </div>
                    <Treeview id={treeviewId} dir={props.dir}>
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
            {...other}
        />
    );
};
