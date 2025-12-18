import { List, ListItem } from "../../list";
import DropdownList from "../dropdownlist.spec";

export const DropdownListPopup = (props) => (
    <DropdownList
        opened
        popup={
            <List role="listbox" aria-label="DropdownList options">
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
            </List>
        }
        {...props}
    />
);
