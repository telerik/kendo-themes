import Autocomplete from "../autocomplete.spec";
import { List, ListItem } from "../../list";

export const AutocompletePopup = (props) => (
    <Autocomplete
        opened
        popup={
            <List>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
            </List>
        }
        {...props}
    />
);

export default AutocompletePopup;
