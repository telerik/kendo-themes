import { List } from '../list.spec';
import { ListItem } from '../list-item.spec';
import { ListGroupItem } from '../list-group-item';
import { ListContent } from '../list-content';
import { ListUl } from '../list-ul';

export const VirtualListWithGrouping = ({ children, ...other }: any) => (
    <List header="Group 1" {...other} virtualization>
        <ListContent grouping virtualization>
            {children || (
                <>
                    <ListUl>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                        <ListItem>List item 1.3</ListItem>
                    </ListUl>
                    <ListUl>
                        <ListGroupItem>Group 2</ListGroupItem>
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                        <ListItem>List item 2.3</ListItem>
                    </ListUl>
                </>
            )}
        </ListContent>
    </List>
);
