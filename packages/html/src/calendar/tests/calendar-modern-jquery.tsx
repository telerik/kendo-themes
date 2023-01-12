import React from 'react';
import ReactDOM from 'react-dom/client';
import { Calendar } from '../../calendar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>jquery modern month</span>
            <span>jquery modern weekdays</span>
            <span>jquery modern week number with selected range</span>

            <section>
                <Calendar calendarView="month" showOtherMonth></Calendar>
            </section>
            <section>
                <Calendar calendarView="month" showOtherMonth showWeek></Calendar>
            </section>
            <section>
                <Calendar className="k-calendar-range" calendarView="month" showOtherMonth showWeek selectedRange></Calendar>
            </section>

            <span>jquery modern year</span>
            <span>jquery modern decade</span>
            <span>jquery modern century</span>

            <section>
                <Calendar calendarView="year" calendarHeaderText="2019"></Calendar>
            </section>

            <section>
                <Calendar calendarView="decade" calendarHeaderText="2020 - 2029"></Calendar>
            </section>

            <section>
                <Calendar calendarView="century" calendarHeaderText="2000 - 2099"></Calendar>
            </section>
        </div>

    </>
);
