import { MultiViewCalendarNormal } from "../templates/multiviewcalendar-normal";
import { MultiViewCalendarWithWeeks } from "../templates/multiviewcalendar-with-weeks";
import { MultiViewCalendarYear } from "../templates/multiviewcalendar-year";
import { MultiViewCalendarDecade } from "../templates/multiviewcalendar-decade";
import { MultiViewCalendarCentury } from "../templates/multiviewcalendar-century";

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
                <MultiViewCalendarNormal showCaptions />
            </section>

            <section>
                <div>Month View with Week Numbers</div>
                <MultiViewCalendarWithWeeks showCaptions  calendarTitleText="October 2021 - November 2021"/>
            </section>

            <section>
                <div>Year View</div>
                <MultiViewCalendarYear showCaptions />
            </section>

            <section>
                <div>Decade View</div>
                <MultiViewCalendarDecade showCaptions />
            </section>

            <section>
                <div>Century View</div>
                <MultiViewCalendarCentury showCaptions />
            </section>

            <section>
                <div>With Footer</div>
                <MultiViewCalendarNormal showCalendarFooter showCaptions />
            </section>

        </div>
    </>
);
