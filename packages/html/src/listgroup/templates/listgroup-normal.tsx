import { ListGroup, ListGroupItem } from '../../listgroup';

export const ListGroupNormal = (props) => (
    <ListGroup
        children={[
            <ListGroupItem key="list-group-item-1" text="Item"></ListGroupItem>,
            <ListGroupItem key="list-group-item-2" text="Item"></ListGroupItem>,
            <ListGroupItem key="list-group-item-3" text="Item"></ListGroupItem>
        ]}
        {...props}
    />
);
