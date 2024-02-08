import { CalendarCentury, CalendarDecade, CalendarNormal, CalendarWithWeeks, CalendarYear } from '../../calendar';


export default () => (
    <>
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
