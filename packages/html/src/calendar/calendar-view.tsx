import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { CalendarTable } from '../calendar';

export interface CalendarViewProps {
    className?: string;
    orientation?: 'vertical' | 'horizontal',
    calendarView?: 'month' | 'year' | 'decade' | 'century';
    viewsCount?: string;
    showWeek?: boolean;
    showOtherMonth?: boolean;
    showCalendarCaption?: boolean;
    selectedRange?: boolean;
}

export class CalendarView extends React.Component<CalendarViewProps> {

    static defaultProps = {
        viewsCount: '1',
        orientation: 'horizontal',
        calendarView: 'month',
    };

    render() {
        const {
            className,
            orientation,
            calendarView,
            viewsCount,
            showWeek,
            showOtherMonth,
            showCalendarCaption,
            selectedRange,
            ...htmlAttributes
        } = this.props;

        const views = Number(viewsCount);

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-calendar-view',
                    `k-calendar-${calendarView}view`,
                    'k-align-items-start',
                    'k-justify-content-center',
                    {
                        [`k-${kendoThemeMaps.orientationMap[orientation!] || orientation}`]: orientation,
                    }
                )}>

                { [ ...Array(views) ].map((_e, i) =>
                    <CalendarTable key={i}
                        calendarView={calendarView}
                        showWeek={showWeek}
                        showOtherMonth={showOtherMonth}
                        showCalendarCaption={showCalendarCaption}
                        selectedRange={selectedRange}
                    />
                )}
            </div>
        );
    }
}
