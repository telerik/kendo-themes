import { ActionSheet } from '../../action-sheet/action-sheet.spec';
import { ActionSheetHeader } from '../../action-sheet/actionsheet-header';
import { ActionSheetFooter } from '../../action-sheet/actionsheet-footer';
import { Button } from '../../button/button.spec';
import { TimeSelector } from '../../time-selector/time-selector.spec';
import { TimeSelectorHeader } from '../../time-selector/time-selector-header';


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
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Select time" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" size="large" />
                            <Button text="Set" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <TimeSelector size="large" columns={["HH", "mm", "ss", "tt"]} focusedColumn="HH" header={(
                        <TimeSelectorHeader title="10:00:00 АМ">
                            <Button fillMode="flat" className="k-time-now">Now</Button>
                        </TimeSelectorHeader>
                    )} />
                </ActionSheet>
            </section>

            <section>
                <ActionSheet adaptive={true} fullscreen={true}
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Select time" />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" size="large" />
                            <Button text="Set" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <TimeSelector size="large" columns={["HH", "mm", "ss", "tt"]} focusedColumn="HH" header={(
                        <TimeSelectorHeader title="10:00:00 АМ">
                            <Button fillMode="flat" className="k-time-now">Now</Button>
                        </TimeSelectorHeader>
                    )} />
                </ActionSheet>
            </section>
        </div>
    </>
);
