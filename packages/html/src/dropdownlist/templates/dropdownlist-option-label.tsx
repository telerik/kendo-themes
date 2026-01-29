import DropdownList from "../dropdownlist.spec";
import { List, ListItem, ListOptionLabel } from "../../list";

export const DropdownListOptionLabel = (props) => {
    const { id = 'dropdownlist-option-label', ...other } = props;

    return (
        <DropdownList
            id={id}
            value="-Select item-"
            opened
            focus
            popup={(
                <List
                    optionLabel={<ListOptionLabel text="-Select item-" />}
                    role="listbox"
                    aria-label="DropdownList options"
                    listboxId={`${id}-listbox`}
                    listboxAriaLive="polite"
                >
                    <ListItem id={`${id}-listbox-item-0`} role="option" aria-selected="true" tabIndex={0} selected focus>List item</ListItem>
                    <ListItem id={`${id}-listbox-item-1`} role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                    <ListItem id={`${id}-listbox-item-2`} role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                </List>
            )}
            {...other}
        />
    );
};
