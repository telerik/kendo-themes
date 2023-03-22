import * as React from 'react';
import { classNames } from '../utils';
import { Icon } from '../icon';

export interface FloatingActionButtonItemProps {
    className?: string;
    align?: 'left' | 'right';
    text?: string;
    icon?: string;
    hover?: boolean;
    focus?: boolean;
    active?: boolean;
    disabled?: boolean;
}

export class FloatingActionButtonItem extends React.Component<FloatingActionButtonItemProps> {

    render() {
        const {
            className,
            align,
            text,
            icon,
            hover,
            focus,
            active,
            disabled
        } = this.props;

        return (
            <li className={classNames(
                className,
                'k-fab-item',
                {
                    [`k-text-${align}`]: align,
                    'k-hover': hover,
                    'k-focus': focus,
                    'k-active': active,
                    'k-disabled': disabled
                }
            )}>
                <span className="k-fab-item-text">{text}</span>
                <Icon className="k-fab-item-icon" name={icon} />
            </li>
        );

    }
}
