import { List, ListContent, ListItem } from "../../list";
import { nextId } from "../../misc";
import DropdownList from "../dropdownlist.spec";

export const DropdownListPopup = (props) => {
    const item0Id = nextId('ddl-1-item');
    const item1Id = nextId('ddl-1-item');
    const item2Id = nextId('ddl-1-item');

    return (
        <DropdownList
            id="ddl-1"
            aria-label="Select option"
            opened
            activeDescendant={item1Id}
            popup={
                <List>
                    <ListContent listboxId="ddl-1-listbox" aria-label="Options">
                        <ListItem id={item0Id} selected>Selected item</ListItem>
                        <ListItem id={item1Id} focus>Focused item</ListItem>
                        <ListItem id={item2Id}>List item</ListItem>
                    </ListContent>
                </List>
            }
            {...props}
        />
    );
};
