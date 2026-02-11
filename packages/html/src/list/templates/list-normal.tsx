import { List } from "../../list/list.spec";
import { ListItem } from "../../list/list-item.spec";
import { ListContent } from "../../list/list-content";

export const ListNormal = ({ children, ...other }: any) => (
    <List
        {...other}
    >
        <ListContent>
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
