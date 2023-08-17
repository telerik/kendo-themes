import { List, ListGroup, ListItem } from "../../list";

export const ListWithGrouping = (props) => (
    <List {...props}>
        <ListGroup label="Group 1" root>
            <ListItem>List item 1.1</ListItem>
            <ListItem>List item 1.2</ListItem>
            <ListItem>List item 1.3</ListItem>
        </ListGroup>
        <ListGroup label="Group 2">
            <ListItem>List item 2.1</ListItem>
            <ListItem>List item 2.2</ListItem>
            <ListItem>List item 2.3</ListItem>
        </ListGroup>
    </List>
);