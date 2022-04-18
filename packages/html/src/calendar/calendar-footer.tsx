import * as React from 'react';
import { classNames } from '../utils';


export interface CalendarFooterProps {
    className?: string;
}

export class CalendarFooter extends React.Component<CalendarFooterProps> {

    render() {
        const {
            className,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-calendar-footer'
                )}>
                <a href="#" className="k-link k-nav-today">Monday, October 29, 2021</a>
            </div>
        );
    }
}
