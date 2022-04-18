import * as React from 'react';
import { Icon } from '../icon';
import { classNames } from '../utils';

export interface TreeViewLeafProps {
    className?: string;
    text?: string;
    showIcon?: boolean;
    icon?: string;
    hover?: boolean;
    focus?: boolean;
    selected?: boolean;
}

export class TreeViewLeaf extends React.Component<TreeViewLeafProps> {

    render() {
        const {
            className,
            text,
            showIcon,
            icon,
            hover,
            focus,
            selected
        } = this.props;

        return (
            <span
                className={classNames(
                    className,
                    'k-treeview-leaf',
                    {
                        'k-hover': hover,
                        'k-focus': focus,
                        'k-selected': selected
                    }
                )}
            >
                {showIcon && <Icon name={icon} />}
                <span className="k-treeview-leaf-text">
                    {text}
                </span>
            </span>
        );
    }
}
