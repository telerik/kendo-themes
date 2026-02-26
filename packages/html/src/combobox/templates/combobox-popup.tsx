import { List, ListContent, ListItem } from "../../list";
import { nextId } from "../../misc";
import Combobox from "../combobox.spec";

export const ComboboxPopup = (props) => {
    const item0Id = nextId('combobox-1-item');
    const item1Id = nextId('combobox-1-item');
    const item2Id = nextId('combobox-1-item');

    return (
        <Combobox
            id="combobox-1"
            opened
            activeDescendant={item1Id}
            popup={
                <List>
                    <ListContent listboxId="combobox-1-listbox" aria-label="Options">
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
