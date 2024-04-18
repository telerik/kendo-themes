import { classNames, optionClassNames, Size } from '../misc';
import { CalendarNavigation } from '.';
import { CalendarInfiniteView, KendoCalendarInfiniteViewProps } from './calendar-infinite-view.spec';

const CALENDAR_INFINITE_CLASSNAME = 'k-calendar-infinite';

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
    _navigationData?: JSX.Element;
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

const defaultProps = {
    size: Size.medium,
    showNavigation: true,
    calendarView: 'month',
    navigationItems: defaultNavigationItems,
} as const;

export const CalendarInfinite = (
    props: KendoCalendarInfiniteProps & KendoCalendarInfiniteOptions &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        showNavigation = defaultProps.showNavigation,
        calendarView = defaultProps.calendarView,
        calendarTitleText,
        showWeekdays,
        showWeekNumbers,
        showNavigationButtons,
        calendarWeekdays,
        navigationItems = defaultProps.navigationItems,
        navigationMarkerConfig = defaultMarkerConfig,
        size = defaultProps.size,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                'k-calendar',
                CALENDAR_INFINITE_CLASSNAME,
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
