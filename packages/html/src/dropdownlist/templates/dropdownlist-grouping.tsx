import { List, ListContent, ListUl, ListItem, ListGroupItem } from "../../list";
import { nextId } from "../../misc";
import DropdownList from "../dropdownlist.spec";

export const DropdownListGrouping = (props) => {
    const ddlId = nextId('ddl');
    const listboxId = nextId('ddl-listbox');
    const group1Id = nextId('ddl-grp-group');
    const group2Id = nextId('ddl-grp-group');

    return (
        <DropdownList
            id={ddlId}
            aria-label="Select group option"
            opened
            popup={
                <List header="Group 1">
                    <ListContent grouping listboxId={listboxId} aria-label="Options">
                        <ListUl role="group" aria-labelledby={group1Id}>
                            <ListGroupItem id={group1Id}>Group 1</ListGroupItem>
                            <ListItem id={nextId('ddl-grp-item')}>List group 1 item 1</ListItem>
                            <ListItem id={nextId('ddl-grp-item')}>List group 1 item 2</ListItem>
                            <ListItem id={nextId('ddl-grp-item')}>List group 1 item 3</ListItem>
                        </ListUl>
                        <ListUl role="group" aria-labelledby={group2Id}>
                            <ListGroupItem id={group2Id}>Group 2</ListGroupItem>
                            <ListItem id={nextId('ddl-grp-item')}>List group 1 item 1</ListItem>
                            <ListItem id={nextId('ddl-grp-item')}>List group 1 item 2</ListItem>
                            <ListItem id={nextId('ddl-grp-item')}>List group 1 item 3</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            }
            {...props}
        />
    );
};
