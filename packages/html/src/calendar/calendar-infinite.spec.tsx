import { classNames, optionClassNames, Size, nextId } from '../misc';
import { CalendarNavigation } from './calendar-navigation.spec';
import { CalendarInfiniteView, KendoCalendarInfiniteViewProps } from './calendar-infinite-view.spec';

import { KendoComponent } from '../_types/component';
import { CALENDAR_FOLDER_NAME, CALENDAR_MODULE_NAME } from './constants';
const CALENDARINFINITE_CLASSNAME = 'k-calendar-infinite';

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
};

export type KendoCalendarInfiniteOptions = {
    size?: (typeof options.size)[number] | null;
};

const defaultNavigationItems = ([
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec', '2021', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec', '2022', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'
]);

const defaultMarkerConfig = { '2021': 'marker', '2022': 'marker' };

const _renderNavigationItems = (items: string[], configuration: any) => items.map((item, index) => (
    <li key={index}>
        <span
            className={configuration[item] === 'marker' ? 'k-calendar-navigation-marker' : undefined}
        >
            {item}
        </span>
    </li>
));

export type KendoCalendarInfiniteProps = {
    _navigationData?: React.JSX.Element;
    showNavigation?: boolean;
    calendarView?: KendoCalendarInfiniteViewProps['calendarView'];
    calendarTitleText?: KendoCalendarInfiniteViewProps['headerText'];
    showWeekdays?: KendoCalendarInfiniteViewProps['showWeekdays'];
    showWeekNumbers?: KendoCalendarInfiniteViewProps['showWeekNumbers'];
    showNavigationButtons?: KendoCalendarInfiniteViewProps['showNavigationButtons'];
    calendarWeekdays?: KendoCalendarInfiniteViewProps['weekdayCellsText'];
    navigationItems?: string[];
    navigationMarkerConfig?: { [key: string]: string };

};

const defaultOptions = {
    showNavigation: true,
    calendarView: 'month',
    navigationItems: defaultNavigationItems,
    navigationMarkerConfig: defaultMarkerConfig
} as const;

export const CalendarInfinite: KendoComponent<KendoCalendarInfiniteProps & KendoCalendarInfiniteOptions & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoCalendarInfiniteProps & KendoCalendarInfiniteOptions &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        showNavigation = defaultOptions.showNavigation,
        calendarView = defaultOptions.calendarView,
        navigationItems = defaultOptions.navigationItems,
        navigationMarkerConfig = defaultOptions.navigationMarkerConfig,
        calendarTitleText,
        showWeekdays,
        showWeekNumbers,
        showNavigationButtons,
        calendarWeekdays,
        ...other
    } = props;

    const titleId = nextId('calendar-infinite-title');

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                'k-calendar',
                CALENDARINFINITE_CLASSNAME,
                optionClassNames('k-calendar', { size })
            )}>
            {showNavigation &&
                <CalendarNavigation>
                    {_renderNavigationItems(navigationItems, navigationMarkerConfig)}
                </CalendarNavigation>
            }
            <CalendarInfiniteView
                calendarView={calendarView}
                headerText={calendarTitleText}
                showWeekdays={showWeekdays}
                showWeekNumbers={showWeekNumbers}
                showNavigationButtons={showNavigationButtons}
                orientation="vertical"
                weekdayCellsText={calendarWeekdays}
                gridLabelledBy={titleId}
            >
                {props.children}
            </CalendarInfiniteView>
        </div>
    );
};

CalendarInfinite.options = options;
CalendarInfinite.className = CALENDARINFINITE_CLASSNAME;
CalendarInfinite.defaultOptions = defaultOptions;
CalendarInfinite.moduleName = CALENDAR_MODULE_NAME;
CalendarInfinite.folderName = CALENDAR_FOLDER_NAME;

/**
 * Accessibility specification for Infinite Calendar.
 *
 * @accessibility
 * - The content table (.k-content .k-calendar-table) has role=grid
 * - The weekday header table has role=none (separate from the grid)
 * - Caption rows (month/year labels) have aria-hidden=true
 * - All tbody/tr/th/td elements inside the grid have explicit roles
 * - Navigation sidebar is outside the grid
 * - Navigation buttons have tabindex=-1
 *
 * @wcag 4.1.2 Name, Role, Value - grid pattern for infinite scrolling date selection
 */
CalendarInfinite.ariaSpec = {
    selector: '.k-calendar-infinite',
    rules: [
        { selector: '.k-calendar-infinite .k-content .k-calendar-table', attribute: 'role=grid', usage: 'The content table is the grid element for the infinite calendar.' },
        { selector: '.k-calendar-infinite .k-content .k-calendar-table', attribute: 'aria-labelledby', usage: 'Pointing to the current view title element.' },
        { selector: '.k-calendar-infinite .k-content .k-calendar-table', attribute: 'tabindex=0', usage: 'Makes the grid focusable.' },
        { selector: '.k-calendar-infinite .k-calendar-weekdays', attribute: 'role=table', usage: 'Weekday header table keeps table semantics (not part of grid).' },
        { selector: '.k-calendar-view div.k-content.k-scrollable', attribute: 'role=none', usage: 'Scrollable wrapper is transparent to a11y tree.' },
        { selector: '.k-calendar-infinite .k-calendar-tbody', attribute: 'role=rowgroup', usage: 'Explicit rowgroup role on tbody.' },
        { selector: '.k-calendar-infinite .k-calendar-tr', attribute: 'role=row', usage: 'Explicit row role on tr.' },
        { selector: '.k-calendar-infinite .k-calendar-weekdays .k-calendar-th', attribute: 'role=columnheader', usage: 'Explicit columnheader role on weekday headers.' },
        { selector: '.k-calendar-infinite .k-calendar-weekdays .k-calendar-th', attribute: 'scope=col', usage: 'Specifies that the header applies to a column.' },
        { selector: '.k-calendar-infinite .k-calendar-weekdays .k-calendar-th', attribute: 'aria-label', usage: 'Full name of the day of the week.' },
        { selector: '.k-calendar-infinite .k-calendar-td:not(.k-alt):not(.k-empty)', attribute: 'role=gridcell', usage: 'Date cells in the calendar body.' },
        { selector: '.k-calendar-td.k-selected', attribute: 'aria-selected=true', usage: 'Specifies whether the date is selected.' },
        { selector: '.k-calendar-td.k-disabled', attribute: 'aria-disabled=true', usage: 'Specifies a disabled date.' },
        { selector: '.k-calendar-title', attribute: 'tabindex=-1', usage: 'Title button is not focusable.' },
        { selector: '.k-calendar-nav-today', attribute: 'tabindex=-1', usage: 'Today link is not focusable.' },
    ]
};

export default CalendarInfinite;
