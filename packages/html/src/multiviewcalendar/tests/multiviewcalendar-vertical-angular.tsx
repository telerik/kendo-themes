import React from 'react';
import ReactDOM from 'react-dom/client';
import { MultiViewCalendar } from '../../multiviewcalendar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div>Month View</div>
                <MultiViewCalendar calendarView="month" showOtherMonth showCalendarCaption orientation="vertical"></MultiViewCalendar>
            </section>

            <section>
                <div>Year View</div>
                <MultiViewCalendar calendarView="year" calendarHeaderText="2021 - 2022" showCalendarCaption orientation="vertical"></MultiViewCalendar>
            </section>

        </div>
    </>
);
