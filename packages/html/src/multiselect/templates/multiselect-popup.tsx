import { List, ListItem } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectPopup = (props) => (
    <MultiSelect
        opened
        popup={(
            <List role="listbox" aria-label="MultiSelect options" aria-multiselectable="true">
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
                <ListItem role="option" aria-selected="false" tabIndex={-1}>List item</ListItem>
            </List>
        )}
        {...props}
    />
);
