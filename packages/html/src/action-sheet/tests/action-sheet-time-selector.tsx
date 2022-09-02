import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { TimeSelector } from '../../time-selector';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

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

root.render(
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
                    <TimeSelector size="large" />
                    <ActionSheetFooter actions={[ 'Cancel', '!Set' ]} />
                </ActionSheet>
            </section>

            <section>
                <ActionSheet adaptive={true} fullscreen={true}>
                    <ActionSheetHeader actions={[ 'x' ]}>
                        <div className="k-text-center">Select time</div>
                    </ActionSheetHeader>
                    <TimeSelector size="large" />
                    <ActionSheetFooter actions={[ 'Cancel', '!Set' ]} />
                </ActionSheet>
            </section>
        </div>
    </>
);
