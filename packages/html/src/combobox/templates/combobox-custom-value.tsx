import { List, ListItem, ListCustomValue } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxCustomValue = ({ value="Custom value", ...other }: any) => (
    <Combobox value={value}
        opened
        popup={
            <List customValue={<ListCustomValue text={`Use "${value}"`}/>} role="listbox" aria-label="Combobox options">
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
            </List>
        }
        {...other}
    />
);
