import { List, ListItem, ListGroupItem, ListContent, ListUl } from "..";

export const ListGrouping = ({ children, ...other }: any) => (
    <List header="Group 1" {...other}>
        <ListContent grouping listboxId="list-grp-listbox" aria-label="Options">
            {children || (
                <>
                    <ListUl role="group" aria-labelledby="list-grp-group-1">
                        <ListGroupItem id="list-grp-group-1">Group 1</ListGroupItem>
                        <ListItem id="list-grp-item-1">List item 1.1</ListItem>
                        <ListItem id="list-grp-item-2">List item 1.2</ListItem>
                        <ListItem id="list-grp-item-3">List item 1.3</ListItem>
                    </ListUl>
                    <ListUl role="group" aria-labelledby="list-grp-group-2">
                        <ListGroupItem id="list-grp-group-2">Group 2</ListGroupItem>
                        <ListItem id="list-grp-item-4">List item 2.1</ListItem>
                        <ListItem id="list-grp-item-5">List item 2.2</ListItem>
                        <ListItem id="list-grp-item-6">List item 2.3</ListItem>
                    </ListUl>
                </>
            )}
        </ListContent>
    </List>
);

// Alias for backward compatibility
export const ListWithGrouping = ListGrouping;
