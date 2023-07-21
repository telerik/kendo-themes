import { ListGroup, ListGroupItem } from '../../listgroup';

export const ListGroupNormal = (props) => (
    <ListGroup
        children={[
            <ListGroupItem text="Item"></ListGroupItem>,
            <ListGroupItem text="Item"></ListGroupItem>,
            <ListGroupItem text="Item"></ListGroupItem>
        ]}
        {...props}
    />
);