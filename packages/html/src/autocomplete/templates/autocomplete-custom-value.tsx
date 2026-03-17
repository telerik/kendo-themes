import Autocomplete from "../autocomplete.spec";
import { List, ListContent, ListCustomValue, ListItem } from "../../list";
import { nextId } from "../../misc";

export const AutocompleteCustomValue = ({ value="Custom value", ...other }: any) => (
    <Autocomplete value={value}
        id={nextId('ac')}
        aria-label="Search options"
        opened
        popup={
            <List customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                <ListContent aria-label="Options">
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                </ListContent>
            </List>
        }
        {...other}
    />
);
