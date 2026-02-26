import { List, ListContent, ListItem } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxAdaptive = (props) => (
    <Combobox
        id="combobox-adaptive"
        adaptive={true}
        adaptiveTitle="Select an option"
        aria-label="Company selection"
        popup={
            <List>
                <ListContent listboxId="combobox-adaptive-listbox" aria-label="Company options">
                    <ListItem id="combobox-adaptive-item-0">Option 1</ListItem>
                    <ListItem id="combobox-adaptive-item-1" focus>Option 2</ListItem>
                    <ListItem id="combobox-adaptive-item-2">Option 3</ListItem>
                </ListContent>
            </List>
        }
        {...props}
    />
);
