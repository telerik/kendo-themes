import { Button } from '../button';
import { classNames, Size } from '../misc';

const className = `k-calendar-header`;

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoCalendarHeaderProps = {
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    calendarTitleText?: string;
    showToday?: boolean;
    showNavigationButtons?: boolean;
    size?: (typeof options.size)[number] | null;
    orientation?: 'vertical' | 'horizontal';
    dir?: 'ltr' | 'rtl';
};

const defaultProps = {
    calendarTitleText: 'October 2021',
    showToday: true,
    showNavigationButtons: true,
    orientation: 'horizontal',
    size: Size.medium
};

export const CalendarHeader = (
    props: KendoCalendarHeaderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        calendarTitleText = defaultProps.calendarTitleText,
        showToday = defaultProps.showToday,
        showNavigationButtons = defaultProps.showNavigationButtons,
        orientation = defaultProps.orientation,
        size = defaultProps.size,
        calendarView,
        dir,
        ...other
    } = props;

    const iconPrev = dir === 'rtl' ? 'chevron-right' : 'chevron-left';
    const iconNext = dir === 'rtl' ? 'chevron-left' : 'chevron-right';

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                className,
                {
                    'k-vstack': orientation === 'vertical',
                }
            )}>
            <Button disabled={calendarView === "century"} className="k-calendar-title" text={calendarTitleText} size={size} fillMode="flat" themeColor="primary"></Button>
            <span className="k-spacer"></span>
            <span className="k-calendar-nav">
                {showNavigationButtons && <Button className="k-calendar-nav-prev" icon={iconPrev} size={size} fillMode="flat"></Button>}
                {showToday && <Button size={size} fillMode="flat" className="k-calendar-nav-today">Today</Button>}
                {showNavigationButtons && <Button className="k-calendar-nav-next" icon={iconNext} size={size} fillMode="flat"></Button>}
            </span>
        </div>
    );
};

export default CalendarHeader;
