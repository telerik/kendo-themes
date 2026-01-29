import Autocomplete from "../autocomplete.spec";
import { List, ListItem } from "../../list";

export const AutocompletePopup = (props) => {
    const { id = 'k-autocomplete', ...other } = props;

    return (
        <Autocomplete
            id={id}
            opened
            activeDescendantId={`${id}-listbox-item-0`}
            popup={
                <List role="listbox" aria-label="Autocomplete options" listboxId={`${id}-listbox`}>
                    <ListItem id={`${id}-listbox-item-0`} role="option" aria-selected="true" tabIndex={0} focus selected>List item</ListItem>
                    <ListItem id={`${id}-listbox-item-1`} role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                    <ListItem id={`${id}-listbox-item-2`} role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                </List>
            }
            {...other}
        />
    );
};
