import { List, ListItem, ListCustomValue } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxCustomValue = ({ value = "Custom value", id = 'combobox', ...other }: any) => (
    <Combobox value={value}
        id={id}
        opened
        activeDescendantId={`${id}-listbox-item-0`}
        popup={
            <List customValue={<ListCustomValue text={`Use "${value}"`}/>} role="listbox" aria-label="Combobox options" listboxId={`${id}-listbox`}>
                <ListItem id={`${id}-listbox-item-0`} role="option" aria-selected="true" tabIndex={0} selected focus>List item</ListItem>
                <ListItem id={`${id}-listbox-item-1`} role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem id={`${id}-listbox-item-2`} role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
            </List>
        }
        {...other}
    />
);
