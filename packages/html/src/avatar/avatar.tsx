import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export enum avatarType {
    TEXT = 'text',
    IMAGE = 'image',
    ICON = 'icon'
}

export interface AvatarProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    type?: avatarType | string;
    border?: boolean;
    size?: null | 'small' | 'medium' | 'large';
    rounded: null | 'small' | 'medium' | 'large' | 'full';
    fillMode?: null | 'solid' | 'outline';
    themeColor?: null | 'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse';
}

export class Avatar extends React.Component<AvatarProps> {

    static defaultProps = {
        type: avatarType.TEXT,
        size: 'medium',
        rounded: 'full',
        fillMode: 'solid',
        themeColor: 'primary',
        border: false
    };

    render() {
        const {
            children,
            className,
            type,
            size,
            rounded,
            fillMode,
            themeColor,
            border,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                style={this.props.style}
                { ...htmlAttributes }
                className={classNames(
                    'k-avatar',
                    {
                        [`k-rounded-${kendoThemeMaps.roundedMap[rounded!] || rounded}`]: rounded,
                        [`k-avatar-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                        [`k-avatar-${fillMode}`]: fillMode,
                        [`k-avatar-${fillMode}-${themeColor}`]: Boolean(fillMode && themeColor),
                        ['k-avatar-bordered']: border
                    },
                    className
                )}
            >
                <span className={`k-avatar-${type}`}>
                    {children}
                </span>
            </div>
        );
    }
}
