import { List, ListContent, ListItem } from "../../list";
import DropdownList from "../dropdownlist.spec";

export const DropdownListPopup = (props) => (
    <DropdownList
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
