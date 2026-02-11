import { List } from '../../list/list.spec';
import { ListContent } from '../../list/list-content';
import { ListItem } from '../../list/list-item.spec';
import { ListUl } from '../../list/list-ul';
import { ListGroupItem } from '../../list/list-group-item';
import { Searchbox } from "../../searchbox/searchbox.spec";
import DropdownList from "../dropdownlist.spec";

export const DropdownListGroupingFiltering = (props) => (
    <DropdownList
        opened
        popup={
            <>
                <div className="k-list-filter">
                    <Searchbox />
                </div>
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
            </>
        }
        {...props}
    />
);
