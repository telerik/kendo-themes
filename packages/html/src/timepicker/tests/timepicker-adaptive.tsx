import ReactDOM from 'react-dom/client';
import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { Button } from '../../button';
import { TimeSelector, TimeSelectorHeader } from '../../time-selector';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

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

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>partial</span>
            <span>full screen</span>

            <section>
                <ActionSheet adaptive={true}>
                    <ActionSheetHeader
                        actions={[ 'x' ]}
                        title="Select Dates"
                        subTitle="DD / MM / YY">
                    </ActionSheetHeader>
                    <TimeSelector size="large" columns={[ "HH", "mm", "ss", "tt" ]} focusedColumn="HH" header={(
                        <TimeSelectorHeader title="10:00:00 АМ">
                            <Button fillMode="flat" className="k-time-now">Now</Button>
                        </TimeSelectorHeader>
                    )}/>
                    <ActionSheetFooter actions={[ '!Select Date' ]} />
                </ActionSheet>
            </section>
            <section>
                <ActionSheet adaptive={true} fullscreen>
                    <ActionSheetHeader
                        actions={[ 'x' ]}
                        title="Select Dates"
                        subTitle="DD / MM / YY">
                    </ActionSheetHeader>
                    <TimeSelector size="large" columns={[ "HH", "mm", "ss", "tt" ]} focusedColumn="HH" header={(
                        <TimeSelectorHeader title="10:00:00 АМ">
                            <Button fillMode="flat" className="k-time-now">Now</Button>
                        </TimeSelectorHeader>
                    )}/>
                    <ActionSheetFooter actions={[ '!Select Date' ]} />
                </ActionSheet>
            </section>
        </div>

    </>
);
