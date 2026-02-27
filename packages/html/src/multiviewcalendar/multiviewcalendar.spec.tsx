import { classNames, Size } from '../misc';
import { Calendar } from '../calendar';

import { KendoComponent } from '../_types/component';
import { MULTIVIEWCALENDAR_FOLDER_NAME, MULTIVIEWCALENDAR_MODULE_NAME } from './constants';
const MULTIVIEWCALENDAR_CLASSNAME = `k-calendar-range`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type KendoMultiViewCalendarOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoMultiViewCalendarProps = KendoMultiViewCalendarOptions & {
    calendarTitleText?: string;
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    orientation?: 'horizontal' | 'vertical';
    showCalendarFooter?: boolean;
    calendarCaption?: string;
    showTableHead?: boolean;
    showWeek?: boolean;
    dir?: 'ltr' | 'rtl';
};

const defaultOptions = {
    calendarTitleText: 'October 2021 - November 2021',
    orientation: 'horizontal',
    calendarView: 'month'
} as const;

export const MultiViewCalendar: KendoComponent<KendoMultiViewCalendarProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoMultiViewCalendarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        orientation = defaultOptions.orientation,
        calendarView = defaultOptions.calendarView,
        calendarTitleText = defaultOptions.calendarTitleText,
        showCalendarFooter,
        showWeek,
        dir,
        ...other
    } = props;

    return (
        <Calendar
            {...other}
            className={classNames(
                props.className,
                MULTIVIEWCALENDAR_CLASSNAME,
            )}
            size={size}
            calendarTitleText={calendarTitleText}
            calendarView={calendarView}
            orientation={orientation}
            showCalendarFooter={showCalendarFooter}
            showWeek={showWeek}
            dir={dir}
        />
    );
};

MultiViewCalendar.states = states;
MultiViewCalendar.options = options;
MultiViewCalendar.className = MULTIVIEWCALENDAR_CLASSNAME;
MultiViewCalendar.defaultOptions = defaultOptions;
MultiViewCalendar.moduleName = MULTIVIEWCALENDAR_MODULE_NAME;
MultiViewCalendar.folderName = MULTIVIEWCALENDAR_FOLDER_NAME;

/**
 * Accessibility specification for MultiViewCalendar.
 *
 * @accessibility
 * - .k-calendar-view gets role=grid with aria-labelledby
 * - Inner tables have role=none (semantics belong to the single grid)
 * - All thead/tbody/tr/th/td elements have explicit roles
 * - Navigation buttons have tabindex=-1
 *
 * @wcag 4.1.2 Name, Role, Value - grid pattern for multi-month date selection
 */
MultiViewCalendar.ariaSpec = {
    selector: '.k-calendar-range',
    rules: [
        { selector: '.k-calendar-range .k-calendar-view', attribute: 'role=grid', usage: 'Specifies the role of the multi-view calendar wrapper.' },
        { selector: '.k-calendar-range .k-calendar-view', attribute: 'aria-labelledby', usage: 'Pointing to the k-calendar-title element.' },
        { selector: '.k-calendar-range .k-calendar-view', attribute: 'tabindex=0', usage: 'Makes the grid focusable.' },
        { selector: '.k-calendar-range .k-calendar-table', attribute: 'role=none', usage: 'Inner tables have role removed — content belongs to single grid.' },
        { selector: '.k-calendar-thead', attribute: 'role=rowgroup', usage: 'Explicit rowgroup role.' },
        { selector: '.k-calendar-tbody', attribute: 'role=rowgroup', usage: 'Explicit rowgroup role.' },
        { selector: '.k-calendar-tr', attribute: 'role=row', usage: 'Explicit row role.' },
        { selector: '.k-calendar-thead .k-calendar-th', attribute: 'role=columnheader', usage: 'Column header for day names.' },
        { selector: '.k-calendar-thead .k-calendar-th', attribute: 'scope=col', usage: 'Specifies the header applies to a column.' },
        { selector: '.k-calendar-thead .k-calendar-th', attribute: 'aria-label', usage: 'Full name of the day of the week.' },
        { selector: '.k-calendar-td:not(.k-alt):not(.k-empty)', attribute: 'role=gridcell', usage: 'Date cells in the calendar body.' },
        { selector: '.k-calendar-td.k-selected', attribute: 'aria-selected=true', usage: 'Indicates the selected date.' },
        { selector: '.k-calendar-td.k-disabled', attribute: 'aria-disabled=true', usage: 'Indicates a disabled date.' },
        { selector: '.k-calendar-nav-prev,.k-calendar-nav-next', attribute: 'tabindex=-1', usage: 'Navigation buttons are not focusable.' },
        { selector: '.k-calendar-title', attribute: 'tabindex=-1', usage: 'Title button is not focusable.' },
        { selector: '.k-calendar-nav-today', attribute: 'tabindex=-1', usage: 'Today link is not focusable.' },
    ]
};

export default MultiViewCalendar;
