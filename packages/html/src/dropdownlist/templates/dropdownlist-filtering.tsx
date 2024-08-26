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
                <List>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                </List>
            </>
        }
        {...props}
    />
);

export default DropdownListFiltering;
