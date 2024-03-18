import { Button } from '../button';
import { classNames, Size } from '../misc';

const className = `k-calendar-header`;

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoCalendarHeaderProps = {
    calendarHeaderText?: string;
    showToday?: boolean;
    showNavigationButtons?: boolean;
    size?: (typeof options.size)[number] | null;
    orientation?: 'vertical' | 'horizontal';
    dir?: 'ltr' | 'rtl';
};

const defaultProps = {
    calendarHeaderText: 'October 2021',
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
        calendarHeaderText = defaultProps.calendarHeaderText,
        showToday = defaultProps.showToday,
        showNavigationButtons = defaultProps.showNavigationButtons,
        orientation = defaultProps.orientation,
        size = defaultProps.size,
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
            <Button className="k-calendar-title" text={calendarHeaderText} size={size} fillMode="flat" themeColor="primary"></Button>
            <span className="k-spacer"></span>
            <span className="k-calendar-nav">
                {showNavigationButtons && <Button className="k-calendar-nav-prev" icon={iconPrev} size={size} fillMode="flat"></Button>}
                {showToday && <Button size={size} fillMode="flat" themeColor="primary" className="k-calendar-nav-today">Today</Button>}
                {showNavigationButtons && <Button className="k-calendar-nav-next" icon={iconNext} size={size} fillMode="flat"></Button>}
            </span>
        </div>
    );
};

export default CalendarHeader;
