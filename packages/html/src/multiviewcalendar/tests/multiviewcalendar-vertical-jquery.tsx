import { MultiViewCalendar } from '../../multiviewcalendar';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div>Month View</div>
                <MultiViewCalendar calendarView="month" showCalendarCaption orientation="vertical"></MultiViewCalendar>
            </section>

            <section>
                <div>Year View</div>
                <MultiViewCalendar calendarView="year" calendarHeaderText="2021 - 2022" showCalendarCaption orientation="vertical"></MultiViewCalendar>
            </section>

        </div>
    </>
);
