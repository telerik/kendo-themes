import { CalendarCentury } from '../templates/calendar-century';
import { CalendarDecade } from '../templates/calendar-decade';
import { CalendarNormal } from '../templates/calendar-normal';
import { CalendarWithWeeks } from '../templates/calendar-with-weeks';
import { CalendarYear } from '../templates/calendar-year';

const styles = `
    #test-area {
        max-width: 1240px;
        grid-template-columns: 330px 390px 460px;
        padding: 10px;
    }
`;


export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <section>
                <CalendarNormal size="small"/>
            </section>
            <section>
                <CalendarNormal size="medium" showOtherMonth/>
            </section>
            <section>
                <CalendarWithWeeks size="large" showOtherMonth/>
            </section>

            <section>
                <CalendarYear size="small"/>
            </section>

            <section>
                <CalendarDecade />
            </section>

            <section>
                <CalendarCentury size= "large"/>
            </section>
        </div>

    </>
);
