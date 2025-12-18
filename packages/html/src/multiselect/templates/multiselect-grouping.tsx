import { List, ListGroup, ListItem } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectGrouping = (props) => (
    <MultiSelect
        opened
        popup={
            <List role="listbox" aria-label="MultiSelect options" aria-multiselectable="true">
                <ListGroup label={"Group 1"} root>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 1</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 2</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 3</ListItem>
                </ListGroup>
                <ListGroup label={"Group 2"} >
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 1</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 2</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 3</ListItem>
                </ListGroup>
            </List>
        }
        {...props}
    />
);
