import { List, ListItem, ListGroupItem, ListContent, ListUl } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectGrouping = (props) => (
    <MultiSelect
        opened
        popup={
            <List header="Group 1">
                <ListContent grouping>
                    <ListUl>
                        <ListItem>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                        <ListItem>List group 1 item 3</ListItem>
                    </ListUl>
                    <ListUl>
                        <ListGroupItem>Group 2</ListGroupItem>
                        <ListItem>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                        <ListItem>List group 1 item 3</ListItem>
                    </ListUl>
                </ListContent>
            </List>
        }
        {...props}
    />
);
