import React from 'react';
import ReactDOM from 'react-dom/client';
import { Calendar } from '../../calendar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>angular modern month</span>
            <span>angular modern week number</span>
            <span></span>

            <section>
                <Calendar calendarView="month" showOtherMonth></Calendar>
            </section>

            <section>
                <Calendar calendarView="month" showOtherMonth showWeek></Calendar>
            </section>

            <section></section>

            <span>angular modern year</span>
            <span>angular modern decade</span>
            <span>angular modern century</span>

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
