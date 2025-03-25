import { List, ListItem, ListCustomValue } from "../../list";
import Combobox from "../combobox.spec";

export const ComboboxCustomValue = ({ value="Custom value", ...other }: any) => (
    <Combobox value={value}
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
