import Autocomplete from "../autocomplete.spec";
import { List, ListItem, ListCustomValue } from "../../list";

export const AutocompleteCustomValue = ({ value="Custom value", ...other }: any) => (
    <Autocomplete value={value}
        opened
        popup={
            <List customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
                <ListItem>List item</ListItem>
            </List>
        }
        {...other}
    />
);
