import { List } from '../../list/list.spec';
import { ListWithGrouping } from '../../list/templates/list-grouping';
import { VirtualListWithGrouping } from '../../list/templates/list-virtualization-grouping';
import { ListItem } from '../../list/list-item.spec';
import { ListGroupItem } from '../../list/list-group-item';
import { ListContent } from '../../list/list-content';
import { ListUl } from '../../list/list-ul';

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

            <span>Grouping with sticky header</span>
            <span>Virtual grouping with sticky header</span>
            <span>Grouping with sticky header (rtl)</span>
            <span>Virtual grouping with sticky header (rtl)</span>

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


            <span>Grouping</span>
            <span>Virtual grouping</span>
            <span>Grouping (rtl)</span>
            <span>Virtual grouping (rtl)</span>


            <section>
                <List>
                    <ListContent grouping>
                        <ListUl>
                            <ListGroupItem>Group 1</ListGroupItem>
                            <ListItem>List item 1.1</ListItem>
                            <ListItem>List item 1.2</ListItem>
                        </ListUl>
                        <ListUl>
                            <ListGroupItem>Group 2</ListGroupItem>
                            <ListItem>List item 2.1</ListItem>
                            <ListItem>List item 2.2</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            </section>

                       <section>
                <List virtualization>
                    <ListContent grouping virtualization>
                        <ListUl>
                            <ListGroupItem>Group 1</ListGroupItem>
                            <ListItem>List item 1.1</ListItem>
                            <ListItem>List item 1.2</ListItem>
                        </ListUl>
                        <ListUl>
                            <ListGroupItem>Group 2</ListGroupItem>
                            <ListItem>List item 2.1</ListItem>
                            <ListItem>List item 2.2</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            </section>

            <section dir="rtl">
                <List>
                    <ListContent grouping>
                        <ListUl>
                            <ListGroupItem>Group 1</ListGroupItem>
                            <ListItem>List item 1.1</ListItem>
                            <ListItem>List item 1.2</ListItem>
                        </ListUl>
                        <ListUl>
                            <ListGroupItem>Group 2</ListGroupItem>
                            <ListItem>List item 2.1</ListItem>
                            <ListItem>List item 2.2</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            </section>

            <section dir="rtl">
                <List virtualization>
                    <ListContent grouping virtualization>
                        <ListUl>
                            <ListGroupItem>Group 1</ListGroupItem>
                            <ListItem>List item 1.1</ListItem>
                            <ListItem>List item 1.2</ListItem>
                        </ListUl>
                        <ListUl>
                            <ListGroupItem>Group 2</ListGroupItem>
                            <ListItem>List item 2.1</ListItem>
                            <ListItem>List item 2.2</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            </section>


            <span>Group with icon</span>
            <span>Virtual grouping with icon</span>
            <span>Group with icon (rtl)</span>
            <span>Virtual grouping with icon (rtl)</span>

            <section>
                <List>
                    <ListContent grouping>
                        <ListUl>
                            <ListGroupItem>Group 1</ListGroupItem>
                            <ListItem>List item 1.1</ListItem>
                            <ListItem>List item 1.2</ListItem>
                        </ListUl>
                        <ListUl>
                            <ListGroupItem groupIconName="gear">Group 2</ListGroupItem>
                            <ListItem>List item 2.1</ListItem>
                            <ListItem>List item 2.2</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            </section>

            <section>
                <List virtualization>
                    <ListContent grouping virtualization>
                        <ListUl>
                            <ListGroupItem>Group 1</ListGroupItem>
                            <ListItem>List item 1.1</ListItem>
                            <ListItem>List item 1.2</ListItem>
                        </ListUl>
                        <ListUl>
                            <ListGroupItem groupIconName="gear">Group 2</ListGroupItem>
                            <ListItem>List item 2.1</ListItem>
                            <ListItem>List item 2.2</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            </section>

            <section dir="rtl">
                <List>
                    <ListContent grouping>
                        <ListUl>
                            <ListGroupItem>Group 1</ListGroupItem>
                            <ListItem>List item 1.1</ListItem>
                            <ListItem>List item 1.2</ListItem>
                        </ListUl>
                        <ListUl>
                            <ListGroupItem groupIconName="gear">Group 2</ListGroupItem>
                            <ListItem>List item 2.1</ListItem>
                            <ListItem>List item 2.2</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            </section>

            <section dir="rtl">
                <List virtualization>
                    <ListContent grouping virtualization>
                        <ListUl>
                            <ListGroupItem>Group 1</ListGroupItem>
                            <ListItem>List item 1.1</ListItem>
                            <ListItem>List item 1.2</ListItem>
                        </ListUl>
                        <ListUl>
                            <ListGroupItem groupIconName="gear">Group 2</ListGroupItem>
                            <ListItem>List item 2.1</ListItem>
                            <ListItem>List item 2.2</ListItem>
                        </ListUl>
                    </ListContent>
                </List>
            </section>
        </div>
    </>
);
