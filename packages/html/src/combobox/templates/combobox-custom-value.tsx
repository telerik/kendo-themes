import { List, ListContent, ListCustomValue, ListItem } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxCustomValue = ({ value="Custom value", ...other }: any) => (
    <Combobox value={value}
        opened
        popup={
            <List customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                <ListContent>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                </ListContent>
            </List>
        }
        {...other}
    />
);
