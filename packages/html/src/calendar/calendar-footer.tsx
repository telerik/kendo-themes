import { Size, classNames } from '../misc';
import { Button } from '../button';

const CALENDARFOOTER_CLASSNAME = `k-calendar-footer`;

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
};

export type KendoCalendarFooterProps = {
    size?: (typeof options.size)[number] | null;
    calendarFooterText?: string;
    /** Renders the built-in Today footer used by the fluid calendar. */
    today?: boolean;
};

const defaultOptions = {
    calendarFooterText: "Tuesday, October 12, 2021"
};

export const CalendarFooter = (
    props: React.HTMLAttributes<HTMLDivElement> &
        KendoCalendarFooterProps
) => {
    const {
        size,
        calendarFooterText = defaultOptions.calendarFooterText,
        today,
        ...other
    } = props;

    return (
        <div {...other} className={classNames(props.className, CALENDARFOOTER_CLASSNAME, { 'k-calendar-today-footer': today })}>
            <Button size={size} fillMode="flat" themeColor="primary" className="k-calendar-nav-today">{today ? 'Today' : calendarFooterText}</Button>
        </div>
    );
};

CalendarFooter.options = options;
CalendarFooter.className = CALENDARFOOTER_CLASSNAME;
CalendarFooter.defaultOptions = defaultOptions;

export default CalendarFooter;
