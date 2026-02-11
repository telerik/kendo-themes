import { List } from '../../list/list.spec';
import { ListContent } from '../../list/list-content';
import { ListItem } from '../../list/list-item.spec';
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
