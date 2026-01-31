import { MultiViewCalendarNormal, MultiViewCalendarYear, MultiViewCalendarDecade, MultiViewCalendarCentury, MultiViewCalendarWithWeeks } from '../../multiviewcalendar';

const style = `
    #test-area {
        max-width: 1240px;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <section>
                <span>Month View</span>
                <MultiViewCalendarNormal id="vertical-1" activeCellId="vertical-1-active" titleId="vertical-1-title" orientation="vertical"/>
            </section>

            <section>
                <span>Month View with Week Numbers</span>
                <MultiViewCalendarWithWeeks id="vertical-2" activeCellId="vertical-2-active" titleId="vertical-2-title" orientation="vertical" calendarTitleText="October 2021 - November 2021"/>
            </section>

            <section>
                <span>Year View</span>
                <MultiViewCalendarYear id="vertical-3" activeCellId="vertical-3-active" titleId="vertical-3-title" orientation="vertical"/>
            </section>

            <section>
                <span>Decade View</span>
                <MultiViewCalendarDecade id="vertical-4" activeCellId="vertical-4-active" titleId="vertical-4-title" orientation="vertical"/>
            </section>

            <section>
                <span>Century View</span>
                <MultiViewCalendarCentury id="vertical-5" activeCellId="vertical-5-active" titleId="vertical-5-title" orientation="vertical"/>
            </section>

        </div>
    </>
);
