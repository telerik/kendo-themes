import { List, ListGroup, ListItem } from "../../list";
import { Searchbox } from "../../searchbox";
import DropdownList from "../dropdownlist.spec";

export const DropdownListGroupingFiltering = (props) => (
    <DropdownList
        opened={true}
        popup={
            <>
                <div className="k-list-filter">
                    <Searchbox />
                </div>
                <List role="listbox" aria-label="DropdownList options">
                    <ListGroup label={"Group 1"} root={true}>
                        <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 1</ListItem>
                        <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 2</ListItem>
                        <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 3</ListItem>
                    </ListGroup>
                    <ListGroup label={"Group 2"}>
                        <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 1</ListItem>
                        <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 2</ListItem>
                        <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 3</ListItem>
                    </ListGroup>
                </List>
            </>
        }
        {...props}
    />
);
