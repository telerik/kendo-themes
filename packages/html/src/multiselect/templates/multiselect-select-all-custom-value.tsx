import { List, ListContent, ListItem, ListCustomValue, ListSelectAll } from "../../list";
import { nextId } from "../../misc";
import MultiSelect from "../multiselect.spec";

export const MultiSelectSelectAllCustomValue = ({ value = "Custom Option", ...props }: any) => {
    const msId = nextId('ms');
    const listboxId = nextId('ms-sacv-listbox');

    return (
        <MultiSelect
            id={msId}
            value={value}
            aria-label="Select items"
            opened
            popup={
                <List
                    selectAll={<ListSelectAll {...props.selectAllProps} />}
                    customValue={<ListCustomValue text={value} focus />}
                >
                    <ListContent listboxId={listboxId} aria-label="Options">
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
