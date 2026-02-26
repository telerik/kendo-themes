import { List, ListItem, ListContent } from "../../list";
import { nextId } from "../../misc";

export const ListNormal = ({ children, ...other }: any) => (
    <List
        {...other}
    >
        <ListContent listboxId="list-normal-listbox" aria-label="Options">
            {children || (
                <>
                    <ListItem key="list-item-1" id={nextId('list-item')}>List item</ListItem>
                    <ListItem key="list-item-2" id={nextId('list-item')}>List item</ListItem>
                    <ListItem key="list-item-3" id={nextId('list-item')}>List item</ListItem>
                </>
            )}
        </ListContent>
    </List>
);
