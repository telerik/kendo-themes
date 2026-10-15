import { Calendar, CalendarCell, CalendarTable, CalendarTableRow } from "..";

const chunk = <T,>(items: T[], size: number): T[][] =>
    Array.from({ length: Math.ceil(items.length / size) }, (_, i) => items.slice(i * size, i * size + size));

// October 2021 in a fixed six-week grid, starting on Sunday 26 September.
const MONTH_DAYS = [
    26, 27, 28, 29, 30, 1, 2,
    3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30,
    31, 1, 2, 3, 4, 5, 6
];
const FIRST_WEEK = 39;
const MONTHS = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
const YEARS = Array.from({ length: 27 }, (_, i) => 2009 + i);

const isOtherMonth = (index: number) => (index < 5 || index > 35);

export const CalendarRevampMonth = ({ showWeek, ...props }: any) => (
    <Calendar revamp calendarView="month" showWeek={showWeek} monthTitleText="October" yearTitleText="2021"
        children={
            <CalendarTable showTableHead showWeek={showWeek}>
                {chunk(MONTH_DAYS, 7).map((week, row) => (
                    <CalendarTableRow key={row}>
                        {showWeek && <CalendarCell text={String(FIRST_WEEK + row)} weekCell />}
                        {week.map((day, col) => {
                            const index = row * 7 + col;
                            const other = isOtherMonth(index);

                            return (
                                <CalendarCell
                                    key={index}
                                    text={String(day)}
                                    showOtherMonth={other}
                                    today={!other && day === 12}
                                    selected={!other && day === 14}
                                />
                            );
                        })}
                    </CalendarTableRow>
                ))}
            </CalendarTable>
        }
        {...props}
    />
);

export const CalendarRevampMonthSelect = (props: any) => (
    <Calendar revamp calendarView="year" expandedTitle="month" monthTitleText="October" yearTitleText="2021"
        children={
            <CalendarTable>
                {chunk(MONTHS, 3).map((months, row) => (
                    <CalendarTableRow key={row}>
                        {months.map((month) => (
                            <CalendarCell key={month} text={month} today={month === 'Oct'} selected={month === 'Oct'} />
                        ))}
                    </CalendarTableRow>
                ))}
            </CalendarTable>
        }
        {...props}
    />
);

export const CalendarRevampYearSelect = (props: any) => (
    <Calendar revamp calendarView="decade" expandedTitle="year" monthTitleText="October" yearTitleText="2021"
        children={
            <CalendarTable>
                {chunk(YEARS, 3).map((years, row) => (
                    <CalendarTableRow key={row}>
                        {years.map((year) => (
                            <CalendarCell key={year} text={String(year)} today={year === 2021} selected={year === 2021} />
                        ))}
                    </CalendarTableRow>
                ))}
            </CalendarTable>
        }
        {...props}
    />
);
