import { CalendarInfiniteWeekNumber } from '../index';

export default () => (
    <div id="test-area" className="k-d-grid k-grid-cols-2">
        <section>
            <div>infinite calendar month body</div>
            <CalendarInfiniteWeekNumber size="medium" />
        </section>

        <section>
            <div>infinite calendar month body without navigation bar</div>
            <CalendarInfiniteWeekNumber size="medium" showNavigation={false} />
        </section>
    </div>
);
