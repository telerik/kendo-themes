import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface CardCalloutProps {
    className?: string;
    callout?: null | 'true' | 'top' | 'bottom' | 'left' | 'right';
}

export class CardCallout extends React.Component<CardCalloutProps> {

    render() {
        const {
            className,
            callout,
            ...htmlAttributes
        } = this.props;

        return (
            <span
                {...htmlAttributes}
                className={classNames(
                    'k-card-callout',
                    {
                        [`k-callout-${kendoThemeMaps.calloutMap[callout!] || callout}`]: callout
                    },
                    className
                )}>
            </span>
        );
    }
}
