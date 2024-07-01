import { List, ListGroup, ListItem } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxGroupingModern = (props) => (
    <Combobox
        opened
        popup={
            <List>
                <ListGroup label={"Group 1"} root>
                    <ListItem>List group 1 item 1</ListItem>
                    <ListItem>List group 1 item 2</ListItem>
                    <ListItem>List group 1 item 3</ListItem>
                </ListGroup>
                <ListGroup>
                    <ListItem group>Group 2</ListItem>
                    <ListItem>List group 1 item 1</ListItem>
                    <ListItem>List group 1 item 2</ListItem>
                    <ListItem>List group 1 item 3</ListItem>
                </ListGroup>
            </List>
        }
        {...props}
    />
);

export default ComboboxGroupingModern;
