import { CalendarCentury, CalendarDecade, CalendarNormal, CalendarWithWeeks, CalendarYear } from '../../calendar';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>jquery modern month</span>
            <span>jquery modern week number</span>
            <span>jquery modern week number with footer</span>

            <section>
                <CalendarNormal showOtherMonth />
            </section>

            <section>
                <CalendarWithWeeks showOtherMonth/>
            </section>

            <section>
                <CalendarWithWeeks showOtherMonth showCalendarFooter/>
            </section>

            <span>jquery modern year</span>
            <span>jquery modern decade</span>
            <span>jquery modern century</span>

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
