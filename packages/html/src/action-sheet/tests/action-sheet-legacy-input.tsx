import { ActionSheet, ActionSheetHeader } from '../../action-sheet';
import { Button } from '../../button';
import { List, ListContent, ListItem, ListCustomValue } from '../../list';

const styles = `
    #test-area {
        --kendo-actionsheet-height: 500px;
        --kendo-actionsheet-max-height: 500px;
    }
    #test-area > section {
        height: 600px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

const sheet = (id: string, fullscreen: boolean) => (
    <ActionSheet id={id} adaptive={true} fullscreen={fullscreen}
        header={
            <ActionSheetHeader
                actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" aria-label="Apply selection" />}
                input={true}
                inputValue="Value"
                inputPlaceholder="Placeholder"
                title="Label"
            />
        }
    >
        <div className="k-list-container">
            <List size="large" customValue={<ListCustomValue text={`Use "Value"`} />}>
                <ListContent aria-label="Options">
                    <ListItem text="List item" />
                    <ListItem text="List item" />
                    <ListItem text="List item" />
                </ListContent>
            </List>
        </div>
    </ActionSheet>
);

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>partial</span>
            <span>full screen</span>
            <section>{sheet('actionsheet-legacy-input-1', false)}</section>
            <section>{sheet('actionsheet-legacy-input-2', true)}</section>
        </div>
    </>
);
