import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { Button } from '../../button';
import { List, ListGroup, ListItem } from '../../list';


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
                            <Button text="Cancel" size="large" themeColor="base" />
                        </ActionSheetFooter>
                    }
                >
                    <div className="k-list-container">
                        <List size="large">
                            <ListItem text="List item" />
                            <ListItem text="Hover" hover />
                            <ListItem text="Focus" focus />
                            <ListItem text="Selected" selected />
                            <ListItem text="Hover selected" hover selected />
                            <ListItem text="Disabled" disabled />
                            <ListItem text="List item with very long text, that spans on multiple lines" />
                            <ListItem text="Checkbox" showCheckbox />
                            <ListItem text="Icon" showIcon iconName="gear" />
                            <ListItem text="Checkbox icon" showCheckbox showIcon iconName="gear" />
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
                            <Button text="Cancel" size="large" themeColor="base" />
                        </ActionSheetFooter>
                    }
                >
                    <div className="k-list-container">
                        <List size="large">
                            <ListItem text="List item" />
                            <ListItem text="Hover" hover />
                            <ListItem text="Focus" focus />
                            <ListItem text="Selected" selected />
                            <ListItem text="Hover selected" hover selected />
                            <ListItem text="Disabled" disabled />
                            <ListItem text="List item with very long text, that spans on multiple lines" />
                            <ListItem text="Checkbox" showCheckbox />
                            <ListItem text="Icon" showIcon iconName="gear" />
                            <ListItem text="Checkbox icon" showCheckbox showIcon iconName="gear" />
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
                            <Button text="Cancel" size="large" themeColor="base" />
                        </ActionSheetFooter>
                    }
                >
                    <div className="k-list-container">
                        <List size="large">
                            <ListGroup label="Group 1" root>
                                <ListItem text="List item 1.1" />
                                <ListItem text="List item 1.2" />
                                <ListItem text="List item 1.3" />
                            </ListGroup>
                            <ListGroup label="Group 2">
                                <ListItem text="List item 2.1" />
                                <ListItem text="List item 2.2" />
                                <ListItem text="List item 2.3" />
                            </ListGroup>
                            <ListGroup label="Group 3">
                                <ListItem text="List item 3.1" />
                                <ListItem text="List item 3.2" />
                                <ListItem text="List item 3.3" />
                            </ListGroup>
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
                            <Button text="Cancel" size="large" themeColor="base" />
                        </ActionSheetFooter>
                    }
                >
                    <div className="k-list-container">
                        <List size="large">
                            <ListGroup label="Group 1" root>
                                <ListItem text="List item 1.1" />
                                <ListItem text="List item 1.2" />
                                <ListItem text="List item 1.3" />
                            </ListGroup>
                            <ListGroup label="Group 2">
                                <ListItem text="List item 2.1" />
                                <ListItem text="List item 2.2" />
                                <ListItem text="List item 2.3" />
                            </ListGroup>
                            <ListGroup label="Group 3">
                                <ListItem text="List item 3.1" />
                                <ListItem text="List item 3.2" />
                                <ListItem text="List item 3.3" />
                            </ListGroup>
                        </List>
                    </div>
                </ActionSheet>
            </section>
        </div>
    </>
);
