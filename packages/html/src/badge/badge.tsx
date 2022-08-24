import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface BadgeProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    size?: null | 'small' | 'medium' | 'large';
    rounded?: null | 'small' | 'medium' | 'large' | 'full';
    fillMode?: null | 'solid' | 'outline';
    themeColor?: null | 'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse';
    cutoutBorder?: boolean;
    position?: null | 'edge' | 'inside' | 'outside';
    align?: null | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
}

export class Badge extends React.Component<BadgeProps> {

    static defaultProps = {

        size: 'medium',
        fillMode: 'solid',
        themeColor: 'primary',
        cutoutBorder: false,
    };

    render() {
        const {
            children,
            className,
            size,
            rounded,
            fillMode,
            themeColor,
            cutoutBorder,
            position,
            align,
            ...htmlAttributes
        } = this.props;

        return (
            <span
                style={this.props.style}
                { ...htmlAttributes }
                className={classNames(
                    'k-badge',
                    {
                        [`k-rounded-${kendoThemeMaps.roundedMap[rounded!] || rounded}`]: rounded,
                        [`k-badge-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                        [`k-badge-${fillMode}`]: fillMode,
                        [`k-badge-${fillMode}-${themeColor}`]: Boolean(fillMode && themeColor),
                        [`k-badge-${position}`]: position,
                        [`k-${align}`]: align,
                        ['k-badge-border-cutout']: cutoutBorder
                    },
                    className
                )}
            >
                {children}
            </span>
        );
    }
}
