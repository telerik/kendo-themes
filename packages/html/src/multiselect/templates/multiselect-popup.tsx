import { List, ListContent, ListItem } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectPopup = (props) => (
    <MultiSelect
        opened
        popup={(
            <List>
                <ListContent>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                </ListContent>
            </List>
        )}
        {...props}
    />
);
