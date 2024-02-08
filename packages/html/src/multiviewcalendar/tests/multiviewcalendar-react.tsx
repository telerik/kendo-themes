import { MultiViewCalendarNormal, MultiViewCalendarWithWeeks, MultiViewCalendarYear } from '../../multiviewcalendar';


export default () => (
    <>
        <div id="test-area" className="k-d-grid">

            <span>Month View</span>
            <section>
                <MultiViewCalendarNormal />
            </section>

            <span>Month View with Week Numbers</span>
            <section>
                <MultiViewCalendarWithWeeks showOtherMonth />
            </section>

            <span>Year View</span>
            <section>
                <MultiViewCalendarYear calendarHeaderText="2021 - 2022"/>
            </section>

        </div>
    </>
);
