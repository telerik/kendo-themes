import * as React from 'react';
import { classNames } from '../utils';
import { Checkbox } from '../checkbox';
import { Icon } from '../icon';

export interface ListItemProps {
    children?: React.ReactNode;
    className?: string;
    text?: string;
    groupLabel?: string;
    showIcon?: boolean;
    iconName?: string;
    showCheckbox?: boolean;
    checked?: boolean;
    hover?: boolean;
    focus?: boolean;
    selected?: boolean;
    disabled?: boolean;
}


export class ListItem extends React.Component<ListItemProps> {

    render() {
        const {
            children,
            className,
            text,
            groupLabel,
            showIcon,
            iconName,
            showCheckbox,
            checked,
            hover,
            focus,
            selected,
            disabled,
        } = this.props;

        const textOrChildren = text
            ? text
            : children;

        return (
            <li
                className={classNames(
                    className,
                    'k-list-item',
                    {
                        'k-hover': hover,
                        'k-focus': focus,
                        'k-selected': selected,
                        'k-disabled': disabled
                    }
                )}>
                {showCheckbox && <Checkbox checked={checked} />}
                {showIcon && <Icon name={iconName} />}
                <span className="k-list-item-text">{textOrChildren}</span>
                {groupLabel && groupLabel !== '' && <div className="k-list-item-group-label">{groupLabel}</div>}
            </li>
        );
    }
}
