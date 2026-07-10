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

/**
 * @aria {role="grid"} Specifies the role of the multi-view calendar wrapper.
 * @aria {aria-labelledby} Pointing to the k-calendar-title element.
 * @aria {tabindex="0"} Makes the grid focusable.
 * @aria {role="none"} Inner tables have role removed — content belongs to single grid.
 * @aria {role="rowgroup"} Explicit rowgroup role.
 * @aria {role="row"} Explicit row role.
 * @aria {role="columnheader"} Column header for day names.
 * @aria {scope="col"} Specifies the header applies to a column.
 * @aria {aria-label} Full name of the day of the week.
 * @aria {role="gridcell"} Date cells in the calendar body.
 * @aria {aria-selected="true"} Indicates the selected date.
 * @aria {aria-disabled="true"} Indicates a disabled date.
 * @aria {tabindex="-1"} Navigation buttons are not focusable.
 * @aria {tabindex="-1"} Title button is not focusable.
 * @aria {tabindex="-1"} Today link is not focusable.
 * @ux {Multiple months} Displays two or more months simultaneously for range selection.
 * @ux {Range highlighting} Visually connects and highlights the selected date range across all views.
 * @ux {Synchronized navigation} Clicking the previous or next arrow advances all calendar views together.
 */
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
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/datepicker-dialog.html ARIA practices Date Picker Dialog Example
 */

export default MultiViewCalendar;
