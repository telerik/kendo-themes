import { List, ListContent, ListItem } from "../../list";
import { nextId } from "../../misc";
import MultiSelect from "../multiselect.spec";

export const MultiSelectPopup = (props) => {
    const msId = nextId('ms');
    const listboxId = nextId('ms-listbox');
    const item0Id = nextId('ms-1-item');
    const item1Id = nextId('ms-1-item');
    const item2Id = nextId('ms-1-item');
    const item3Id = nextId('ms-1-item');

    return (
        <MultiSelect
            id={msId}
            aria-label="Select items"
            opened
            activeDescendant={item1Id}
            popup={(
                <List>
                    <ListContent listboxId={listboxId} aria-label="Options">
                        <ListItem id={item0Id} selected>Selected item</ListItem>
                        <ListItem id={item1Id} focus>Focused item</ListItem>
                        <ListItem id={item2Id}>List item</ListItem>
                        <ListItem id={item3Id}>List item</ListItem>
                    </ListContent>
                </List>
            )}
            {...props}
        />
    );
};
