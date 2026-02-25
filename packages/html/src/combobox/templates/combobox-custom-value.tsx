import { List, ListContent, ListCustomValue, ListItem } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxCustomValue = ({ value="Custom value", ...other }: any) => (
    <Combobox value={value}
        id="combobox-cv"
        opened
        popup={
            <List customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                <ListContent listboxId="combobox-cv-listbox" aria-label="Options">
                    <ListItem id="combobox-cv-item-0">List item</ListItem>
                    <ListItem id="combobox-cv-item-1">List item</ListItem>
                    <ListItem id="combobox-cv-item-2">List item</ListItem>
                </ListContent>
            </List>
        }
        {...other}
    />
);
