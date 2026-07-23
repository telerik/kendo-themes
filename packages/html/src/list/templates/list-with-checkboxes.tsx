import { List, ListItem, ListContent } from "..";
import { nextId } from "../../misc";

export const ListWithCheckboxes = ({ children, ...other }: any) => (
    <List {...other}>
        <ListContent listboxId="list-checkboxes-listbox" aria-label="Options">
            {children || (
                <>
                    <ListItem id={nextId('list-checkbox-item')} showCheckbox>List item</ListItem>
                    <ListItem id={nextId('list-checkbox-item')} showCheckbox checked>List item</ListItem>
                    <ListItem id={nextId('list-checkbox-item')} showCheckbox>List item</ListItem>
                </>
            )}
        </ListContent>
    </List>
);
