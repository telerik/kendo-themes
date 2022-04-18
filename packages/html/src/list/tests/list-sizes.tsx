import React from 'react';
import ReactDOM from 'react-dom/client';
import { List, ListGroup, ListItem } from '../../list';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>

        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <section>
                <List size="small">
                    <ListItem>Baseball</ListItem>
                    <ListItem>Basketball</ListItem>
                    <ListItem>Cricket</ListItem>
                </List>
            </section>

            <section>
                <List size="medium">
                    <ListItem>Baseball</ListItem>
                    <ListItem>Basketball</ListItem>
                    <ListItem>Cricket</ListItem>
                </List>
            </section>

            <section>
                <List size="large">
                    <ListItem>Baseball</ListItem>
                    <ListItem>Basketball</ListItem>
                    <ListItem>Cricket</ListItem>
                </List>
            </section>

            <span className="k-colspan-all">universal grouping</span>

            <section>
                <List size="small">
                    <ListGroup label="Group 1" root>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                    </ListGroup>
                </List>
            </section>

            <section>
                <List size="medium">
                    <ListGroup label="Group 1" root>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                    </ListGroup>
                </List>
            </section>

            <section>
                <List size="large">
                    <ListGroup label="Group 1" root>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                    </ListGroup>
                </List>
            </section>

            <span className="k-colspan-all">angular grouping</span>

            <section>
                <List size="small" framework="angular">
                    <ListGroup label="Group 1" root>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                    </ListGroup>
                </List>
            </section>

            <section>
                <List size="medium" framework="angular">
                    <ListGroup label="Group 1" root>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                    </ListGroup>
                </List>
            </section>

            <section>
                <List size="large" framework="angular">
                    <ListGroup label="Group 1" root>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                    </ListGroup>
                </List>
            </section>

        </div>
    </>
);
