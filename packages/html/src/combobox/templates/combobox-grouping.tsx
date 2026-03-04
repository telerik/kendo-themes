import { List, ListItem, ListGroupItem, ListContent, ListUl } from "../../list";
import { nextId } from "../../misc";
import Combobox from "../combobox.spec";

export const ComboboxGrouping = (props) => {
    const cbId = nextId('combobox');
    const group1Id = nextId('combobox-group');
    const group2Id = nextId('combobox-group');

    return (
        <Combobox
            id={cbId}
            opened
            popup={
                <List header="Group 1">
                    <ListContent grouping listboxId={`${cbId}-listbox`} aria-label="Options">
                        <ListUl role="group" aria-labelledby={group1Id}>
                            <ListGroupItem id={group1Id}>Group 1</ListGroupItem>
                            <ListItem id={nextId('combobox-item')}>List group 1 item 1</ListItem>
                            <ListItem id={nextId('combobox-item')}>List group 1 item 2</ListItem>
                            <ListItem id={nextId('combobox-item')}>List group 1 item 3</ListItem>
                        </ListUl>
                        <ListUl role="group" aria-labelledby={group2Id}>
                            <ListGroupItem id={group2Id}>Group 2</ListGroupItem>
                            <ListItem id={nextId('combobox-item')}>List group 1 item 1</ListItem>
                            <ListItem id={nextId('combobox-item')}>List group 1 item 2</ListItem>
                            <ListItem id={nextId('combobox-item')}>List group 1 item 3</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            }
            {...props}
        />
    );
};
