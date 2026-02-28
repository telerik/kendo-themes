import Autocomplete from "../autocomplete.spec";
import { List, ListContent, ListItem } from "../../list";
import { nextId } from "../../misc";

export const AutocompletePopup = (props) => {
    const item0Id = nextId('ac-1-item');
    const item1Id = nextId('ac-1-item');
    const item2Id = nextId('ac-1-item');

    return (
        <Autocomplete
            id="ac-1"
            aria-label="Search"
            opened
            activeDescendant={item1Id}
            popup={
                <List>
                    <ListContent listboxId="ac-1-listbox" aria-label="Suggestions">
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
