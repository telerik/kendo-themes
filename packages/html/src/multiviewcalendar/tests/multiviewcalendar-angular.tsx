import ReactDOM from 'react-dom/client';
import { MultiViewCalendar } from '../../multiviewcalendar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">

            <span>Month View</span>
            <section>
                <MultiViewCalendar calendarView="month" showOtherMonth showCalendarCaption></MultiViewCalendar>
            </section>

            <span>Year View</span>
            <section>
                <MultiViewCalendar calendarView="year" calendarHeaderText="2021 - 2022" showCalendarCaption></MultiViewCalendar>
            </section>

        </div>
    </>
);
