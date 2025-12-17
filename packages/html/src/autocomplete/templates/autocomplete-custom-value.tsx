import Autocomplete from "../autocomplete.spec";
import { List, ListItem, ListCustomValue } from "../../list";

export const AutocompleteCustomValue = ({ value="Custom value", ...other }: any) => (
    <Autocomplete value={value}
        opened
        popup={
            <List customValue={<ListCustomValue text={`Use "${value}"`}/>} role="listbox" aria-label="Autocomplete options">
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
            </List>
        }
        {...other}
    />
);
