import { List, ListContent, ListItem } from "../../list";
import { nextId } from "../../misc";
import Combobox from "../combobox.spec";

export const ComboboxWithIcons = (props) => {
    const focusedItemId = nextId('combobox-icons-item');

    return (
        <Combobox
            id="combobox-icons"
            opened
            activeDescendant={focusedItemId}
            popup={
                <List>
                    <ListContent listboxId="combobox-icons-listbox" aria-label="Options">
                        <ListItem id={focusedItemId} iconName="folder" focus>Folder item</ListItem>
                        <ListItem id={nextId('combobox-icons-item')} iconName="file">File item</ListItem>
                        <ListItem id={nextId('combobox-icons-item')} iconName="image" selected>Image item</ListItem>
                    </ListContent>
                </List>
            }
            {...props}
        />
    );
};
