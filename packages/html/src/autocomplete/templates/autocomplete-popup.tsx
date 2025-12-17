import Autocomplete from "../autocomplete.spec";
import { List, ListItem } from "../../list";

export const AutocompletePopup = (props) => (
    <Autocomplete
        opened
        popup={
            <List role="listbox" aria-label="Autocomplete options">
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
            </List>
        }
        {...props}
    />
);
