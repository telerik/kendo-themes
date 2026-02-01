import { MultiViewCalendar } from "..";
import { CalendarTable, CalendarTableRow, CalendarCell } from "../../calendar";

export const MultiViewCalendarYear = ({ showCaptions, activeCellId, titleId, ...props }: any) => (
    <MultiViewCalendar calendarView="year" calendarTitleText="2021" activeCellId={activeCellId} titleId={titleId}
        children={
            <>
                <CalendarTable multiView calendarCaption={showCaptions && "2021"}>
                    <CalendarTableRow multiView>
                        <CalendarCell text="Jan" ariaLabel="January" multiView />
                        <CalendarCell text="Feb" ariaLabel="February" multiView />
                        <CalendarCell text="Mar" ariaLabel="March" multiView />
                        <CalendarCell text="Apr" ariaLabel="April" multiView />
                    </CalendarTableRow>
                    <CalendarTableRow multiView>
                        <CalendarCell text="May" ariaLabel="May" multiView />
                        <CalendarCell text="Jun" ariaLabel="June" multiView />
                        <CalendarCell text="Jul" ariaLabel="July" multiView />
                        <CalendarCell text="Au" ariaLabel="August" multiView />
                    </CalendarTableRow>
                    <CalendarTableRow multiView>
                        <CalendarCell text="Sep" ariaLabel="September" multiView />
                        <CalendarCell text="Oct" ariaLabel="October" today id={activeCellId} focus={!!activeCellId} multiView />
                        <CalendarCell text="Nov" ariaLabel="November" multiView />
                        <CalendarCell text="Dec" ariaLabel="December" multiView />
                    </CalendarTableRow>
                </CalendarTable>
                <CalendarTable multiView calendarCaption={showCaptions && "2022"}>
                    <CalendarTableRow multiView>
                        <CalendarCell text="Jan" ariaLabel="January" multiView />
                        <CalendarCell text="Feb" ariaLabel="February" multiView />
                        <CalendarCell text="Mar" ariaLabel="March" multiView />
                        <CalendarCell text="Apr" ariaLabel="April" multiView />
                    </CalendarTableRow>
                    <CalendarTableRow multiView>
                        <CalendarCell text="May" ariaLabel="May" multiView />
                        <CalendarCell text="Jun" ariaLabel="June" multiView />
                        <CalendarCell text="Jul" ariaLabel="July" multiView />
                        <CalendarCell text="Au" ariaLabel="August" multiView />
                    </CalendarTableRow>
                    <CalendarTableRow multiView>
                        <CalendarCell text="Sep" ariaLabel="September" multiView />
                        <CalendarCell text="Oct" ariaLabel="October" multiView />
                        <CalendarCell text="Nov" ariaLabel="November" multiView />
                        <CalendarCell text="Dec" ariaLabel="December" multiView />
                    </CalendarTableRow>
                </CalendarTable>
            </>
        }
        {...props}
    />
);
