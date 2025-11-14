import { List, ListGroup, ListItem } from '../../list';
import { Popup } from '../../popup';


const style = `
    .k-animation-container {
        position: relative;
        overflow: visible;
    }

    .k-virtual-list > .k-item,
    .k-virtual-list .k-list-item,
    .k-virtual-list .k-list-group-item {
        position: relative;
    }

    .k-popup {
        height: 260px;
    }

    .k-popup .k-list-container {
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Classic</span>
            <span>Classic virtual</span>
            <span>Classic (rtl)</span>
            <span>Classic virtual (rtl)</span>

            <section>
                <Popup className="k-list-container">
                    <List>
                        <ListGroup label="Group 1" root>
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
                </Popup>
            </section>

            <section>
                <Popup className="k-list-container">
                    <List virtualization>
                        <ListGroup label="Group 1" root>
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
                </Popup>
            </section>

            <section dir="rtl">
                <Popup className="k-list-container">
                    <List>
                        <ListGroup label="Group 1" root>
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
                </Popup>
            </section>

            <section dir="rtl">
                <Popup className="k-list-container">
                    <List virtualization>
                        <ListGroup label="Group 1" root>
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
                </Popup>
            </section>

            <span>Modern</span>
            <span>Modern virtual</span>
            <span>Modern (rtl)</span>
            <span>Modern virtual (rtl)</span>

            <section>
                <Popup className="k-list-container">
                    <List>
                        <ListGroup label="Group 1" root>
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
                </Popup>
            </section>

            <section>
                <Popup className="k-list-container">
                    <List virtualization>
                        <ListGroup label="Group 1" root>
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
                </Popup>
            </section>

            <section dir="rtl">
                <Popup className="k-list-container">
                    <List>
                        <ListGroup label="Group 1" root>
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
                </Popup>
            </section>

            <section dir="rtl">
                <Popup className="k-list-container">
                    <List virtualization>
                        <ListGroup label="Group 1" root>
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
                </Popup>
            </section>

        </div>
    </>
);
