import { CalendarInfiniteTable, CalendarTableHead, CalendarHeader } from '.';
import { classNames } from '../misc';

const className = `k-calendar-view`;

export type KendoCalendarInfiniteViewProps = {
    orientation?: 'vertical' | 'horizontal',
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    headerText?: string;
    showWeekdays?: boolean;
    showWeekNumbers?: boolean;
    showNavigationButtons?: boolean;
    weekdayCellsText?: string[];
};

const defaultProps = {
    orientation: 'vertical',
    calendarView: 'month',
    headerText: 'April 2018',
    showWeekdays: true,
    showNavigationButtons: false
};


export const CalendarInfiniteView = (
    props: KendoCalendarInfiniteViewProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation = defaultProps.orientation,
        calendarView = defaultProps.calendarView,
        headerText = defaultProps.headerText,
        showWeekdays = defaultProps.showWeekdays,
        showWeekNumbers,
        showNavigationButtons = defaultProps.showNavigationButtons,
        weekdayCellsText,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                className,
                `k-calendar-${calendarView}view`,
                props.className,
                {
                    'k-hstack': orientation === 'horizontal',
                    'k-vstack': orientation === 'vertical',
                }
            )}>
            <CalendarHeader
                showNavigationButtons={showNavigationButtons}
                calendarHeaderText={headerText}
                orientation="horizontal"
            />
            {showWeekdays &&
            <CalendarInfiniteTable className="k-calendar-weekdays" >
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <CalendarTableHead cellsText={weekdayCellsText} showWeek={showWeekNumbers} />
            </CalendarInfiniteTable>
            }
            <div className="k-content k-scrollable">
                <CalendarInfiniteTable>
                    {props.children}
                </CalendarInfiniteTable>
                <div className="k-scrollable-placeholder" style={{ height: "1000px" }}></div>
            </div>
        </div>
    );
};
