import { List, ListContent, ListCustomValue, ListItem } from "../../list";
import { nextId } from "../../misc";
import Combobox from "../combobox.spec";

export const ComboboxCustomValue = ({ value="Custom value", ...other }: any) => (
    <Combobox value={value}
        id="combobox-cv"
        opened
        popup={
            <List customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                <ListContent listboxId="combobox-cv-listbox" aria-label="Options">
                    <ListItem id={nextId('combobox-cv-item')}>List item</ListItem>
                    <ListItem id={nextId('combobox-cv-item')}>List item</ListItem>
                    <ListItem id={nextId('combobox-cv-item')}>List item</ListItem>
                </ListContent>
            </List>
        }
        {...other}
    />
);
