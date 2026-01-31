import { CalendarCentury, CalendarDecade, CalendarNormal, CalendarWithWeeks, CalendarYear } from '../../calendar';

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
                <CalendarNormal size="small" titleId="size-1-title" activeCellId="size-1-active" />
            </section>
            <section>
                <CalendarNormal size="medium" showOtherMonth titleId="size-2-title" activeCellId="size-2-active" />
            </section>
            <section>
                <CalendarWithWeeks size="large" showOtherMonth titleId="size-3-title" activeCellId="size-3-active" />
            </section>

            <section>
                <CalendarYear size="small" titleId="size-4-title" activeCellId="size-4-active" />
            </section>

            <section>
                <CalendarDecade titleId="size-5-title" activeCellId="size-5-active" />
            </section>

            <section>
                <CalendarCentury size="large" titleId="size-6-title" activeCellId="size-6-active" />
            </section>
        </div>

    </>
);
