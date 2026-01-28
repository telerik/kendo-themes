import { List, ListItem, ListContent } from "..";

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
