import { List, ListItem } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxPopup = (props) => (
    <Combobox
        opened={true}
        popup={
            <List>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
            </List>
        }
        {...props}
    />
);