import { ListAccessible, ListGroup, ListItem } from "..";

export const VirtualListWithGroupingAccessible = (props) => (
    <ListAccessible
        virtualization
        {...props}>
        <ListGroup label="Group 1" root>
            <ListItem>List item 1.1</ListItem>
            <ListItem>List item 1.2</ListItem>
            <ListItem>List item 1.3</ListItem>
        </ListGroup>
        <ListGroup>
            <ListItem group>Group 2</ListItem>
            <ListItem>List item 1.2</ListItem>
            <ListItem>List item 2.2</ListItem>
            <ListItem>List item 2.3</ListItem>
        </ListGroup>
    </ListAccessible>
);
