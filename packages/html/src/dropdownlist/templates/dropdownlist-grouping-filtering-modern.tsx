import { List, ListGroup, ListItem } from "../../list";
import { Searchbox } from "../../searchbox";
import DropdownList from "../dropdownlist.spec";

export const DropdownListGroupingFilteringModern = (props) => (
    <DropdownList
        opened
        popup={
            <>
                <div className="k-list-filter">
                    <Searchbox />
                </div>
                <List role="listbox" aria-label="DropdownList options">
                    <ListGroup label={"Group 1"} root>
                        <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 1</ListItem>
                        <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 2</ListItem>
                        <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 3</ListItem>
                    </ListGroup>
                    <ListGroup>
                        <ListItem group>Group 2</ListItem>
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
