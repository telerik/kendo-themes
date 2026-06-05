import { List, ListContent, ListItem, ListSelectAll } from "../../list";
import { nextId } from "../../misc";
import MultiSelect from "../multiselect.spec";

export const MultiSelectSelectAll = (props) => {
    const msId = nextId('ms');
    const listboxId = nextId('ms-listbox');
    const item0Id = nextId('ms-sa-item');
    const item1Id = nextId('ms-sa-item');
    const item2Id = nextId('ms-sa-item');
    const item3Id = nextId('ms-sa-item');
    const item4Id = nextId('ms-sa-item');

    return (
        <MultiSelect
            id={msId}
            aria-label="Select items"
            opened
            popup={
                <List
                    selectAll={<ListSelectAll {...props.selectAllProps} />}
                >
                    <ListContent listboxId={listboxId} aria-label="Options">
                        <ListItem id={item0Id} {...props.listItemProps}>Option 1</ListItem>
                        <ListItem id={item1Id} {...props.listItemProps}>Option 2</ListItem>
                        <ListItem id={item2Id} {...props.listItemProps}>Option 3</ListItem>
                        <ListItem id={item3Id} {...props.listItemProps}>Option 4</ListItem>
                        <ListItem id={item4Id} {...props.listItemProps}>Option 5</ListItem>
                    </ListContent>
                </List>
            }
            {...props}
        />
    );
};
