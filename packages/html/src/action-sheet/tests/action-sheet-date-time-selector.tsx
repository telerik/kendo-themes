import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { Button } from '../../button';
import { CalendarNormal } from '../../calendar';
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
                <ActionSheet adaptive={true}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="x" size="large" fillMode="flat" />}
                            title="Select Date & Time"
                            subTitle="DD / MM / YY">
                        </ActionSheetHeader>
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" size="large" themeColor="base" />
                            <Button text="Set" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <div className="k-datetime-wrap k-date-tab">
                        <div className="k-datetime-buttongroup">
                            <div className="k-button-group k-button-group-stretched">
                                <Button className="k-group-start" size="large" selected>Date</Button>
                                <Button className="k-group-end" size="large">Time</Button>
                            </div>
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
                <ActionSheet adaptive={true} fullscreen={true}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="x" size="large" fillMode="flat" />}
                            title="Select Date & Time"
                            subTitle="DD / MM / YY">
                        </ActionSheetHeader>
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" size="large" themeColor="base" />
                            <Button text="Set" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <div className="k-datetime-wrap k-time-tab">
                        <div className="k-datetime-buttongroup">
                            <div className="k-button-group k-button-group-stretched">
                                <Button className="k-group-start" size="large">Date</Button>
                                <Button className="k-group-end" size="large" selected>Time</Button>
                            </div>
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
