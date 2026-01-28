import Autocomplete from "../autocomplete.spec";
import { List, ListContent, ListItem } from "../../list";

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
