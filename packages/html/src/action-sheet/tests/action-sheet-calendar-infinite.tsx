import { ActionSheet, ActionSheetHeader } from '..';
import { Button } from '../../button';
import { CalendarInfiniteNormal } from '../../calendar';


const styles = `
    #test-area {
        --kendo-actionsheet-height: 400px;
        --kendo-actionsheet-max-height: 400px;
    }
    #test-area> section {
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
                <ActionSheet adaptive={true}
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Select date" />

                    }>
                    <CalendarInfiniteNormal size="large" showNavigation={false} />
                </ActionSheet>
            </section>

            <section>
                <ActionSheet adaptive={true} fullscreen={true}
                    header={
                        <ActionSheetHeader actionsEnd={<Button icon="x" size="large" fillMode="flat" />} title="Select date" />
                    }>
                    <CalendarInfiniteNormal size="large" showNavigation={false} />
                </ActionSheet>
            </section>
        </div>
    </>
);
