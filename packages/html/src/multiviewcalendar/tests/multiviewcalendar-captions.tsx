import { MultiViewCalendarNormal, MultiViewCalendarYear, MultiViewCalendarDecade, MultiViewCalendarCentury, MultiViewCalendarWithWeeks } from '../../multiviewcalendar';

const styles = `
    #test-area {
        max-width: 1240px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2 k-gap-4">

            <section>
                <div>Month View</div>
                <MultiViewCalendarNormal id="captions-1" activeCellId="captions-1-active" titleId="captions-1-title" showCaptions />
            </section>

            <section>
                <div>Month View with Week Numbers</div>
                <MultiViewCalendarWithWeeks id="captions-2" activeCellId="captions-2-active" titleId="captions-2-title" showCaptions  calendarTitleText="October 2021 - November 2021"/>
            </section>

            <section>
                <div>Year View</div>
                <MultiViewCalendarYear id="captions-3" activeCellId="captions-3-active" titleId="captions-3-title" showCaptions />
            </section>

            <section>
                <div>Decade View</div>
                <MultiViewCalendarDecade id="captions-4" activeCellId="captions-4-active" titleId="captions-4-title" showCaptions />
            </section>

            <section>
                <div>Century View</div>
                <MultiViewCalendarCentury id="captions-5" activeCellId="captions-5-active" titleId="captions-5-title" showCaptions />
            </section>

            <section>
                <div>With Footer</div>
                <MultiViewCalendarNormal id="captions-6" activeCellId="captions-6-active" titleId="captions-6-title" showCalendarFooter showCaptions />
            </section>

        </div>
    </>
);
