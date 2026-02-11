import { List } from '../../list/list.spec';
import { ListContent } from '../../list/list-content';
import { ListItem } from '../../list/list-item.spec';
import MultiSelect from "../multiselect.spec";

export const MultiSelectPopup = (props) => (
    <MultiSelect
        opened
        popup={(
            <List>
                <ListContent>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                    <ListItem>List item</ListItem>
                </ListContent>
            </List>
        )}
        {...props}
    />
);
