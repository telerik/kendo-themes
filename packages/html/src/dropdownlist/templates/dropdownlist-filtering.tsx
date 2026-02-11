import { List } from '../../list/list.spec';
import { ListContent } from '../../list/list-content';
import { ListItem } from '../../list/list-item.spec';
import { Searchbox } from "../../searchbox/searchbox.spec";
import DropdownList from "../dropdownlist.spec";

export const DropdownListFiltering = (props) => (
    <DropdownList
        opened={true}
        popup={
            <>
                <div className="k-list-filter">
                    <Searchbox />
                </div>
                <List>
                    <ListContent>
                        <ListItem>List item</ListItem>
                        <ListItem>List item</ListItem>
                        <ListItem>List item</ListItem>
                    </ListContent>
                </List>
            </>
        }
        {...props}
    />
);
