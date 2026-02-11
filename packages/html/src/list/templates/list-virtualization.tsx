import { List } from '../list.spec';
import { ListItem } from '../list-item.spec';
import { ListContent } from '../list-content';

export const ListVirtualization = ({ children, ...other }: any) => (
    <List
        virtualization
        {...other}
    >
        <ListContent virtualization>
            {children || (
                <>
                    <ListItem key="list-item-1">List item</ListItem>
                    <ListItem key="list-item-2">List item</ListItem>
                    <ListItem key="list-item-3">List item</ListItem>
                </>
            )}
        </ListContent>
    </List>
);
