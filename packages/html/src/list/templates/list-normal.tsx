import { List, ListItem } from "../../list";

export const ListNormal = (props) => (
    <List
        children={[
            <ListItem>List item</ListItem>,
            <ListItem>List item</ListItem>,
            <ListItem>List item</ListItem>
        ]}
        {...props}
    />
);