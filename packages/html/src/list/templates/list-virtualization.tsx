import { List, ListItem, ListContent } from "..";

export const ListVirtualization = ({ children, ...other }: any) => (
    <List
        virtualization
        {...other}
    >
        <ListContent virtualization listboxId="list-virt-listbox" aria-label="Options">
            {children || (
                <>
                    <ListItem key="list-item-1" id="list-virt-item-1">List item</ListItem>
                    <ListItem key="list-item-2" id="list-virt-item-2">List item</ListItem>
                    <ListItem key="list-item-3" id="list-virt-item-3">List item</ListItem>
                </>
            )}
        </ListContent>
    </List>
);
