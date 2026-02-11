import { List } from '../../list/list.spec';
import { ListContent } from '../../list/list-content';
import { ListItem } from '../../list/list-item.spec';
import { ListGroupItem } from '../../list/list-group-item';
import { ListUl } from '../../list/list-ul';
import { Popup } from '../../popup/popup.spec';


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
                    <List header="Group 1">
                        <ListContent grouping>
                            <ListUl>
                                <ListItem>List item 1.1</ListItem>
                                <ListItem>List item 1.2</ListItem>
                                <ListItem>List item 1.3</ListItem>
                            </ListUl>
                            <ListUl>
                                <ListGroupItem>Group 2</ListGroupItem>
                                <ListItem>List item 2.1</ListItem>
                                <ListItem>List item 2.2</ListItem>
                                <ListItem>List item 2.3</ListItem>
                            </ListUl>
                        </ListContent>
                    </List>
                </Popup>
            </section>

            <section>
                <Popup className="k-list-container">
                    <List header="Group 1" virtualization>
                        <ListContent grouping virtualization>
                            <ListUl>
                                <ListItem>List item 1.1</ListItem>
                                <ListItem>List item 1.2</ListItem>
                                <ListItem>List item 1.3</ListItem>
                            </ListUl>
                            <ListUl>
                                <ListGroupItem>Group 2</ListGroupItem>
                                <ListItem>List item 2.1</ListItem>
                                <ListItem>List item 2.2</ListItem>
                                <ListItem>List item 2.3</ListItem>
                            </ListUl>
                        </ListContent>
                    </List>
                </Popup>
            </section>

            <section dir="rtl">
                <Popup className="k-list-container">
                    <List header="Group 1">
                        <ListContent grouping>
                            <ListUl>
                                <ListItem>List item 1.1</ListItem>
                                <ListItem>List item 1.2</ListItem>
                                <ListItem>List item 1.3</ListItem>
                            </ListUl>
                            <ListUl>
                                <ListGroupItem>Group 2</ListGroupItem>
                                <ListItem>List item 2.1</ListItem>
                                <ListItem>List item 2.2</ListItem>
                                <ListItem>List item 2.3</ListItem>
                            </ListUl>
                        </ListContent>
                    </List>
                </Popup>
            </section>

            <section dir="rtl">
                <Popup className="k-list-container">
                    <List header="Group 1" virtualization>
                        <ListContent grouping virtualization>
                            <ListUl>
                                <ListItem>List item 1.1</ListItem>
                                <ListItem>List item 1.2</ListItem>
                                <ListItem>List item 1.3</ListItem>
                            </ListUl>
                            <ListUl>
                                <ListGroupItem>Group 2</ListGroupItem>
                                <ListItem>List item 2.1</ListItem>
                                <ListItem>List item 2.2</ListItem>
                                <ListItem>List item 2.3</ListItem>
                            </ListUl>
                        </ListContent>
                    </List>
                </Popup>
            </section>

        </div>
    </>
);
