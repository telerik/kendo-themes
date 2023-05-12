import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { Button } from '../../button';
import { TimeSelector, TimeSelectorHeader } from '../../time-selector';


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

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>partial</span>
            <span>full screen</span>

            <section>
                <ActionSheet adaptive={true}>
                    <ActionSheetHeader actions={[ 'x' ]}>
                        <div className="k-text-center">Select time</div>
                    </ActionSheetHeader>
                    <TimeSelector size="large" columns={[ "HH", "mm", "ss", "tt" ]} focusedColumn="HH" header={(
                        <TimeSelectorHeader title="10:00:00 АМ">
                            <Button fillMode="flat" className="k-time-now">Now</Button>
                        </TimeSelectorHeader>
                    )}/>
                    <ActionSheetFooter actions={[ 'Cancel', '!Set' ]} />
                </ActionSheet>
            </section>

            <section>
                <ActionSheet adaptive={true} fullscreen={true}>
                    <ActionSheetHeader actions={[ 'x' ]}>
                        <div className="k-text-center">Select time</div>
                    </ActionSheetHeader>
                    <TimeSelector size="large" columns={[ "HH", "mm", "ss", "tt" ]} focusedColumn="HH" header={(
                        <TimeSelectorHeader title="10:00:00 АМ">
                            <Button fillMode="flat" className="k-time-now">Now</Button>
                        </TimeSelectorHeader>
                    )}/>
                    <ActionSheetFooter actions={[ 'Cancel', '!Set' ]} />
                </ActionSheet>
            </section>
        </div>
    </>
);
