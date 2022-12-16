import * as React from 'react';
import { classNames } from '../utils';
import { Button } from '../button';


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
                <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today">Monday, October 29, 2021</Button>
            </div>
        );
    }
}
