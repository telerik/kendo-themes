import { List, ListGroup, ListItem } from "../../list";
import { Searchbox } from "../../searchbox";
import DropdownList from "../dropdownlist.spec";

export const DropdownListGroupingFilteringModern = ({ firstItemState, ...others }: any) => (
    <DropdownList
        opened
        popup={
            <>
                <div className="k-list-filter">
                    <Searchbox />
                </div>
                <List>
                    <ListGroup label={"Group 1"} root>
                        <ListItem {...{ [firstItemState]: true }}>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                        <ListItem>List group 1 item 3</ListItem>
                    </ListGroup>
                    <ListGroup>
                        <ListItem group>Group 2</ListItem>
                        <ListItem>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                        <ListItem>List group 1 item 3</ListItem>
                    </ListGroup>
                </List>
            </>
        }
        {...others}
    />
);
