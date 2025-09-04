import { classNames, optionClassNames, Size } from '../misc';
import { CalendarNavigation } from '.';
import { CalendarInfiniteView, KendoCalendarInfiniteViewProps } from './calendar-infinite-view.spec';

import { KendoComponent } from '../_types/component';
const CALENDARINFINITE_CLASSNAME = 'k-calendar-infinite';

const options = {
    size: [ Size.small, Size.medium, Size.large ],
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
    size: Size.medium,
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
        size = defaultOptions.size,
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
            >
                {props.children}
            </CalendarInfiniteView>
        </div>
    );
};

CalendarInfinite.options = options;
CalendarInfinite.className = CALENDARINFINITE_CLASSNAME;
CalendarInfinite.defaultOptions = defaultOptions;

export default CalendarInfinite;
