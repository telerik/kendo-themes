import { List, ListContent, ListCustomValue, ListItem } from "../../list";
import { nextId } from "../../misc";
import MultiSelect from "../multiselect.spec";

export const MultiSelectCustomValue = ({ value="Custom value", ...other }: any) => (
    <MultiSelect value={value}
        id={nextId('ms')}
        aria-label="Select options"
        opened
        popup={(
            <>
                <List customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                    <ListContent aria-label="Options">
                        <ListItem>List item</ListItem>
                        <ListItem>List item</ListItem>
                        <ListItem>List item</ListItem>
                    </ListContent>
                </List>
            </>
        )}
        {...other}
    />
);
