import { classNames, optionClassNames, Size, nextId } from '../misc';
import { CalendarView } from './calendar-view';
import { CalendarHeader } from './calendar-header';
import { CalendarFooter } from './calendar-footer';

import { KendoComponent } from '../_types/component';
import { CALENDAR_FOLDER_NAME, CALENDAR_MODULE_NAME } from './constants';
const CALENDAR_CLASSNAME = `k-calendar`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
};

export type KendoCalendarOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoCalendarProps = KendoCalendarOptions & {
    orientation?: 'vertical' | 'horizontal';
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    calendarTitleText?: string;
    showTableHead?: boolean;
    showWeek?: boolean;
    showCalendarHeader?: boolean;
    showCalendarFooter?: boolean;
    calendarFooterText?: string;
    dir?: 'ltr' | 'rtl';
};

const defaultOptions = {
    showCalendarHeader: true,
    orientation: 'horizontal',
    calendarView: 'month',
    calendarTitleText: 'October 2021',
} as const;

/**
 * @aria {role="gridcell"} Date cells in the calendar body.
 * @aria {aria-selected="true"} Indicates the selected date.
 * @aria {aria-disabled="true"} Indicates a disabled date.
 * @aria {tabindex="-1"} Navigation buttons are not focusable.
 * @aria {aria-label} Describes the navigation button purpose.
 * @aria {tabindex="-1"} Title button is not focusable.
 * @aria {aria-label} Describes the title button purpose.
 * @aria {tabindex="-1"} Today link/button is not focusable.
 * @ux {Month view} Displays a grid of days for the current month.
 * @ux {Navigation} Arrow buttons navigate to the previous and next time period.
 * @ux {View switching} Clicking the title switches between day, month, and year views.
 * @ux {Date selection} Clicking a date cell selects it.
 * @ux {Range selection} In range mode, the first and second click define start and end dates.
 * @ux {Disabled dates} Individual dates can be disabled and are skipped during keyboard navigation.
 */
export const Calendar: KendoComponent<KendoCalendarProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoCalendarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        orientation = defaultOptions.orientation,
        calendarView = defaultOptions.calendarView,
        calendarTitleText = defaultOptions.calendarTitleText,
        showCalendarHeader = defaultOptions.showCalendarHeader,
        showWeek,
        showCalendarFooter,
        calendarFooterText,
        dir,
        ...other
    } = props;

    const titleId = nextId('calendar-title');

    return (
        <div
            {...other}
            dir={dir}
            className={classNames(
                props.className,
                CALENDAR_CLASSNAME,
                optionClassNames(CALENDAR_CLASSNAME, {
                    size
                }),
                {
                    'k-week-number': showWeek,
                }
            )}>
            {showCalendarHeader &&
                <CalendarHeader
                    calendarView={calendarView}
                    showToday={showCalendarFooter ? false : true}
                    calendarTitleText={calendarTitleText}
                    orientation={orientation}
                    size={size}
                    dir={dir}
                    titleId={titleId}
                />
            }

            <CalendarView
                calendarView={calendarView}
                orientation={orientation}
                gridRole
                ariaLabelledBy={titleId}
            >
                {props.children}
            </CalendarView>

            {showCalendarFooter && <CalendarFooter calendarFooterText={calendarFooterText} size={size}/>}
        </div>
    );
};

Calendar.states = states;
Calendar.options = options;
Calendar.className = CALENDAR_CLASSNAME;
Calendar.defaultOptions = defaultOptions;
Calendar.moduleName = CALENDAR_MODULE_NAME;
Calendar.folderName = CALENDAR_FOLDER_NAME;

/**
 * @keyboard {ArrowDown} Moves focus one row down, navigating the view when focus is in the last row.
 * @keyboard {ArrowUp} Moves focus one row up, navigating the view when focus is in the first row.
 * @keyboard {ArrowLeft} Moves focus to the previous date, month, year, or decade.
 * @keyboard {ArrowRight} Moves focus to the next date, month, year, or decade.
 * @keyboard {Enter} Selects the focused date.
 * @keyboard {Control/Cmd(Mac) + ArrowUp} Navigates to the upper view.
 * @keyboard {Control/Cmd(Mac) + ArrowDown} Navigates to the lower view.
 * @keyboard {Control/Cmd(Mac) + ArrowRight} Navigates to the next period.
 * @keyboard {Control/Cmd(Mac) + ArrowLeft} Navigates to the previous period.
 * @keyboard {Home} Focuses the first day of the month.
 * @keyboard {End} Focuses the last day of the month.
 * @keyboard {PageUp} Focuses the same date in the previous month.
 * @keyboard {PageDown} Focuses the same date in the next month.
 * @keyboard {t} Navigates to today's month view and focuses today.
 * @keyboard {Control/Cmd(Mac) + Enter} Adds or removes the focused date from the selection in multiple-selection mode.
 * @keyboard {Shift + ArrowLeft} Adds the previous date to the selection in multiple-selection mode.
 * @keyboard {Shift + ArrowRight} Adds the next date to the selection in multiple-selection mode.
 * @keyboard {Shift + ArrowUp} Extends selection up one row in month view.
 * @keyboard {Shift + ArrowDown} Extends selection down one row in month view.
 * @keyboard {Shift + Enter} Selects the range between the last selected date and the focused date.
 * @keyboard {Shift + Space} Selects the range between the last selected date and the focused date.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/datepicker-dialog.html ARIA practices Date Picker Dialog Example
 */

export default Calendar;
