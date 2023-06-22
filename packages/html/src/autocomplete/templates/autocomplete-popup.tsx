import Autocomplete from "../autocomplete.spec";
import { List, ListItem } from "../../list";

export const AutocompletePopup = (props) => (
    <Autocomplete focus
        opened={true}
        popup={
            <List>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
            </List>
        }
        {...props}
    />
);