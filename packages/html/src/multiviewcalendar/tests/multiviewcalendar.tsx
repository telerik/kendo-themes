import { MultiViewCalendarNormal, MultiViewCalendarYear, MultiViewCalendarDecade, MultiViewCalendarCentury, MultiViewCalendarWithWeeks } from '../../multiviewcalendar';

const styles = `
    #test-area {
        max-width: 1240px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2 k-gap-4">

            <section>
                <div>Month View</div>
                <MultiViewCalendarNormal/>
            </section>

            <section>
                <div>Month View with Week Numbers</div>
                <MultiViewCalendarWithWeeks calendarTitleText="October 2021 - November 2021"/>
            </section>

            <section>
                <div>Year View</div>
                <MultiViewCalendarYear/>
            </section>

            <section>
                <div>Decade View</div>
                <MultiViewCalendarDecade/>
            </section>

            <section>
                <div>Century View</div>
                <MultiViewCalendarCentury/>
            </section>

            <section>
                <div>With Footer</div>
                <MultiViewCalendarNormal showCalendarFooter/>
            </section>

        </div>
    </>
);
