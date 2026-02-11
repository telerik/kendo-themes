import { ListGroup } from '../../listgroup/listgroup.spec';
import { ListGroupItem } from '../../listgroup/listgroup-item.spec';

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
