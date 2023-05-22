import { ActionSheet, ActionSheetHeader } from '../../action-sheet';
import { MultiViewCalendar } from '../../multiviewcalendar';


const styles = `
    #test-area {
        --kendo-actionsheet-height: 400px;
        --kendo-actionsheet-max-height: 400px;
    }
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
                <ActionSheet adaptive={true}>
                    <ActionSheetHeader title="DateRangePicker label" className="k-text-center" actions={[ "x" ]} />

                    <div className="k-scrollable-wrap">
                        <MultiViewCalendar size="large" calendarView="month" orientation="vertical" showCalendarCaption />
                    </div>
                </ActionSheet>
            </section>

            <section>
                <ActionSheet adaptive={true} fullscreen={true}>
                    <ActionSheetHeader title="Dropdownlist label" className="k-text-center" actions={[ "x" ]} />

                    <div className="k-scrollable-wrap">
                        <MultiViewCalendar size="large" calendarView="month" orientation="vertical" showCalendarCaption />
                    </div>
                </ActionSheet>
            </section>
        </div>

    </>
);
