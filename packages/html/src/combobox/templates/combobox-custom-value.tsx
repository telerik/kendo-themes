import { List } from '../../list/list.spec';
import { ListContent } from '../../list/list-content';
import { ListItem } from '../../list/list-item.spec';
import { ListCustomValue } from '../../list/list-custom-value';
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
