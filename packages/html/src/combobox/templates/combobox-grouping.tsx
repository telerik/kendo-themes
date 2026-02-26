import { List, ListItem, ListGroupItem, ListContent, ListUl } from "../../list";
import { nextId } from "../../misc";
import Combobox from "../combobox.spec";

export const ComboboxGrouping = (props) => {
    const group1Id = nextId('combobox-grp-group');
    const group2Id = nextId('combobox-grp-group');

    return (
        <Combobox
            id="combobox-grp"
            opened
            popup={
                <List header="Group 1">
                    <ListContent grouping listboxId="combobox-grp-listbox" aria-label="Options">
                        <ListUl role="group" aria-labelledby={group1Id}>
                            <ListItem id={nextId('combobox-grp-item')}>List group 1 item 1</ListItem>
                            <ListItem id={nextId('combobox-grp-item')}>List group 1 item 2</ListItem>
                            <ListItem id={nextId('combobox-grp-item')}>List group 1 item 3</ListItem>
                        </ListUl>
                        <ListUl role="group" aria-labelledby={group2Id}>
                            <ListGroupItem id={group2Id}>Group 2</ListGroupItem>
                            <ListItem id={nextId('combobox-grp-item')}>List group 1 item 1</ListItem>
                            <ListItem id={nextId('combobox-grp-item')}>List group 1 item 2</ListItem>
                            <ListItem id={nextId('combobox-grp-item')}>List group 1 item 3</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            }
            {...props}
        />
    );
};
