import { List, ListWithGrouping, VirtualListWithGrouping, ListGroup, ListItem} from '../../list';

const style = `
    .k-virtual-list > .k-item,
    .k-virtual-list .k-list-item,
    .k-virtual-list .k-list-group-item {
        position: relative;
    }

    section {
        outline: 1px dotted;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Grouping</span>
            <span>Virtual grouping</span>
            <span>Grouping (rtl)</span>
            <span>Virtual grouping</span>

            <section>
                <ListWithGrouping></ListWithGrouping>
            </section>

            <section>
                <VirtualListWithGrouping></VirtualListWithGrouping>
            </section>

            <section dir="rtl">
                <ListWithGrouping></ListWithGrouping>
            </section>

            <section dir="rtl">
                <VirtualListWithGrouping></VirtualListWithGrouping>
            </section>


            <span>Group with icon</span>
            <span>Virtual grouping with icon</span>
            <span>Group with icon (rtl)</span>
            <span>Virtual grouping with icon (rtl)</span>

            <section>
                <List>
                    <ListGroup label="Group 1">
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2" groupIconName="gear">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                    </ListGroup>
                </List>
            </section>

            <section>
                <List virtualization>
                    <ListGroup label="Group 1">
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2" groupIconName="gear">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                    </ListGroup>
                </List>
            </section>

            <section dir="rtl">
                <List>
                    <ListGroup label="Group 1">
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2" groupIconName="gear">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                    </ListGroup>
                </List>
            </section>

            <section dir="rtl">
                <List virtualization>
                    <ListGroup label="Group 1">
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2" groupIconName="gear">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                    </ListGroup>
                </List>
            </section>
        </div>
    </>
);
