import ReactDOM from 'react-dom/client';
import { Calendar } from '../../calendar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <section>
                <Calendar calendarView="month" size="small"></Calendar>
            </section>
            <section>
                <Calendar calendarView="month" showOtherMonth size="medium"></Calendar>
            </section>
            <section>
                <Calendar calendarView="month" showOtherMonth showWeek size="large"></Calendar>
            </section>

            <section>
                <Calendar calendarView="year" calendarHeaderText="2019" size="small"></Calendar>
            </section>
            <section>
                <Calendar calendarView="decade" calendarHeaderText="2020 - 2029" size="medium"></Calendar>
            </section>
            <section>
                <Calendar calendarView="century" calendarHeaderText="2000 - 2099" size="large"></Calendar>
            </section>
        </div>

    </>
);
