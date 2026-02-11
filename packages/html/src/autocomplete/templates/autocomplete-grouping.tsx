import Autocomplete from "../autocomplete.spec";
import { List } from "../../list/list.spec";
import { ListContent } from "../../list/list-content";
import { ListUl } from "../../list/list-ul";
import { ListItem } from "../../list/list-item.spec";
import { ListGroupItem } from "../../list/list-group-item";

export const AutocompleteGrouping = (props) => (
    <Autocomplete
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
