import { ActionSheet, ActionSheetHeader, ActionSheetFooter } from '../../action-sheet';
import { Calendar } from '../../calendar';


const styles = `
    #test-area > section {
        height: 600px;
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
                <ActionSheet className="k-adaptive-actionsheet">
                    <ActionSheetHeader className="k-text-center" title="Select dates" subTitle="DD / MM / YY" actions={[ 'x' ]} />
                    <Calendar size="large"></Calendar>
                    <ActionSheetFooter actions={[ 'Cancel', '!Select Date' ]} />
                </ActionSheet>
            </section>

            <section>
                <ActionSheet fullscreen={true} className="k-adaptive-actionsheet">
                    <ActionSheetHeader className="k-text-center" title="Select dates" subTitle="DD / MM / YY" actions={[ 'x' ]} />
                    <Calendar size="large"></Calendar>
                    <ActionSheetFooter actions={[ 'Cancel', '!Select Date' ]} />
                </ActionSheet>
            </section>
        </div>
    </>
);
