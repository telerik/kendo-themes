import { MultiViewCalendarNormal, MultiViewCalendarYear } from '../../multiviewcalendar';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div>Month View</div>
                <MultiViewCalendarNormal orientation="vertical" showTableHead />
            </section>

            <section>
                <div>Year View</div>
                <MultiViewCalendarYear orientation="vertical" calendarHeaderText="2021 - 2022" />
            </section>

        </div>
    </>
);
