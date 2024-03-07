import { CalendarCentury, CalendarDecade, CalendarNormal, CalendarWithWeeks, CalendarYear } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>modern calendar month</span>
            <span>modern calendar week number</span>
            <span>modern calendar week number with footer</span>

            <section>
                <CalendarNormal showOtherMonth={true} />
            </section>

            <section>
                <CalendarWithWeeks showOtherMonth/>
            </section>

            <section>
                <CalendarWithWeeks showOtherMonth showCalendarFooter/>
            </section>

            <span>modern calendar year</span>
            <span>modern calendar decade</span>
            <span>modern calendar century</span>

            <section>
                <CalendarYear />
            </section>

            <section>
                <CalendarDecade />
            </section>

            <section>
                <CalendarCentury />
            </section>

        </div>
    </>
);
