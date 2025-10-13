import { List, ListItem, ListCustomValue } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectVirtualizationCustomValue = ({ value="Custom value", ...other }: any) => (
    <MultiSelect value={value}
        opened
        popup={
            <List virtualization customValue={<ListCustomValue text={`Use "${value}"`}/>}>
                <ListItem>List item 1</ListItem>
                <ListItem>List item 2</ListItem>
                <ListItem>List item 3</ListItem>
                <ListItem>List item 4</ListItem>
                <ListItem>List item 5</ListItem>
            </List>
        }
        {...other}
    />
);
