import { List, ListItem, ListCustomValue } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectCustomValue = ({ value="Custom value", ...other }: any) => (
    <MultiSelect value={value}
        opened
        popup={(
            <>
                <List customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                </List>
            </>
        )}
        {...other}
    />
);
