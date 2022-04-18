import * as React from 'react';
import { Avatar } from '../avatar';
import { Icon } from '../icon';
import { ChipActionProps } from '../chip';
import { classNames, kendoThemeMaps } from '../utils';

export interface ChipProps {
    children?: React.ReactNode;
    className?: string;
    text?: string;
    icon?: string;
    actions?: React.ReactElement<ChipActionProps> | React.ReactElement<ChipActionProps>[];
    showAvatar?: boolean;
    size?: null | 'small' | 'medium' | 'large';
    rounded?: null | 'small' | 'medium' | 'large' | 'full';
    fillMode?: null | 'solid' | 'outline';
    themeColor?: null | 'base' | 'info' | 'success' | 'warning' | 'error';
    hover?: boolean;
    focus?: boolean;
    active?: boolean;
    selected?: boolean;
    disabled?: boolean;
}

export class Chip extends React.Component<ChipProps> {

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
            text,
            icon,
            actions,
            showAvatar,
            size,
            rounded,
            fillMode,
            themeColor,
            hover,
            focus,
            active,
            selected,
            disabled
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-chip',
                    {
                        [`k-chip-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                        [`k-chip-${fillMode}`]: fillMode,
                        [`k-chip-${fillMode}-${themeColor}`]: Boolean(fillMode && themeColor),
                        [`k-rounded-${kendoThemeMaps.roundedMap[rounded!] || rounded}`]: rounded,
                        'k-hover': hover,
                        'k-focus': focus,
                        'k-active': active,
                        'k-selected': selected,
                        'k-disabled': disabled
                    }
                )}
            >
                {icon && <Icon className="k-chip-icon" name={icon} /> }
                {showAvatar && (
                    <Avatar className="k-chip-avatar" type="image" >
                        <img src="/packages/html/assets/avatar.jpg" />
                    </Avatar>
                )}
                <span className="k-chip-content">
                    { children
                        ? children
                        : text && <span className="k-chip-label k-text-ellipsis">{text}</span>
                    }
                </span>
                { actions && (
                    <span className="k-chip-actions">
                        {actions}
                    </span>
                )}
            </div>
        );
    }
}
