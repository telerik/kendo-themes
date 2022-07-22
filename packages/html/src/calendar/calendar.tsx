import * as React from 'react';
import { classNames } from '../utils';
import { CalendarView, CalendarHeader, CalendarFooter } from '../calendar';

export interface CalendarProps {
    className?: string;
    orientation?: 'vertical' | 'horizontal';
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    calendarHeaderText?: string;
    viewsCount?: string;
    showWeek?: boolean;
    showOtherMonth?: boolean;
    showCalendarCaption?: boolean;
    showCalendarFooter?: boolean;
    selectedRange?: boolean;
}

export class Calendar extends React.Component<CalendarProps> {

    static defaultProps = {
        viewsCount: '1',
        orientation: 'horizontal',
        calendarView: 'month',
        calendarHeaderText: 'October 2021',
    };

    render() {
        const {
            className,
            orientation,
            calendarView,
            calendarHeaderText,
            viewsCount,
            showWeek,
            showOtherMonth,
            showCalendarCaption,
            showCalendarFooter,
            selectedRange,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-calendar',
                    {
                        'k-week-number': showWeek,
                    }
                )}>
                <CalendarHeader
                    showToday={showCalendarFooter ? false : true }
                    calendarHeaderText={calendarHeaderText}
                    orientation={orientation}
                />

                <CalendarView
                    calendarView={calendarView}
                    viewsCount={viewsCount}
                    orientation={orientation}
                    showWeek={showWeek}
                    showOtherMonth={showOtherMonth}
                    showCalendarCaption={showCalendarCaption}
                    selectedRange={selectedRange}
                />

                {showCalendarFooter && <CalendarFooter /> }
            </div>
        );
    }
}
