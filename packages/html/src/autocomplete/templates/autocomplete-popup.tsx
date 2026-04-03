import Autocomplete from "../autocomplete.spec";
import { List, ListContent, ListItem } from "../../list";
import { nextId } from "../../misc";

export const AutocompletePopup = (props) => {
    const acId = nextId('ac');
    const item0Id = nextId('ac-item');
    const item1Id = nextId('ac-item');
    const item2Id = nextId('ac-item');

    return (
        <Autocomplete
            id={acId}
            aria-label="Search"
            opened
            activeDescendant={item1Id}
            popup={
                <List>
                    <ListContent listboxId={`${acId}-listbox`} aria-label="Suggestions">
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
