import { Button } from '../button';
import { classNames, Size } from '../misc';

import { nextId } from '../misc';

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
};

const defaultOptions = {
    calendarTitleText: 'October 2021',
    showToday: true,
    showNavigationButtons: true,
    orientation: 'horizontal'
};

/**
 * @aria {id} for the title button, used for aria-labelledby from the grid
 */
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
        titleId,
        ...other
    } = props;

    const iconPrev = dir === 'rtl' ? 'chevron-right' : 'chevron-left';
    const iconNext = dir === 'rtl' ? 'chevron-left' : 'chevron-right';
    const resolvedTitleId = titleId || nextId('calendar-title');
    const titleParts = calendarView === 'month' && calendarTitleText.match(/^(.*\S)\s+(\d{4})$/);
    const monthText = titleParts?.[1];
    const yearText = titleParts?.[2] || calendarTitleText;
    const titleDisabled = calendarView === "century";

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
            <span className="k-calendar-title-group" id={resolvedTitleId}>
                {monthText &&
                    <Button
                        disabled={titleDisabled}
                        className="k-calendar-title k-calendar-title-month"
                        text={monthText}
                        size={size}
                        fillMode="flat"
                        themeColor="primary"
                        tabIndex={-1}
                        aria-label={`Navigate to year view: ${monthText}`}
                        {...(titleDisabled ? { 'aria-disabled': 'true' } : {})}
                    />
                }
                <Button
                    disabled={titleDisabled}
                    className="k-calendar-title k-calendar-title-year"
                    text={yearText}
                    size={size}
                    fillMode="flat"
                    themeColor="primary"
                    tabIndex={-1}
                    aria-label={`Navigate to parent view: ${yearText}`}
                    {...(titleDisabled ? { 'aria-disabled': 'true' } : {})}
                />
            </span>
            <span className="k-spacer"></span>
            <span className="k-calendar-nav">
                {showNavigationButtons && <Button className="k-calendar-nav-prev" icon={iconPrev} size={size} fillMode="flat" tabIndex={-1} aria-label="Navigate to previous view" />}
                {showToday && <Button size={size} fillMode="flat" className="k-calendar-nav-today" tabIndex={-1}>Today</Button>}
                {showNavigationButtons && <Button className="k-calendar-nav-next" icon={iconNext} size={size} fillMode="flat" tabIndex={-1} aria-label="Navigate to next view" />}
            </span>
        </div>
    );
};

CalendarHeader.options = options;
CalendarHeader.className = CALENDARHEADER_CLASSNAME;
CalendarHeader.defaultOptions = defaultOptions;

export default CalendarHeader;
