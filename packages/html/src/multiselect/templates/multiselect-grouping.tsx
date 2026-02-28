import { List, ListItem, ListGroupItem, ListContent, ListUl } from "../../list";
import { nextId } from "../../misc";
import MultiSelect from "../multiselect.spec";

export const MultiSelectGrouping = (props) => {
    const group1Id = nextId('ms-grp-group');
    const group2Id = nextId('ms-grp-group');

    return (
        <MultiSelect
            id="ms-grouping"
            aria-label="Select options"
            opened
            popup={
                <List header="Group 1">
                    <ListContent grouping listboxId="ms-grp-listbox" aria-label="Options">
                        <ListUl role="group" aria-labelledby={group1Id}>
                            <ListGroupItem id={group1Id}>Group 1</ListGroupItem>
                            <ListItem id={nextId('ms-grp-item')}>List group 1 item 1</ListItem>
                            <ListItem id={nextId('ms-grp-item')}>List group 1 item 2</ListItem>
                            <ListItem id={nextId('ms-grp-item')}>List group 1 item 3</ListItem>
                        </ListUl>
                        <ListUl role="group" aria-labelledby={group2Id}>
                            <ListGroupItem id={group2Id}>Group 2</ListGroupItem>
                            <ListItem id={nextId('ms-grp-item')}>List group 1 item 1</ListItem>
                            <ListItem id={nextId('ms-grp-item')}>List group 1 item 2</ListItem>
                            <ListItem id={nextId('ms-grp-item')}>List group 1 item 3</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            }
            {...props}
        />
    );
};
