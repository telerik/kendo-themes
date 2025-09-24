import { CalendarHeader } from './calendar-header';
import { CalendarInfiniteTable } from './calendar-infinite-table';
import { CalendarTableHead } from './calendar-table-head';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { CALENDAR_FOLDER_NAME, CALENDAR_MODULE_NAME } from './constants';
const CALENDARINFINITEVIEW_CLASSNAME = `k-calendar-view`;

export type KendoCalendarInfiniteViewProps = {
    orientation?: 'vertical' | 'horizontal',
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    headerText?: string;
    showWeekdays?: boolean;
    showWeekNumbers?: boolean;
    showNavigationButtons?: boolean;
    weekdayCellsText?: string[];
};

const defaultOptions = {
    orientation: 'vertical',
    calendarView: 'month',
    headerText: 'April 2018',
    showWeekdays: true,
    showNavigationButtons: false
};


export const CalendarInfiniteView: KendoComponent<KendoCalendarInfiniteViewProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoCalendarInfiniteViewProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation = defaultOptions.orientation,
        calendarView = defaultOptions.calendarView,
        headerText = defaultOptions.headerText,
        showWeekdays = defaultOptions.showWeekdays,
        showNavigationButtons = defaultOptions.showNavigationButtons,
        showWeekNumbers,
        weekdayCellsText,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                CALENDARINFINITEVIEW_CLASSNAME,
                `k-calendar-${calendarView}view`,
                props.className,
                {
                    'k-hstack': orientation === 'horizontal',
                    'k-vstack': orientation === 'vertical',
                }
            )}>
            <CalendarHeader
                showNavigationButtons={showNavigationButtons}
                calendarTitleText={headerText}
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

CalendarInfiniteView.className = CALENDARINFINITEVIEW_CLASSNAME;
CalendarInfiniteView.defaultOptions = defaultOptions;
CalendarInfiniteView.moduleName = CALENDAR_MODULE_NAME;
CalendarInfiniteView.folderName = CALENDAR_FOLDER_NAME;

export default CalendarInfiniteView;
