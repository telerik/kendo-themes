import * as React from 'react';
import { classNames } from '../utils';

export interface AppbarProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    className?: string;
    themeColor?: null | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse' | 'inherit';
    positionMode?: 'static' | 'sticky' | 'fixed';
    position?: 'top' | 'bottom';
}

export class Appbar extends React.Component<AppbarProps> {
    render() {
        const {
            children,
            className,
            themeColor,
            positionMode,
            position,
            ...htmlAttributes
        } = this.props;

        return (
            <div className={classNames(className, 'k-appbar',
                {
                    [`k-appbar-${themeColor}`]: Boolean(themeColor),
                    [`k-appbar-${positionMode}`]: positionMode,
                    [`k-appbar-${position}`]: position
                })}
            {...htmlAttributes}
            >
                {children}
            </div>
        );
    }
}
