import { List, ListContent, ListItem } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxPopup = (props) => {
    const { id = 'combobox', ...other } = props;

    return (
        <Combobox
            id={id}
            opened
            activeDescendantId={`${id}-listbox-item-0`}
            popup={
                <List role="listbox" aria-label="Combobox options" listboxId={`${id}-listbox`}>
                    <ListContent>
                        <ListItem id={`${id}-listbox-item-0`} role="option" aria-selected="true" tabIndex={0} selected focus>List item</ListItem>
                        <ListItem id={`${id}-listbox-item-1`} role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                        <ListItem id={`${id}-listbox-item-2`} role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                    </ListContent>
                </List>
            }
            {...other}
        />
    );
};
