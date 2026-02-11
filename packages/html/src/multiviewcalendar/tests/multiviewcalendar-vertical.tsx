import { MultiViewCalendarNormal } from "../templates/multiviewcalendar-normal";
import { MultiViewCalendarWithWeeks } from "../templates/multiviewcalendar-with-weeks";
import { MultiViewCalendarYear } from "../templates/multiviewcalendar-year";
import { MultiViewCalendarDecade } from "../templates/multiviewcalendar-decade";
import { MultiViewCalendarCentury } from "../templates/multiviewcalendar-century";

const style = `
    #test-area {
        max-width: 1240px;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <section>
                <span>Month View</span>
                <MultiViewCalendarNormal orientation="vertical"/>
            </section>

            <section>
                <span>Month View with Week Numbers</span>
                <MultiViewCalendarWithWeeks orientation="vertical" calendarTitleText="October 2021 - November 2021"/>
            </section>

            <section>
                <span>Year View</span>
                <MultiViewCalendarYear orientation="vertical"/>
            </section>

            <section>
                <span>Decade View</span>
                <MultiViewCalendarDecade orientation="vertical"/>
            </section>

            <section>
                <span>Century View</span>
                <MultiViewCalendarCentury orientation="vertical"/>
            </section>

        </div>
    </>
);
