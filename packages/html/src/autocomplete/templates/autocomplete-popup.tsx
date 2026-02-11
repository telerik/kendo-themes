import Autocomplete from "../autocomplete.spec";
import { List } from "../../list/list.spec";
import { ListContent } from "../../list/list-content";
import { ListItem } from "../../list/list-item.spec";

export const AutocompletePopup = (props) => (
    <Autocomplete
        opened
        popup={
            <List>
                <ListContent>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                </ListContent>
            </List>
        }
        {...props}
    />
);
