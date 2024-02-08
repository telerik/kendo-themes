import { MultiViewCalendarNormal, MultiViewCalendarYear } from '../../multiviewcalendar';


export default () => (
    <>
        <div id="test-area" className="k-d-grid">

            <span>Month View</span>
            <section>
                <MultiViewCalendarNormal showOtherMonth calendarCaption="October 2021"/>
            </section>

            <span>Year View</span>
            <section>
                <MultiViewCalendarYear calendarCaption="2022" calendarHeaderText="2021 - 2022"/>
            </section>

        </div>
    </>
);
