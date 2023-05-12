import { List, ListItem } from "../../list";
import DropdownList from "../dropdownlist.spec";

export const DropdownListPopup = (props) => (
    <DropdownList
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
