import { List, ListGroup, ListItem } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectGrouping = (props) => (
    <MultiSelect
        opened={true}
        popup={
            <List>
                <ListGroup label={"Group 1"} root={true}>
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
