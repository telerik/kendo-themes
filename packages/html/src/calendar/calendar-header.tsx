import * as React from 'react';
import { classNames } from '../utils';
import { Button } from '../button';

export interface CalendarHeaderProps {
    className?: string;
    calendarHeaderText?: string;
    showToday?: boolean;
    size?: null | 'small' | 'medium' | 'large';
    orientation?: 'vertical' | 'horizontal';
}

export class CalendarHeader extends React.Component<CalendarHeaderProps> {

    static defaultProps = {
        calendarHeaderText: 'October 2021',
        showToday: true,
        orientation: 'horizontal',
        size: 'medium'
    };

    render() {
        const {
            className,
            calendarHeaderText,
            showToday,
            orientation,
            size,
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
                <Button className="k-calendar-title" text={calendarHeaderText} size={size} fillMode="flat"></Button>
                <span className="k-spacer"></span>
                <span className="k-calendar-nav">
                    <Button className="k-calendar-nav-prev" icon="arrow-chevron-left" size={size} fillMode="flat"></Button>
                    {showToday && <span className="k-calendar-nav-today">Today</span>}
                    <Button className="k-calendar-nav-next" icon="arrow-chevron-right" size={size} fillMode="flat"></Button>
                </span>
            </div>
        );
    }
}
