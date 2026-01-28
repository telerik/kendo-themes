import { List, ListContent, ListItem } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxPopup = (props) => (
    <Combobox
        opened
        popup={
            <List>
                <ListContent>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                </ListContent>
            </List>
        }
        {...props}
    />
);
