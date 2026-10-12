import { CalendarInfiniteNormal, CalendarInfiniteWeekNumber } from '../index';

export default () => (
    <div id="test-area" className="k-d-grid k-grid-cols-2">
        <section>
            <div className="k-mb-2">infinite calendar month body</div>
            <CalendarInfiniteWeekNumber size="medium" />
        </section>

        <section>
            <div className="k-mb-2">infinite calendar month body without navigation bar</div>
            <CalendarInfiniteWeekNumber size="medium" showNavigation={false} />
        </section>

        <section>
            <div className="k-mb-2">
                without week numbers
                <br />
                infinite calendar month body
            </div>
            <CalendarInfiniteNormal size="medium" />
        </section>

        <section>
            <div className="k-mb-2">
                without week numbers
                <br />
                infinite calendar month body without navigation bar
            </div>
            <CalendarInfiniteNormal size="medium" showNavigation={false} />
        </section>
    </div>
);
