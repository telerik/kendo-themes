import { List, ListItem, ListContent } from "..";
import { nextId } from "../../misc";

export const ListVirtualization = ({ children, ...other }: any) => (
    <List
        virtualization
        {...other}
    >
        <ListContent virtualization listboxId="list-virt-listbox" aria-label="Options">
            {children || (
                <>
                    <ListItem key="list-item-1" id={nextId('list-virt-item')}>List item</ListItem>
                    <ListItem key="list-item-2" id={nextId('list-virt-item')}>List item</ListItem>
                    <ListItem key="list-item-3" id={nextId('list-virt-item')}>List item</ListItem>
                </>
            )}
        </ListContent>
    </List>
);
