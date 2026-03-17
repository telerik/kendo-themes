import { List, ListContent, ListItem } from "../../list";
import { nextId } from "../../misc";
import { Searchbox } from "../../searchbox";
import DropdownList from "../dropdownlist.spec";

export const DropdownListFiltering = (props) => (
    <DropdownList
        id={nextId('ddl')}
        aria-label="Filter options"
        opened={true}
        popup={
            <>
                <div className="k-list-filter">
                    <Searchbox aria-label="Search" />
                </div>
                <List>
                    <ListContent aria-label="Options">
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
