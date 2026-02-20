import { List, ListContent, ListItem } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxPopup = (props) => (
    <Combobox
        id="combobox-1"
        opened
        activeDescendant="combobox-1-item-1"
        popup={
            <List>
                <ListContent listboxId="combobox-1-listbox" aria-label="Options">
                    <ListItem id="combobox-1-item-0" selected>Selected item</ListItem>
                    <ListItem id="combobox-1-item-1" focus>Focused item</ListItem>
                    <ListItem id="combobox-1-item-2">List item</ListItem>
                </ListContent>
            </List>
        }
        {...props}
    />
);
