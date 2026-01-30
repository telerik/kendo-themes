import { List, ListItem, ListGroupItem, ListContent, ListUl } from "..";

export const ListWithGrouping = ({ children, ...other }: any) => (
    <List header="Group 1" {...other}>
        <ListContent grouping>
            {children || (
                <>
                    <ListUl>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                        <ListItem>List item 1.3</ListItem>
                    </ListUl>
                    <ListUl>
                        <ListGroupItem>Group 2</ListGroupItem>
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                        <ListItem>List item 2.3</ListItem>
                    </ListUl>
                </>
            )}
        </ListContent>
    </List>
);
