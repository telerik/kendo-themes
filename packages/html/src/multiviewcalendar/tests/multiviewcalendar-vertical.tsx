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
                <MultiViewCalendarNormal orientation="vertical"/>
            </section>

            <section>
                <span>Month View with Week Numbers</span>
                <MultiViewCalendarWithWeeks orientation="vertical" calendarTitleText="October 2021 - November 2021"/>
            </section>

            <section>
                <span>Year View</span>
                <MultiViewCalendarYear orientation="vertical"/>
            </section>

            <section>
                <span>Decade View</span>
                <MultiViewCalendarDecade orientation="vertical"/>
            </section>

            <section>
                <span>Century View</span>
                <MultiViewCalendarCentury orientation="vertical"/>
            </section>

        </div>
    </>
);
