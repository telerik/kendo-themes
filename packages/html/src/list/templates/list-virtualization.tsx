import { List, ListItem } from "..";

export const ListVirtualization = (props) => (
    <List
        virtualization
        children={[
            <ListItem key="list-item-1">List item</ListItem>,
            <ListItem key="list-item-2">List item</ListItem>,
            <ListItem key="list-item-3">List item</ListItem>
        ]}
        {...props}
    />
);
