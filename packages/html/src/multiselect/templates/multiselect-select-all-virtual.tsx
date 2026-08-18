import { List, ListContent, ListItem, ListSelectAll } from "../../list";
import { nextId } from "../../misc";
import MultiSelect from "../multiselect.spec";

export const MultiSelectSelectAllVirtual = (props) => {
    const msId = nextId('ms');
    const listboxId = nextId('ms-listbox');

    return (
        <MultiSelect
            id={msId}
            aria-label="Select items"
            opened
            popup={
                <List
                    virtualization
                    selectAll={<ListSelectAll {...props.selectAllProps} />}
                >
                    <ListContent virtualization listboxId={listboxId} aria-label="Options">
                        <ListItem id={nextId('ms-sav-item')} {...props.listItemProps}>Option 1</ListItem>
                        <ListItem id={nextId('ms-sav-item')} {...props.listItemProps}>Option 2</ListItem>
                        <ListItem id={nextId('ms-sav-item')} {...props.listItemProps}>Option 3</ListItem>
                        <ListItem id={nextId('ms-sav-item')} {...props.listItemProps}>Option 4</ListItem>
                        <ListItem id={nextId('ms-sav-item')} {...props.listItemProps}>Option 5</ListItem>
                    </ListContent>
                </List>
            }
            {...props}
        />
    );
};
