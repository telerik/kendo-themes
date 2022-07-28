import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface PopoverProps {
    children?: React.ReactNode;
    className?: string;
    callout?: null | 'top' | 'bottom' | 'left' | 'right';
    title?: string;
    body?: React.ReactNode;
}

export class Popover extends React.Component<PopoverProps & React.HTMLProps<HTMLDivElement>> {

    render() {
        const {
            className,
            children,
            callout,
            title,
            body,
            ...htmlAttributes
        } = this.props;

        return (
            <div className={classNames(className, 'k-popover')} {...htmlAttributes}>
                {callout &&
                    <div className={classNames(
                        'k-popover-callout',
                        {
                            [`k-callout-${kendoThemeMaps.calloutMap[callout!] || callout}`]: callout
                        }
                    )}></div>
                }
                <div className="k-popover-inner">
                    {title && <div className="k-popover-header">{title}</div>}
                    {body && <div className="k-popover-body">{body}</div>}
                    <>{children}</>
                </div>
            </div>
        );
    }
}
