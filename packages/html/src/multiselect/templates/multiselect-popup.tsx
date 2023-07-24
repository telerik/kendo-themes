import { List, ListItem } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectPopup = (props) => (
    <MultiSelect opened
        popup={(
            <List>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
            </List>
        )}
        {...props}
    />
);