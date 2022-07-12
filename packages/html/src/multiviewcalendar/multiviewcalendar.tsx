import * as React from 'react';
import { classNames } from '../utils';
import { Calendar } from '../calendar';

export interface MultiViewCalendarProps {
    className?: string;
    calendarHeaderText?: string;
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    viewsCount?: string;
    orientation?: 'horizontal' | 'vertical';
    showCalendarFooter?: boolean;
    showWeek?: boolean;
    showOtherMonth?: boolean;
    showCalendarCaption?: boolean;
}

export class MultiViewCalendar extends React.Component<MultiViewCalendarProps> {

    static defaultProps = {
        calendarHeaderText: 'October 2021 - November 2021',
        viewsCount: '2',
        orientation: 'horizontal',
        calendarView: 'month',
    };

    render() {
        const {
            className,
            calendarHeaderText,
            calendarView,
            viewsCount,
            orientation,
            showCalendarFooter,
            showWeek,
            showOtherMonth,
            showCalendarCaption,
            ...htmlAttributes
        } = this.props;

        return (
            <Calendar
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-calendar-range',
                )}

                calendarHeaderText={calendarHeaderText}
                calendarView={calendarView}
                viewsCount={viewsCount}
                orientation={orientation}
                showCalendarFooter={showCalendarFooter}
                showWeek={showWeek}
                showOtherMonth={showOtherMonth}
                showCalendarCaption={showCalendarCaption}
                selectedRange={true}

            />
        );
    }
}
