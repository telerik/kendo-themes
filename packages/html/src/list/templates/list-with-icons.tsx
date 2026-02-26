import { List, ListItem, ListContent } from "..";
import { nextId } from "../../misc";

export const ListWithIcons = ({ children, ...other }: any) => (
    <List {...other}>
        <ListContent listboxId="list-icons-listbox" aria-label="Options">
            {children || (
                <>
                    <ListItem id={nextId('list-icons-item')} iconName="folder">Folder item</ListItem>
                    <ListItem id={nextId('list-icons-item')} iconName="file">File item</ListItem>
                    <ListItem id={nextId('list-icons-item')} iconName="image">Image item</ListItem>
                </>
            )}
        </ListContent>
    </List>
);
