import { List, ListItem } from "../../list";
import DropdownList from "../dropdownlist.spec";

export const DropdownListPopup = (props) => {
    const { id = 'dropdownlist', ...other } = props;

    return (
        <DropdownList
            id={id}
            opened
            activeDescendantId={`${id}-listbox-item-0`}
            popup={
                <List role="listbox" aria-label="DropdownList options" listboxId={`${id}-listbox`} listboxAriaLive="polite">
                    <ListItem id={`${id}-listbox-item-0`} role="option" aria-selected="true" tabIndex={0} selected focus>List item</ListItem>
                    <ListItem id={`${id}-listbox-item-1`} role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                    <ListItem id={`${id}-listbox-item-2`} role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                </List>
            }
            {...other}
        />
    );
};
