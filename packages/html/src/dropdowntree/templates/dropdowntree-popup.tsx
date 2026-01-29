import DropdownTree from "../dropdowntree.spec";
import { Treeview, TreeviewGroup, TreeviewItem } from '../../treeview';

export const DropdownTreePopup = (props) => {
    const { id = 'dropdowntree', ...other } = props;

    return (
        <DropdownTree
            id={id}
            opened={true}
            popup={
                <Treeview id={`${id}-treeview`} dir={props.dir}>
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
            }
            {...other}
        />
    );
};
