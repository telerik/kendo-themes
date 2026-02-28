import { List, ListContent, ListItem } from "../../list";
import { nextId } from "../../misc";
import MultiSelect from "../multiselect.spec";

export const MultiSelectPopup = (props) => {
    const item0Id = nextId('ms-1-item');
    const item1Id = nextId('ms-1-item');
    const item2Id = nextId('ms-1-item');
    const item3Id = nextId('ms-1-item');

    return (
        <MultiSelect
            id="ms-1"
            aria-label="Select items"
            opened
            activeDescendant={item1Id}
            popup={(
                <List>
                    <ListContent listboxId="ms-1-listbox" aria-label="Options">
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
