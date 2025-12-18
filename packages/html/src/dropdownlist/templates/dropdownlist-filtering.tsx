import { List, ListItem } from "../../list";
import { Searchbox } from "../../searchbox";
import DropdownList from "../dropdownlist.spec";

export const DropdownListFiltering = (props) => (
    <DropdownList
        opened={true}
        popup={
            <>
                <div className="k-list-filter">
                    <Searchbox />
                </div>
                <List role="listbox" aria-label="DropdownList options">
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                </List>
            </>
        }
        {...props}
    />
);
