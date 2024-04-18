import { MultiViewCalendarNormal, MultiViewCalendarYear, MultiViewCalendarDecade, MultiViewCalendarCentury, MultiViewCalendarWithWeeks } from '../../multiviewcalendar';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <span>Month View</span>
                <MultiViewCalendarNormal/>
            </section>

            <section>
                <span>Month View with Week Numbers</span>
                <MultiViewCalendarWithWeeks calendarTitleText="October 2021 - November 2021"/>
            </section>

            <section>
                <span>Year View</span>
                <MultiViewCalendarYear/>
            </section>

            <section>
                <span>Decade View</span>
                <MultiViewCalendarDecade/>
            </section>

            <section>
                <span>Century View</span>
                <MultiViewCalendarCentury/>
            </section>

            <section>
                <span>With Footer</span>
                <MultiViewCalendarNormal showCalendarFooter/>
            </section>

        </div>
    </>
);
