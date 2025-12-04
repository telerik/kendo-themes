import { List, ListGroup, ListItem, ListAccessible, ListWithGrouping, VirtualListWithGrouping, ListWithGroupingModern, VirtualListWithGroupingModern, ListWithGroupingAccessible, VirtualListWithGroupingAccessible } from '../../list';

const style = `
    .k-virtual-list > .k-item,
    .k-virtual-list .k-list-item,
    .k-virtual-list .k-list-group-item {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Universal (rtl)</span>
            <span>Universal - no sticky header (rtl)</span>
            <span>Universal virtual (rtl)</span>
            <span>Universal virtual - no sticky header (rtl)</span>

            <section dir="rtl">
                <ListWithGrouping></ListWithGrouping>
            </section>

            <section dir="rtl">
                <List>
                    <ListGroup label="Group 1" >
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                        <ListItem>List item 1.3</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                        <ListItem>List item 2.3</ListItem>
                    </ListGroup>
                </List>
            </section>

            <section dir="rtl">
                <VirtualListWithGrouping></VirtualListWithGrouping>
            </section>

            <section dir="rtl">
                <List virtualization>
                    <ListGroup label="Group 1" >
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                        <ListItem>List item 1.3</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                        <ListItem>List item 2.3</ListItem>
                    </ListGroup>
                </List>
            </section>

            <span>Modern</span>
            <span>Modern - no sticky header</span>
            <span>Modern virtual</span>
            <span>Modern virtual - no sticky header</span>

            <section dir="rtl">
                <ListWithGroupingModern></ListWithGroupingModern>
            </section>

            <section dir="rtl">
                <List>
                    <ListGroup>
                        <ListItem group>Group 1</ListItem>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                        <ListItem>List item 1.3</ListItem>
                    </ListGroup>
                    <ListGroup>
                        <ListItem group>Group 2</ListItem>
                        <ListItem>List item 1.2</ListItem>
                        <ListItem>List item 2.2</ListItem>
                        <ListItem>List item 2.3</ListItem>
                    </ListGroup>
                </List>
            </section>

            <section dir="rtl">
                <VirtualListWithGroupingModern></VirtualListWithGroupingModern>
            </section>

            <section dir="rtl">
                <List virtualization>
                    <ListGroup>
                        <ListItem group>Group 1</ListItem>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                        <ListItem>List item 1.3</ListItem>
                    </ListGroup>
                    <ListGroup>
                        <ListItem group>Group 2</ListItem>
                        <ListItem>List item 1.2</ListItem>
                        <ListItem>List item 2.2</ListItem>
                        <ListItem>List item 2.3</ListItem>
                    </ListGroup>
                </List>
            </section>

            <span>Accessible</span>
            <span>Accessible - no sticky header</span>
            <span>Accessible virtual</span>
            <span>Accessible virtual - no sticky header</span>

            <section dir="rtl">
                <ListWithGroupingAccessible></ListWithGroupingAccessible>
            </section>

            <section dir="rtl">
                <ListAccessible>
                    <ListGroup>
                        <ListItem group>Group 1</ListItem>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                        <ListItem>List item 1.3</ListItem>
                    </ListGroup>
                    <ListGroup>
                        <ListItem group>Group 2</ListItem>
                        <ListItem>List item 1.2</ListItem>
                        <ListItem>List item 2.2</ListItem>
                        <ListItem>List item 2.3</ListItem>
                    </ListGroup>
                </ListAccessible>
            </section>

            <section dir="rtl">
                <VirtualListWithGroupingAccessible></VirtualListWithGroupingAccessible>
            </section>

            <section dir="rtl">
                <ListAccessible virtualization>
                    <ListGroup>
                        <ListItem group>Group 1</ListItem>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                        <ListItem>List item 1.3</ListItem>
                    </ListGroup>
                    <ListGroup>
                        <ListItem group>Group 2</ListItem>
                        <ListItem>List item 1.2</ListItem>
                        <ListItem>List item 2.2</ListItem>
                        <ListItem>List item 2.3</ListItem>
                    </ListGroup>
                </ListAccessible>
            </section>
        </div>
    </>
);
