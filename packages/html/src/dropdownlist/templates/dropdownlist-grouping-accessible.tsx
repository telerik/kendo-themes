import { ListAccessible, ListGroup, ListItem } from "../../list";
import DropdownList from "../dropdownlist.spec";

export const DropdownListGroupingAccessible = (props) => (
    <DropdownList
        opened
        popup={
            <ListAccessible>
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
            </ListAccessible>
        }
        {...props}
    />
);
