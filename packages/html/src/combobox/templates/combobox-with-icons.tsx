import { List, ListContent, ListItem } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxWithIcons = (props) => (
    <Combobox
        id="combobox-icons"
        opened
        activeDescendant="combobox-icons-item-0"
        popup={
            <List>
                <ListContent listboxId="combobox-icons-listbox" aria-label="Options">
                    <ListItem id="combobox-icons-item-0" iconName="folder" focus>Folder item</ListItem>
                    <ListItem id="combobox-icons-item-1" iconName="file">File item</ListItem>
                    <ListItem id="combobox-icons-item-2" iconName="image" selected>Image item</ListItem>
                </ListContent>
            </List>
        }
        {...props}
    />
);
