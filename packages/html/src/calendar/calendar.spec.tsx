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
 * Accessibility specification for Calendar.
 *
 * @accessibility
 * - Calendar grid table has role=grid with aria-labelledby pointing to the title
 * - aria-activedescendant tracks the focused cell
 * - Navigation buttons are excluded from tab order (tabindex=-1)
 * - Icon-only nav buttons have aria-label
 * - Column headers have role=columnheader with scope=col and aria-label
 * - Grid cells have role=gridcell with aria-selected/aria-disabled states
 *
 * @wcag 4.1.2 Name, Role, Value - grid pattern for date selection
 */
Calendar.ariaSpec = {
    selector: '.k-calendar:not(.k-calendar-infinite):not(.k-calendar-range)',
    rules: [
        { selector: '.k-calendar:not(.k-calendar-infinite):not(.k-calendar-range) .k-calendar-view', attribute: 'role=grid', usage: 'Specifies the role of the Calendar view container.' },
        { selector: '.k-calendar:not(.k-calendar-infinite):not(.k-calendar-range) .k-calendar-view', attribute: 'aria-labelledby', usage: 'Pointing to the current view label (e.g. March 2022 or 2020-2029).' },
        { selector: '.k-calendar:not(.k-calendar-infinite):not(.k-calendar-range) .k-calendar-view', attribute: 'tabindex=0', usage: 'Makes the grid focusable.' },
        { selector: '.k-calendar:not(.k-calendar-infinite):not(.k-calendar-range) .k-calendar-table', attribute: 'role=none', usage: 'Inner table has role removed — content belongs to the grid on the view.' },
        { selector: '.k-calendar-thead', attribute: 'role=rowgroup', usage: 'Groups header rows.' },
        { selector: '.k-calendar-tbody', attribute: 'role=rowgroup', usage: 'Groups body rows.' },
        { selector: '.k-calendar-tr', attribute: 'role=row', usage: 'Each row in the calendar table.' },
        { selector: '.k-calendar-thead .k-calendar-th', attribute: 'role=columnheader', usage: 'Column header for day names.' },
        { selector: '.k-calendar-thead .k-calendar-th', attribute: 'scope=col', usage: 'Specifies the header applies to a column.' },
        { selector: '.k-calendar-thead .k-calendar-th', attribute: 'aria-label', usage: 'Full name of the day of the week.' },
        { selector: '.k-calendar-td:not(.k-alt):not(.k-empty)', attribute: 'role=gridcell', usage: 'Date cells in the calendar body.' },
        { selector: '.k-calendar-td.k-selected', attribute: 'aria-selected=true', usage: 'Indicates the selected date.' },
        { selector: '.k-calendar-td.k-disabled', attribute: 'aria-disabled=true', usage: 'Indicates a disabled date.' },
        { selector: '.k-calendar-nav-next,.k-calendar-nav-prev', attribute: 'tabindex=-1', usage: 'Navigation buttons are not focusable.' },
        { selector: '.k-calendar-nav-next,.k-calendar-nav-prev', attribute: 'aria-label', usage: 'Describes the navigation button purpose.' },
        { selector: '.k-calendar-title', attribute: 'tabindex=-1', usage: 'Title button is not focusable.' },
        { selector: '.k-calendar-title', attribute: 'aria-label', usage: 'Describes the title button purpose.' },
        { selector: '.k-calendar-nav-today', attribute: 'tabindex=-1', usage: 'Today link/button is not focusable.' },
    ]
};

export default Calendar;
