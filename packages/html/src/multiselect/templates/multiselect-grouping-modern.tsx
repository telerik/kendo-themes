import { List, ListGroup, ListItem } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectGroupingModern = ({ firstItemState, ...others }: any) => (
    <MultiSelect
        opened
        popup={
            <List>
                <ListGroup label={"Group 1"} root>
                    <ListItem {...{ [firstItemState]: true }}>List group 1 item 1</ListItem>
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
        {...others}
    />
);
