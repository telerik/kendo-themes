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
                <MultiViewCalendarNormal id="multiview-1" activeCellId="multiview-1-active" titleId="multiview-1-title" />
            </section>

            <section>
                <div>Month View with Week Numbers</div>
                <MultiViewCalendarWithWeeks id="multiview-2" activeCellId="multiview-2-active" titleId="multiview-2-title" calendarTitleText="October 2021 - November 2021"/>
            </section>

            <section>
                <div>Year View</div>
                <MultiViewCalendarYear id="multiview-3" activeCellId="multiview-3-active" titleId="multiview-3-title" />
            </section>

            <section>
                <div>Decade View</div>
                <MultiViewCalendarDecade id="multiview-4" activeCellId="multiview-4-active" titleId="multiview-4-title" />
            </section>

            <section>
                <div>Century View</div>
                <MultiViewCalendarCentury id="multiview-5" activeCellId="multiview-5-active" titleId="multiview-5-title" />
            </section>

            <section>
                <div>With Footer</div>
                <MultiViewCalendarNormal id="multiview-6" activeCellId="multiview-6-active" titleId="multiview-6-title" showCalendarFooter/>
            </section>

        </div>
    </>
);
