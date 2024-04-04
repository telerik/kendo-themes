import { List, ListItem } from "../../list";
import DropdownList from "../dropdownlist.spec";

export const DropdownListPopup = ({ firstItemState, ...others }: any) => (
    <DropdownList
        opened
        popup={
            <List>
                <ListItem {...{ [firstItemState]: true }}>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
            </List>
        }
        {...others}
    />
);
