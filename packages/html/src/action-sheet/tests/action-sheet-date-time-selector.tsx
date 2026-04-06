import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { Button } from '../../button';
import { CalendarNormal } from '../../calendar';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { TimeSelector, TimeSelectorHeader } from '../../time-selector';


const styles = `
    #test-area {
        --kendo-actionsheet-height: 521px;
        --kendo-actionsheet-max-height: 521px;
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
                <ActionSheet id="actionsheet-datetime-1" adaptive={true}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="x" size="large" fillMode="flat" aria-label="Close" />}
                            title="Select Date & Time"
                            subtitle="DD / MM / YY">
                        </ActionSheetHeader>
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" size="large" />
                            <Button text="Set" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <div className="k-datetime-wrap k-date-tab">
                        <div className="k-datetime-buttongroup">
                            <SegmentedControl thumbStyles={{ width: "50%" }} stretched size="large">
                                <SegmentedControlButton selected>Date</SegmentedControlButton>
                                <SegmentedControlButton>Time</SegmentedControlButton>
                            </SegmentedControl>
                        </div>
                        <div className="k-datetime-selector">
                            <div className="k-datetime-calendar-wrap">

                                <CalendarNormal size="large" showOtherMonth />
                            </div>
                            <div className="k-datetime-time-wrap">
                            </div>
                        </div>
                    </div>
                </ActionSheet>
            </section>

            <section>
                <ActionSheet id="actionsheet-datetime-2" adaptive={true} fullscreen={true}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="x" size="large" fillMode="flat" aria-label="Close" />}
                            title="Select Date & Time"
                            subtitle="DD / MM / YY">
                        </ActionSheetHeader>
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" size="large" />
                            <Button text="Set" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <div className="k-datetime-wrap k-time-tab">
                        <div className="k-datetime-buttongroup">
                            <SegmentedControl thumbStyles={{ width: "50%", left: "50%" }} stretched size="large">
                                <SegmentedControlButton>Date</SegmentedControlButton>
                                <SegmentedControlButton selected>Time</SegmentedControlButton>
                            </SegmentedControl>
                        </div>
                        <div className="k-datetime-selector">
                            <div className="k-datetime-calendar-wrap">
                            </div>
                            <div className="k-datetime-time-wrap">
                                <TimeSelector size="large" columns={["HH", "mm", "ss", "tt"]} focusedColumn="HH" header={(
                                    <TimeSelectorHeader title="10:00:00 АМ">
                                        <Button fillMode="flat" className="k-time-now">Now</Button>
                                    </TimeSelectorHeader>
                                )} />
                            </div>
                        </div>
                    </div>
                </ActionSheet>
            </section>
        </div>
    </>
);
