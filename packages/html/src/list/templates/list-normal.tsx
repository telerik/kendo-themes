import { List, ListItem } from "../../list";

export const ListNormal = (props) => (
    <List
        children={[
            <ListItem key="list-item-1">List item</ListItem>,
            <ListItem key="list-item-2">List item</ListItem>,
            <ListItem key="list-item-3">List item</ListItem>
        ]}
        {...props}
    />
);

export default ListNormal;
