import Autocomplete from "../autocomplete.spec";
import { List, ListGroup, ListItem } from "../../list";

export const AutocompleteGrouping = (props) => (
    <Autocomplete
        opened
        popup={
            <List>
                <ListGroup label={"Group 1"} root>
                    <ListItem>List group 1 item 1</ListItem>
                    <ListItem>List group 1 item 2</ListItem>
                    <ListItem>List group 1 item 3</ListItem>
                </ListGroup>
                <ListGroup label={"Group 2"} >
                    <ListItem>List group 1 item 1</ListItem>
                    <ListItem>List group 1 item 2</ListItem>
                    <ListItem>List group 1 item 3</ListItem>
                </ListGroup>
            </List>
        }
        {...props}
    />
);

export default AutocompleteGrouping;
