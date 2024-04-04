import { List, ListGroup, ListItem } from "../../list";
import DropdownList from "../dropdownlist.spec";

export const DropdownListGrouping = ({ firstItemState, ...others }: any) => (
    <DropdownList
        opened
        popup={
            <List>
                <ListGroup label={"Group 1"} root>
                    <ListItem {...{ [firstItemState]: true }}>List group 1 item 1</ListItem>
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
        {...others}
    />
);
