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
    /** Renders separate month and year title buttons instead of a single title. */
    splitTitle?: boolean;
    monthTitleText?: string;
    yearTitleText?: string;
    /** Marks which of the split title buttons has its selection view open. */
    expanded?: 'month' | 'year';
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
        splitTitle,
        monthTitleText = 'October',
        yearTitleText = '2021',
        expanded,
        ...other
    } = props;

    const iconPrev = dir === 'rtl' ? 'chevron-right' : 'chevron-left';
    const iconNext = dir === 'rtl' ? 'chevron-left' : 'chevron-right';
    const resolvedTitleId = titleId || nextId('calendar-title');

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
            {splitTitle ? <>
                <span className="k-calendar-title-group" id={resolvedTitleId}>
                    <Button
                        className="k-calendar-title k-calendar-title-month"
                        text={monthTitleText}
                        size={size}
                        fillMode="flat"
                        themeColor="primary"
                        tabIndex={-1}
                        aria-haspopup="listbox"
                        aria-expanded={expanded === 'month'}
                        aria-label={`Select month: ${monthTitleText}`}
                    />
                    <Button
                        className="k-calendar-title k-calendar-title-year"
                        text={yearTitleText}
                        size={size}
                        fillMode="flat"
                        themeColor="primary"
                        tabIndex={-1}
                        aria-haspopup="listbox"
                        aria-expanded={expanded === 'year'}
                        aria-label={`Select year: ${yearTitleText}`}
                    />
                </span>
            </> : <Button
                disabled={calendarView === "century"}
                className="k-calendar-title"
                text={calendarTitleText}
                size={size}
                fillMode="flat"
                themeColor="primary"
                id={resolvedTitleId}
                tabIndex={-1}
                aria-label={`Navigate to parent view: ${calendarTitleText}`}
                {...(calendarView === 'century' ? { 'aria-disabled': 'true' } : {})}
            />}
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
