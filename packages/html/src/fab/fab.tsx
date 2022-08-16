import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { Icon } from '../icon';

export interface FloatingActionButtonProps {
    className?: string;
    style?: React.CSSProperties;
    text?: string;
    icon?: string;
    type?: 'button' | 'submit' | 'reset';
    size?: null | 'small' | 'medium' | 'large';
    rounded: null | 'small' | 'medium' | 'large' | 'full';
    shape?: null | 'rectangle' | 'square';
    fillMode?: null | 'solid';
    themeColor?: null | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse';
    position?: null | 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
    hover?: boolean;
    focus?: boolean;
    active?: boolean;
    selected?: boolean;
    disabled?: boolean;
}

export class FloatingActionButton extends React.Component<FloatingActionButtonProps> {

    static defaultProps = {
        type: 'button',
        size: 'medium',
        shape: 'rectangle',
        rounded: 'full',
        fillMode: 'solid',
        themeColor: 'primary'
    };

    render() {
        const {
            className,
            style,
            text,
            icon,
            type,
            size,
            shape,
            rounded,
            fillMode,
            themeColor,
            position,
            hover,
            focus,
            active,
            selected,
            disabled,
            ...htmlAttributes
        } = this.props;

        return (
            <button
                {...htmlAttributes}
                type={type}
                className={classNames(
                    className,
                    'k-fab',
                    {
                        [`k-fab-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                        [`k-fab-${shape}`]: shape,
                        [`k-fab-${fillMode}`]: fillMode,
                        [`k-fab-${fillMode}-${themeColor}`]: Boolean(fillMode && themeColor),
                        [`k-rounded-${kendoThemeMaps.roundedMap[rounded!] || rounded}`]: rounded,
                        [`!k-pos-absolute k-${position}`]: position,
                        'k-hover': hover,
                        'k-focus': focus,
                        'k-active': active,
                        'k-selected': selected,
                        'k-disabled': disabled
                    }
                )}
                style={style}>
                {icon && <Icon className="k-fab-icon" name={icon} /> }
                {text && <span className="k-fab-text">{text}</span>}
            </button>
        );
    }
}
