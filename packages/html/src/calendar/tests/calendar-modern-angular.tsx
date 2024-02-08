import { CalendarCentury, CalendarDecade, CalendarNormal, CalendarWithWeeks, CalendarYear } from '../../calendar';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>angular modern month</span>
            <span>angular modern week number</span>
            <span>angular modern week number with footer</span>

            <section>
                <CalendarNormal showOtherMonth />
            </section>

            <section>
                <CalendarWithWeeks showOtherMonth/>
            </section>

            <section>
                <CalendarWithWeeks showOtherMonth showCalendarFooter/>
            </section>

            <span>angular modern year</span>
            <span>angular modern decade</span>
            <span>angular modern century</span>

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
