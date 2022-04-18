import * as React from 'react';
import { classNames } from '../utils';
import { Button } from '../button';

export interface CalendarHeaderProps {
    className?: string;
    calendarHeaderText?: string;
    showToday?: boolean;
    orientation?: 'vertical' | 'horizontal';
}

export class CalendarHeader extends React.Component<CalendarHeaderProps> {

    static defaultProps = {
        calendarHeaderText: 'October 2021',
        showToday: true,
        orientation: 'horizontal',
    };

    render() {
        const {
            className,
            calendarHeaderText,
            showToday,
            orientation,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-calendar-header',
                    {
                        'k-vstack': orientation === 'vertical',
                    }
                )}>
                <Button className="k-calendar-title" text={calendarHeaderText} fillMode="flat"></Button>
                <span className="k-spacer"></span>
                <span className="k-calendar-nav">
                    <Button className="k-nav-prev" icon="arrow-chevron-left" fillMode="flat"></Button>
                    {showToday && <span className="k-nav-today">Today</span>}
                    <Button className="k-nav-next" icon="arrow-chevron-right" fillMode="flat"></Button>
                </span>
            </div>
        );
    }
}
