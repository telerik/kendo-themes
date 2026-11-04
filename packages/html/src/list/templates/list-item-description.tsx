import { List, ListItem, ListContent } from "..";
import { nextId } from "../../misc";

export const ListItemDescription = ({ children, ...other }: any) => (
    <List {...other}>
        <ListContent listboxId="list-item-description-listbox" aria-label="Options">
            {children || (
                <>
                    <ListItem id={nextId('list-item-description')} description="Create a blank document">New document</ListItem>
                    <ListItem id={nextId('list-item-description')} description="Browse your files">Open</ListItem>
                    <ListItem id={nextId('list-item-description')} description="View recently opened files">Recent files</ListItem>
                </>
            )}
        </ListContent>
    </List>
);
