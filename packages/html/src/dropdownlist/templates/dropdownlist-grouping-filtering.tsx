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
                <List>
                    <ListGroup label={"Group 1"} root={true}>
                        <ListItem>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                        <ListItem>List group 1 item 3</ListItem>
                    </ListGroup>
                    <ListGroup label={"Group 2"}>
                        <ListItem>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                        <ListItem>List group 1 item 3</ListItem>
                    </ListGroup>
                </List>
            </>
        }
        {...props}
    />
);

export default DropdownListGroupingFiltering;
