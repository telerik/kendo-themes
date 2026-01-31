import { CalendarCentury, CalendarDecade, CalendarNormal, CalendarWithWeeks, CalendarYear } from '..';

const styles = `
    #test-area {
        max-width: 1240px;
    }
    .wrapper {
        display: flex;
        gap: 8px;
    }
`;


export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>modern calendar month</span>
            <span>modern calendar week number</span>
            <span>modern calendar week number with footer</span>

            <section>
                <CalendarNormal showOtherMonth={true} titleId="calendar-1-title" activeCellId="calendar-1-active" />
            </section>

            <section>
                <CalendarWithWeeks showOtherMonth titleId="calendar-2-title" activeCellId="calendar-2-active" />
            </section>

            <section>
                <CalendarWithWeeks showOtherMonth showCalendarFooter titleId="calendar-3-title" activeCellId="calendar-3-active" />
            </section>

            <span>modern calendar year</span>
            <span>modern calendar decade</span>
            <span>modern calendar century</span>

            <section>
                <CalendarYear titleId="calendar-4-title" activeCellId="calendar-4-active" />
            </section>

            <section>
                <CalendarDecade titleId="calendar-5-title" activeCellId="calendar-5-active" />
            </section>

            <section>
                <CalendarCentury titleId="calendar-6-title" activeCellId="calendar-6-active" />
            </section>

        </div>
    </>
);
