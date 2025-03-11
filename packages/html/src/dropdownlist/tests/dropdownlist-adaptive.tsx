import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { Button } from '../../button';
import { List, ListItem } from '../../list';
import DropdownList from '../dropdownlist.spec';


const styles = `
    #test-area {
        --kendo-actionsheet-height: 400px;
        --kendo-actionsheet-max-height: 400px;
    }
    #test-area > section {
        height: 600px;
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
                <DropdownList />
                <ActionSheet adaptive={true}
                    header={
                        <ActionSheetHeader title="Dropdownlist label" className="k-text-center" actionsEnd={<Button icon="x" size="large" fillMode="flat" />} filter={true} />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" size="large" themeColor="base" />
                            <Button text="Select" size="large" themeColor="primary" />
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
                <DropdownList />
                <ActionSheet adaptive={true} fullscreen={true}
                    header={
                        <ActionSheetHeader title="Dropdownlist label" className="k-text-center" actionsEnd={<Button icon="x" size="large" fillMode="flat" />} filter={true} />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" size="large" themeColor="base" />
                            <Button text="Select" size="large" themeColor="primary" />
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
        </div>

    </>
);
