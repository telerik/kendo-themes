import { List, ListAngular, ListGroup, ListItem } from '../../list';
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

            <span>Universal</span>
            <span>Universal virtual</span>
            <span>Universal (rtl)</span>
            <span>Universal virtual (rtl)</span>

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

            <span>Angular</span>
            <span>Angular virtual</span>
            <span>Angular (rtl)</span>
            <span>Angular virtual (rtl)</span>

            <section>
                <Popup className="k-list-container">
                    <ListAngular>
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
                    </ListAngular>
                </Popup>
            </section>

            <section>
                <Popup className="k-list-container">
                    <ListAngular virtualization>
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
                    </ListAngular>
                </Popup>
            </section>

            <section dir="rtl">
                <Popup className="k-list-container">
                    <ListAngular>
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
                    </ListAngular>
                </Popup>
            </section>

            <section dir="rtl">
                <Popup className="k-list-container">
                    <ListAngular virtualization>
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
                    </ListAngular>
                </Popup>
            </section>

        </div>
    </>
);
