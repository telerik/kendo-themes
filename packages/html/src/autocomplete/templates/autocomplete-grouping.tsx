import Autocomplete from "../autocomplete.spec";
import { List, ListGroup, ListItem } from "../../list";

export const AutocompleteGrouping = (props) => {
    const { id = 'k-autocomplete', ...other } = props;

    return (
        <Autocomplete
            id={id}
            opened
            activeDescendantId={`${id}-listbox-item-0`}
            popup={
                <List role="listbox" aria-label="Autocomplete options" listboxId={`${id}-listbox`}>
                    <ListGroup label={"Group 1"} root>
                        <ListItem id={`${id}-listbox-item-0`} role="option" aria-selected="true" tabIndex={0} focus selected>List group 1 item 1</ListItem>
                        <ListItem id={`${id}-listbox-item-1`} role="option" aria-selected="false" tabIndex={-1}>List group 1 item 2</ListItem>
                        <ListItem id={`${id}-listbox-item-2`} role="option" aria-selected="false" tabIndex={-1}>List group 1 item 3</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2">
                        <ListItem id={`${id}-listbox-item-3`} role="option" aria-selected="false" tabIndex={-1}>List group 2 item 1</ListItem>
                        <ListItem id={`${id}-listbox-item-4`} role="option" aria-selected="false" tabIndex={-1}>List group 2 item 2</ListItem>
                        <ListItem id={`${id}-listbox-item-5`} role="option" aria-selected="false" tabIndex={-1}>List group 2 item 3</ListItem>
                    </ListGroup>
                </List>
            }
            {...other}
        />
    );
};
