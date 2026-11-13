import { List, ListItem, ListContent } from "..";
import { nextId } from "../../misc";

export const ListItemActions = ({ children, ...other }: any) => (
    <List {...other}>
        <ListContent listboxId="list-item-actions-listbox" aria-label="Options">
            {children || (
                <>
                    <ListItem id={nextId('list-item-actions')} actions={<kbd>Ctrl+C</kbd>}>Copy</ListItem>
                    <ListItem id={nextId('list-item-actions')} actions={<kbd>Ctrl+V</kbd>}>Paste</ListItem>
                    <ListItem id={nextId('list-item-actions')} actions={<kbd>Ctrl+X</kbd>}>Cut</ListItem>
                </>
            )}
        </ListContent>
    </List>
);
