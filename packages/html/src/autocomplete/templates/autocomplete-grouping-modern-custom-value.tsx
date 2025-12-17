import Autocomplete from "../autocomplete.spec";
import { List, ListGroup, ListItem, ListCustomValue } from "../../list";

export const AutocompleteGroupingModernCustomValue = ({ value="Custom value", ...other }: any) => (
    <Autocomplete value={value}
        opened
        popup={
            <List customValue={<ListCustomValue text={`Use "${value}"`}/>} role="listbox" aria-label="Autocomplete options">
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
        {...other}
    />
);
