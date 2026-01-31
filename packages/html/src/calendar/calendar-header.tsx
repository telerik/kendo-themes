import { Button } from '../button';
import { classNames, Size } from '../misc';

const CALENDARHEADER_CLASSNAME = `k-calendar-header`;

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
};

export type KendoCalendarHeaderProps = {
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    calendarTitleText?: string;
    showToday?: boolean;
    showNavigationButtons?: boolean;
    size?: (typeof options.size)[number] | null;
    orientation?: 'vertical' | 'horizontal';
    dir?: 'ltr' | 'rtl';
    titleId?: string;
    disablePrev?: boolean;
    disableNext?: boolean;
};

const defaultOptions = {
    calendarTitleText: 'October 2021',
    showToday: true,
    showNavigationButtons: true,
    orientation: 'horizontal'
};

export const CalendarHeader = (
    props: KendoCalendarHeaderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        calendarTitleText = defaultOptions.calendarTitleText,
        showToday = defaultOptions.showToday,
        showNavigationButtons = defaultOptions.showNavigationButtons,
        orientation = defaultOptions.orientation,
        size,
        calendarView,
        dir,
        titleId = 'k-calendar-title',
        disablePrev,
        disableNext,
        ...other
    } = props;

    const iconPrev = dir === 'rtl' ? 'chevron-right' : 'chevron-left';
    const iconNext = dir === 'rtl' ? 'chevron-left' : 'chevron-right';

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CALENDARHEADER_CLASSNAME,
                {
                    'k-vstack': orientation === 'vertical',
                }
            )}>
            <Button disabled={calendarView === "century"} id={titleId} className="k-calendar-title" text={calendarTitleText} size={size} fillMode="flat" themeColor="primary" aria-label={calendarTitleText} tabIndex={-1} aria-disabled={calendarView === "century" ? 'true' : undefined}></Button>
            <span className="k-spacer"></span>
            <span className="k-calendar-nav">
                {showNavigationButtons && <Button disabled={disablePrev} className="k-calendar-nav-prev" icon={iconPrev} size={size} fillMode="flat" aria-label="Previous" tabIndex={-1} aria-disabled={disablePrev ? 'true' : undefined}></Button>}
                {showToday && <Button size={size} fillMode="flat" className="k-calendar-nav-today" role="link" tabIndex={-1}>Today</Button>}
                {showNavigationButtons && <Button disabled={disableNext} className="k-calendar-nav-next" icon={iconNext} size={size} fillMode="flat" aria-label="Next" tabIndex={-1} aria-disabled={disableNext ? 'true' : undefined}></Button>}
            </span>
        </div>
    );
};


CalendarHeader.options = options;
CalendarHeader.className = CALENDARHEADER_CLASSNAME;
CalendarHeader.defaultOptions = defaultOptions;

export default CalendarHeader;
