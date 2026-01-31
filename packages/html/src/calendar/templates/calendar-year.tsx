import { Calendar, CalendarCell, CalendarTable, CalendarTableRow } from "..";

export const CalendarYear = ({ titleId, activeCellId, ...props }: any) => (
    <Calendar calendarView="year" calendarTitleText="2019"
        children={
            <CalendarTable titleId={titleId} ariaActivedescendant={activeCellId}>
                <CalendarTableRow>
                    <CalendarCell text="Jan" ariaLabel="January" />
                    <CalendarCell text="Feb" ariaLabel="February" />
                    <CalendarCell text="Mar" ariaLabel="March" />
                    <CalendarCell text="Apr" ariaLabel="April" />
                </CalendarTableRow>
                <CalendarTableRow>
                    <CalendarCell text="May" ariaLabel="May" />
                    <CalendarCell text="Jun" ariaLabel="June" />
                    <CalendarCell text="Jul" ariaLabel="July" />
                    <CalendarCell text="Au" ariaLabel="August" />
                </CalendarTableRow>
                <CalendarTableRow>
                    <CalendarCell text="Sep" ariaLabel="September" />
                    <CalendarCell text="Oct" today id={activeCellId} ariaLabel="October" />
                    <CalendarCell text="Nov" ariaLabel="November" />
                    <CalendarCell text="Dec" ariaLabel="December" />
                </CalendarTableRow>
            </CalendarTable>
        }
        {...props}
    />
);
