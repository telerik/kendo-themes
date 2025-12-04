import { DropdownListGrouping } from "../templates/dropdownlist-grouping";
import { DropdownListGroupingModern } from "../templates/dropdownlist-grouping-modern";
import { DropdownListGroupingAccessible } from "../templates/dropdownlist-grouping-accessible";
import { DropdownList } from '../index';
import { List, ListAccessible, ListGroup, ListItem } from "../../list";

const styles = `
    .k-animation-container {
        position: relative;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            <span>Classic DropdownList Grouping</span>
            <span>Classic DropdownList Grouping RTL</span>
            <span>Classic DropdownList Grouping - No sticky header</span>
            <span>Classic DropdownList Grouping RTL - No sticky header</span>

            <div>
                <DropdownListGrouping placeholder="DropdownList..." />
            </div>
            <div dir="rtl">
                <DropdownListGrouping placeholder="DropdownList..." />
            </div>

            <div>
                <DropdownList placeholder="DropdownList..."
                    opened
                    popup={
                        <List>
                            <ListGroup label={"Group 1"}>
                                <ListItem>List group 1 item 1</ListItem>
                                <ListItem>List group 1 item 2</ListItem>
                                <ListItem>List group 1 item 3</ListItem>
                            </ListGroup>
                            <ListGroup label={"Group 2"}>
                                <ListItem>List group 1 item 1</ListItem>
                                <ListItem>List group 1 item 2</ListItem>
                                <ListItem>List group 1 item 3</ListItem>
                            </ListGroup>
                        </List>
                    }
                />
            </div>
            <div dir="rtl">
                <DropdownList placeholder="DropdownList..."
                    opened
                    popup={
                        <List>
                            <ListGroup label={"Group 1"}>
                                <ListItem>List group 1 item 1</ListItem>
                                <ListItem>List group 1 item 2</ListItem>
                                <ListItem>List group 1 item 3</ListItem>
                            </ListGroup>
                            <ListGroup label={"Group 2"}>
                                <ListItem>List group 1 item 1</ListItem>
                                <ListItem>List group 1 item 2</ListItem>
                                <ListItem>List group 1 item 3</ListItem>
                            </ListGroup>
                        </List>
                    }
                />
            </div>

            <span>Modern DropdownList Grouping</span>
            <span>Modern DropdownList Grouping RTL</span>
            <span>Modern DropdownList Grouping - No sticky header</span>
            <span>Modern DropdownList Grouping RTL - No sticky header</span>

            <div>
                <DropdownListGroupingModern placeholder="DropdownList..." />
            </div>
            <div dir="rtl">
                <DropdownListGroupingModern placeholder="DropdownList..." />
            </div>

            <div>
                <DropdownList placeholder="DropdownList..."
                    opened
                    popup={
                        <List>
                            <ListGroup>
                                <ListItem group>Group 1</ListItem>
                                <ListItem>List group 1 item 1</ListItem>
                                <ListItem>List group 1 item 2</ListItem>
                                <ListItem>List group 1 item 3</ListItem>
                            </ListGroup>
                            <ListGroup>
                                <ListItem group>Group 2</ListItem>
                                <ListItem>List group 1 item 1</ListItem>
                                <ListItem>List group 1 item 2</ListItem>
                                <ListItem>List group 1 item 3</ListItem>
                            </ListGroup>
                        </List>
                    }
                />
            </div>
            <div dir="rtl">
                <DropdownList placeholder="DropdownList..."
                    opened
                    popup={
                        <List>
                            <ListGroup>
                                <ListItem group>Group 1</ListItem>
                                <ListItem>List group 1 item 1</ListItem>
                                <ListItem>List group 1 item 2</ListItem>
                                <ListItem>List group 1 item 3</ListItem>
                            </ListGroup>
                            <ListGroup>
                                <ListItem group>Group 2</ListItem>
                                <ListItem>List group 1 item 1</ListItem>
                                <ListItem>List group 1 item 2</ListItem>
                                <ListItem>List group 1 item 3</ListItem>
                            </ListGroup>
                        </List>
                    }
                />
            </div>

            <span>Accessible DropdownList Grouping</span>
            <span>Accessible DropdownList Grouping RTL</span>
            <span>Accessible DropdownList Grouping - No sticky header</span>
            <span>Accessible DropdownList Grouping RTL - No sticky header</span>

            <div>
                <DropdownListGroupingAccessible placeholder="DropdownList..." />
            </div>
            <div dir="rtl">
                <DropdownListGroupingAccessible placeholder="DropdownList..." />
            </div>
             <div>
                <DropdownList placeholder="DropdownList..."
                    opened
                    popup={
                        <ListAccessible>
                            <ListGroup label={"Group 1"}>
                                <ListItem>List group 1 item 1</ListItem>
                                <ListItem>List group 1 item 2</ListItem>
                                <ListItem>List group 1 item 3</ListItem>
                            </ListGroup>
                            <ListGroup>
                                <ListItem group>Group 2</ListItem>
                                <ListItem>List group 1 item 1</ListItem>
                                <ListItem>List group 1 item 2</ListItem>
                                <ListItem>List group 1 item 3</ListItem>
                            </ListGroup>
                        </ListAccessible>
                    }
                />
            </div>
            <div dir="rtl">
                <DropdownList placeholder="DropdownList..."
                    opened
                    popup={
                        <ListAccessible>
                            <ListGroup label={"Group 1"}>
                                <ListItem>List group 1 item 1</ListItem>
                                <ListItem>List group 1 item 2</ListItem>
                                <ListItem>List group 1 item 3</ListItem>
                            </ListGroup>
                            <ListGroup>
                                <ListItem group>Group 2</ListItem>
                                <ListItem>List group 1 item 1</ListItem>
                                <ListItem>List group 1 item 2</ListItem>
                                <ListItem>List group 1 item 3</ListItem>
                            </ListGroup>
                        </ListAccessible>
                    }
                />
            </div>
        </div>
    </>
);
