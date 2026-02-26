import { List, ListContent, ListItem } from "../../list";
import { nextId } from "../../misc";
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
                    <ListItem id={nextId('combobox-adaptive-item')}>Option 1</ListItem>
                    <ListItem id={nextId('combobox-adaptive-item')} focus>Option 2</ListItem>
                    <ListItem id={nextId('combobox-adaptive-item')}>Option 3</ListItem>
                </ListContent>
            </List>
        }
        {...props}
    />
);
