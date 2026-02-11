import { List } from '../../list/list.spec';
import { ListContent } from '../../list/list-content';
import { ListItem } from '../../list/list-item.spec';
import { ListCustomValue } from '../../list/list-custom-value';
import { ListGroupItem } from '../../list/list-group-item';
import { ListUl } from '../../list/list-ul';
import MultiSelect from "../multiselect.spec";

export const MultiSelectGroupingVirtualCustomValue = ({ value="Custom value", ...other }: any) => (
    <MultiSelect  value={value}
        opened
        popup={
            <List header="Group 1" virtualization customValue={<ListCustomValue text={`Use "${value}"`}/>}>
                <ListContent grouping virtualization>
                    <ListUl>
                        <ListItem>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                    </ListUl>
                    <ListUl>
                        <ListGroupItem>Group 2</ListGroupItem>
                        <ListItem>List group 1 item 1</ListItem>
                        <ListItem>List group 1 item 2</ListItem>
                    </ListUl>
                </ListContent>
            </List>
        }
        {...other}
        />
);
