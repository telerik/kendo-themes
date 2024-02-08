import { MultiViewCalendarDecade, MultiViewCalendarNormal, MultiViewCalendarYear } from '../../multiviewcalendar';


export default () => (
    <>
        <div id="test-area" className="k-d-grid">

            <span>Month View</span>
            <section>
                <MultiViewCalendarNormal calendarCaption="October 2021" showTableHead showCalendarFooter />
            </section>

            <span>Year View</span>
            <section>
                <MultiViewCalendarYear calendarCaption="2022" calendarHeaderText="2018 - 2019" showCalendarFooter/>
            </section>

            <span>Decade View</span>
            <section>
                <MultiViewCalendarDecade calendarCaption="2020 - 2029" calendarHeaderText="2020 - 2039" showCalendarFooter />
            </section>
        </div>
    </>
);
