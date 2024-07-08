import { Size, classNames } from '../misc';
import { Button } from '../button';

const CALENDARFOOTER_CLASSNAME = `k-calendar-footer`;

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoCalendarFooterProps = {
    size?: (typeof options.size)[number] | null;
    calendarFooterText?: string;
};

const defaultProps = {
    size: Size.medium,
    calendarFooterText: "Tuesday, October 12, 2021"
};

export const CalendarFooter = (
    props: React.HTMLAttributes<HTMLDivElement> &
        KendoCalendarFooterProps
) => {
    const {
        size = defaultProps.size,
        calendarFooterText = defaultProps.calendarFooterText,
        ...other
    } = props;

    return (
        <div {...other} className={classNames(props.className, CALENDARFOOTER_CLASSNAME)}>
            <Button size={size} fillMode="flat" themeColor="primary" className="k-calendar-nav-today">{calendarFooterText}</Button>
        </div>
    );
};

CalendarFooter.options = options;
CalendarFooter.className = CALENDARFOOTER_CLASSNAME;
CalendarFooter.defaultProps = defaultProps;

export default CalendarFooter;
