import { List, ListItem, ListCustomValue } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectCustomValue = ({ value="Custom value", ...other }: any) => (
    <MultiSelect value={value}
        opened
        popup={(
            <>
                <List customValue={<ListCustomValue text={`Use "${value}"`}/>} role="listbox" aria-label="MultiSelect options" aria-multiselectable="true">
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                </List>
            </>
        )}
        {...other}
    />
);
