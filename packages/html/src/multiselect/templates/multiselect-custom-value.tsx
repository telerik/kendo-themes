import { List } from '../../list/list.spec';
import { ListContent } from '../../list/list-content';
import { ListItem } from '../../list/list-item.spec';
import { ListCustomValue } from '../../list/list-custom-value';
import MultiSelect from "../multiselect.spec";

export const MultiSelectCustomValue = ({ value="Custom value", ...other }: any) => (
    <MultiSelect value={value}
        opened
        popup={(
            <>
                <List customValue={<ListCustomValue text={`Use "${value}"`}/>} >
                    <ListContent>
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
