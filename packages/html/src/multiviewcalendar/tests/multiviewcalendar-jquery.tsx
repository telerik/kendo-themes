import { MultiViewCalendar } from '../../multiviewcalendar';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <span>Month View</span>
            <section>
                <MultiViewCalendar calendarView="month" showCalendarCaption showCalendarFooter></MultiViewCalendar>
            </section>

            <span>Year View</span>
            <section>
                <MultiViewCalendar calendarView="year" showCalendarCaption calendarHeaderText="2018 - 2019" showCalendarFooter></MultiViewCalendar>
            </section>

            <span>Decade View</span>
            <section>
                <MultiViewCalendar calendarView="decade" showCalendarCaption calendarHeaderText="2020 - 2039" showCalendarFooter></MultiViewCalendar>
            </section>
        </div>
    </>
);
