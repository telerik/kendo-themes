import Autocomplete from "../autocomplete.spec";
import { List, ListGroup, ListItem } from "../../list";

export const AutocompleteGroupingModern = (props) => (
    <Autocomplete
        opened
        popup={
            <List role="listbox" aria-label="Autocomplete options">
                <ListGroup label={"Group 1"} root>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 1</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 2</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 3</ListItem>
                </ListGroup>
                <ListGroup>
                    <ListItem group>Group 2</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 1</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 2</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 3</ListItem>
                </ListGroup>
            </List>
        }
        {...props}
    />
);
