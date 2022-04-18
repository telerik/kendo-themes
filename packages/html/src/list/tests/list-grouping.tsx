import React from 'react';
import ReactDOM from 'react-dom/client';
import { List, ListGroup, ListItem } from '../../list';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-virtual-list > .k-item,
    .k-virtual-list .k-list-item,
    .k-virtual-list .k-list-group-item {
        position: relative;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Universal</span>
            <span>Universal virtual</span>
            <span>Universal (rtl)</span>
            <span>Universal virtual (rtl)</span>

            <section>
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
            </section>

            <section>
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
            </section>

            <section dir="rtl">
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
            </section>

            <section dir="rtl">
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
            </section>

            <span>Angular</span>
            <span>Angular virtual</span>
            <span>Angular (rtl)</span>
            <span>Angular virtual (rtl)</span>

            <section>
                <List framework="angular">
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
            </section>

            <section>
                <List framework="angular" virtualization>
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
            </section>

            <section dir="rtl">
                <List framework="angular">
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
            </section>

            <section dir="rtl">
                <List framework="angular" virtualization>
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
            </section>

        </div>

    </>
);
