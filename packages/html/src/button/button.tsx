import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { Icon } from '../icon/';

export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    dir?: string;
    style?: React.CSSProperties;
    iconClassName?: string;
    text?: string;
    icon?: string;
    size?: null | 'small' | 'medium' | 'large';
    rounded: null | 'small' | 'medium' | 'large' | 'full';
    fillMode?: null | 'solid' | 'outline' | 'flat' | 'link' | 'clear';
    themeColor?: null | 'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse';
    hover?: boolean;
    focus?: boolean;
    active?: boolean;
    selected?: boolean;
    disabled?: boolean;
}

export class Button extends React.Component<ButtonProps> {

    static defaultProps = {
        size: 'medium',
        rounded: 'medium',
        fillMode: 'solid',
        themeColor: 'base'
    };

    render() {
        const {
            children,
            className,
            iconClassName,
            text,
            icon,
            size,
            rounded,
            fillMode,
            themeColor,
            hover,
            focus,
            active,
            selected,
            disabled,
            ...htmlAttributes
        } = this.props;

        const hasIcon = (icon !== undefined);
        const hasChildren = children !== undefined;

        return (
            <button
                style={this.props.style}
                {...htmlAttributes}
                dir={this.props.dir}
                className={classNames(
                    className,
                    'k-button',
                    {
                        [`k-button-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                        [`k-button-${fillMode}`]: fillMode,
                        [`k-button-${fillMode}-${themeColor}`]: Boolean(fillMode && themeColor),
                        [`k-rounded-${kendoThemeMaps.roundedMap[rounded!] || rounded}`]: rounded,
                        'k-icon-button': !hasChildren && hasIcon,
                        'k-hover': hover,
                        'k-focus': focus,
                        'k-active': active,
                        'k-selected': selected,
                        'k-disabled': disabled
                    }
                )}>
                {icon && <Icon className={classNames(iconClassName, 'k-button-icon')} name={icon} />}

                {text || hasIcon
                    ?
                    <>
                        {text && <span className="k-button-text">{text}</span>}
                        {children}
                    </>
                    : children && <span className="k-button-text">{children}</span>
                }
            </button>
        );
    }
}
