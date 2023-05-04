import { List, ListAngular, ListGroup, ListItem } from '../../list';


export default () =>(
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

            <span className="k-colspan-all k-col-span-full">universal grouping</span>

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

            <span className="k-colspan-all k-col-span-full">angular grouping</span>

            <section>
                <ListAngular size="small">
                    <ListGroup label="Group 1" root>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                    </ListGroup>
                </ListAngular>
            </section>

            <section>
                <ListAngular size="medium">
                    <ListGroup label="Group 1" root>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                    </ListGroup>
                </ListAngular>
            </section>

            <section>
                <ListAngular size="large">
                    <ListGroup label="Group 1" root>
                        <ListItem>List item 1.1</ListItem>
                        <ListItem>List item 1.2</ListItem>
                    </ListGroup>
                    <ListGroup label="Group 2">
                        <ListItem>List item 2.1</ListItem>
                        <ListItem>List item 2.2</ListItem>
                    </ListGroup>
                </ListAngular>
            </section>

        </div>
    </>
);
