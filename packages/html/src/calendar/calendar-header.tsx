import { Button } from '../button';
import { classNames, Size } from '../utils';

const className = `k-calendar-header`;

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoCalendarHeaderProps = {
    calendarHeaderText?: string;
    showToday?: boolean;
    size?: (typeof options.size)[number] | null;
    orientation?: 'vertical' | 'horizontal';
};

const defaultProps = {
    calendarHeaderText: 'October 2021',
    showToday: true,
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
        orientation = defaultProps.orientation,
        size = defaultProps.size,
        ...other
    } = props;

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
            <Button className="k-calendar-title" text={calendarHeaderText} size={size} fillMode="flat"></Button>
            <span className="k-spacer"></span>
            <span className="k-calendar-nav">
                <Button className="k-calendar-nav-prev" icon="arrow-chevron-left" size={size} fillMode="flat"></Button>
                {showToday && <Button size={size} fillMode="flat" themeColor="primary" className="k-calendar-nav-today">Today</Button>}
                <Button className="k-calendar-nav-next" icon="arrow-chevron-right" size={size} fillMode="flat"></Button>
            </span>
        </div>
    );
};

export default CalendarHeader;
