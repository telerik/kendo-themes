import { List, ListItem, ListContent } from "../../list";

export const ListNormal = ({ children, ...other }: any) => (
    <List
        {...other}
    >
        <ListContent listboxId="list-normal-listbox" aria-label="Options">
            {children || (
                <>
                    <ListItem key="list-item-1" id="list-item-1">List item</ListItem>
                    <ListItem key="list-item-2" id="list-item-2">List item</ListItem>
                    <ListItem key="list-item-3" id="list-item-3">List item</ListItem>
                </>
            )}
        </ListContent>
    </List>
);
