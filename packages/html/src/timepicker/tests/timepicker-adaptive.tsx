import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionSheet, ActionSheetFooter, ActionSheetHeader } from '../../action-sheet';
import { TimeSelector } from '../../time-selector';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-actionsheet-container {
        width: 100%;
        height: 600px;
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

                    <TimeSelector size="large"></TimeSelector>

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

                    <TimeSelector size="large"></TimeSelector>

                    <ActionSheetFooter actions={[ '!Select Date' ]} />
                </ActionSheet>
            </section>
        </div>

    </>
);
