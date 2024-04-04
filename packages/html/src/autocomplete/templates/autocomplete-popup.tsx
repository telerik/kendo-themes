import Autocomplete from "../autocomplete.spec";
import { List, ListItem } from "../../list";

export const AutocompletePopup = ({ firstItemState, ...others }: any) => (
    <Autocomplete
        opened
        popup={
            <List>
                <ListItem {...{ [firstItemState]: true }}>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
            </List>
        }
        {...others}
    />
);
