import { List, ListItem, ListGroupItem, ListContent, ListUl } from "..";
import { nextId } from "../../misc";

export const ListGrouping = ({ children, ...other }: any) => {
    const group1Id = nextId('list-grp-group');
    const group2Id = nextId('list-grp-group');

    return (
        <List header="Group 1" {...other}>
            <ListContent grouping listboxId="list-grp-listbox" aria-label="Options">
                {children || (
                    <>
                        <ListUl role="group" aria-labelledby={group1Id}>
                            <ListGroupItem id={group1Id}>Group 1</ListGroupItem>
                            <ListItem id={nextId('list-grp-item')}>List item 1.1</ListItem>
                            <ListItem id={nextId('list-grp-item')}>List item 1.2</ListItem>
                            <ListItem id={nextId('list-grp-item')}>List item 1.3</ListItem>
                        </ListUl>
                        <ListUl role="group" aria-labelledby={group2Id}>
                            <ListGroupItem id={group2Id}>Group 2</ListGroupItem>
                            <ListItem id={nextId('list-grp-item')}>List item 2.1</ListItem>
                            <ListItem id={nextId('list-grp-item')}>List item 2.2</ListItem>
                            <ListItem id={nextId('list-grp-item')}>List item 2.3</ListItem>
                        </ListUl>
                    </>
                )}
            </ListContent>
        </List>
    );
};

// Alias for backward compatibility
export const ListWithGrouping = ListGrouping;
