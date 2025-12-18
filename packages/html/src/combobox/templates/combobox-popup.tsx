import { List, ListItem } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxPopup = (props) => (
    <Combobox
        opened
        popup={
            <List role="listbox" aria-label="Combobox options">
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
            </List>
        }
        {...props}
    />
);
