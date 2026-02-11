import { ActionSheet } from '../../action-sheet/action-sheet.spec';
import { ActionSheetHeader } from '../../action-sheet/actionsheet-header';
import { ActionSheetFooter } from '../../action-sheet/actionsheet-footer';
import { Button } from '../../button/button.spec';
import { List } from '../../list/list.spec';
import { ListContent } from '../../list/list-content';
import { ListGroupItem } from '../../list/list-group-item';
import { ListItem } from '../../list/list-item.spec';
import { ListUl } from '../../list/list-ul';


const styles = `
    #test-area {
        --kendo-actionsheet-height: 400px;
        --kendo-actionsheet-max-height: 400px;
    }
    #test-area > section {
        height: 600px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>partial</span>
            <span>full screen</span>

            <section>
                <ActionSheet adaptive={true}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="x" size="large" fillMode="flat" />}
                            filter={true}
                            title="Select Item">
                        </ActionSheetHeader>
                    }
                    footer={
                        <ActionSheetFooter >
                            <Button text="Apply" size="large" themeColor="primary" />
                            <Button text="Cancel" size="large" />
                        </ActionSheetFooter>
                    }
                >
                    <div className="k-list-container">
                        <List size="large">
                            <ListContent>
                                <ListItem text="List item" />
                                <ListItem text="Hover" hover />
                                <ListItem text="Focus" focus />
                                <ListItem text="Selected" selected />
                                <ListItem text="Hover selected" hover selected />
                                <ListItem text="Disabled" disabled />
                                <ListItem text="List item with very long text, that spans on multiple lines" />
                                <ListItem text="Checkbox" showCheckbox />
                                <ListItem text="Icon" iconName="gear" />
                                <ListItem text="Checkbox icon" showCheckbox iconName="gear" />
                            </ListContent>
                        </List>
                    </div>
                </ActionSheet>
            </section>

            <section>
                <ActionSheet adaptive={true} fullscreen={true}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="x" size="large" fillMode="flat" />}
                            filter={true}
                            title="Select Item">
                        </ActionSheetHeader>
                    }
                    footer={
                        <ActionSheetFooter >
                            <Button text="Apply" size="large" themeColor="primary" />
                            <Button text="Cancel" size="large" />
                        </ActionSheetFooter>
                    }
                >
                    <div className="k-list-container">
                        <List size="large">
                            <ListContent>
                                <ListItem text="List item" />
                                <ListItem text="Hover" hover />
                                <ListItem text="Focus" focus />
                                <ListItem text="Selected" selected />
                                <ListItem text="Hover selected" hover selected />
                                <ListItem text="Disabled" disabled />
                                <ListItem text="List item with very long text, that spans on multiple lines" />
                                <ListItem text="Checkbox" showCheckbox />
                                <ListItem text="Icon" iconName="gear" />
                                <ListItem text="Checkbox icon" showCheckbox iconName="gear" />
                            </ListContent>
                        </List>
                    </div>
                </ActionSheet>
            </section>

            <section>
                <ActionSheet adaptive={true}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="x" size="large" fillMode="flat" />}
                            filter={true}
                            title="Select Item">
                        </ActionSheetHeader>
                    }
                    footer={
                        <ActionSheetFooter >
                            <Button text="Apply" size="large" themeColor="primary" />
                            <Button text="Cancel" size="large" />
                        </ActionSheetFooter>
                    }
                >
                    <div className="k-list-container">
                        <List size="large" header="Group 1">
                            <ListContent grouping>
                                <ListUl>
                                    <ListItem text="List item 1.1" />
                                    <ListItem text="List item 1.2" />
                                    <ListItem text="List item 1.3" />
                                </ListUl>
                                <ListUl>
                                    <ListGroupItem>Group 2</ListGroupItem>
                                    <ListItem text="List item 2.1" />
                                    <ListItem text="List item 2.2" />
                                    <ListItem text="List item 2.3" />
                                </ListUl>
                                <ListUl>
                                    <ListGroupItem>Group 3</ListGroupItem>
                                    <ListItem text="List item 3.1" />
                                    <ListItem text="List item 3.2" />
                                    <ListItem text="List item 3.3" />
                                </ListUl>
                            </ListContent>
                        </List>
                    </div>
                </ActionSheet>
            </section>

            <section>
                <ActionSheet adaptive={true} fullscreen={true}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="x" size="large" fillMode="flat" />}
                            filter={true}
                            title="Select Item">
                        </ActionSheetHeader>
                    }
                    footer={
                        <ActionSheetFooter >
                            <Button text="Apply" size="large" themeColor="primary" />
                            <Button text="Cancel" size="large" />
                        </ActionSheetFooter>
                    }
                >
                    <div className="k-list-container">
                        <List size="large" header="Group 1">
                            <ListContent grouping>
                                <ListUl>
                                    <ListItem text="List item 1.1" />
                                    <ListItem text="List item 1.2" />
                                    <ListItem text="List item 1.3" />
                                </ListUl>
                                <ListUl>
                                    <ListGroupItem>Group 2</ListGroupItem>
                                    <ListItem text="List item 2.1" />
                                    <ListItem text="List item 2.2" />
                                    <ListItem text="List item 2.3" />
                                </ListUl>
                                <ListUl>
                                    <ListGroupItem>Group 3</ListGroupItem>
                                    <ListItem text="List item 3.1" />
                                    <ListItem text="List item 3.2" />
                                    <ListItem text="List item 3.3" />
                                </ListUl>
                            </ListContent>
                        </List>
                    </div>
                </ActionSheet>
            </section>
        </div>
    </>
);
