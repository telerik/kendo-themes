import { List, ListGroup, ListItem, ListCustomValue } from "../../list";
import MultiSelect from "../multiselect.spec";

export const MultiSelectGroupingCustomValue = ({ value="Custom value", ...other }: any) => (
    <MultiSelect  value={value}
        opened
        popup={
            <List customValue={<ListCustomValue text={`Use "${value}"`}/>} role="listbox" aria-label="MultiSelect options" aria-multiselectable="true">
                <ListGroup label={"Group 1"} root>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 1</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 2</ListItem>
                </ListGroup>
                <ListGroup>
                    <ListItem group>Group 2</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 1</ListItem>
                    <ListItem role="option" aria-selected="false" tabIndex={-1}>List group 1 item 2</ListItem>
                </ListGroup>
            </List>
        }
        {...other}
    />
);
