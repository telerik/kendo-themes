import * as React from 'react';
import { Icon } from '../icon';
import { Checkbox } from '../checkbox';
import { classNames } from '../utils';
import { TreeViewLeaf } from './treeview-leaf';

export interface TreeviewItemProps {
    className?: string;
    leafClassName?: string;
    children?: any;
    hasChildren?: boolean;
    expanded?: boolean;
    text?: string;
    showIcon?: boolean;
    icon?: string;
    showCheckbox?: boolean;
    checked?: boolean;
    hover?: boolean;
    focus?: boolean;
    selected?: boolean;
    disabled?: boolean;
}

export class TreeviewItem extends React.Component<TreeviewItemProps> {

    render() {
        const {
            className,
            leafClassName,
            children,
            hasChildren,
            expanded,
            text,
            showIcon,
            icon,
            showCheckbox,
            checked,
            hover,
            focus,
            selected,
            disabled
        } = this.props;

        const _hasChildren = hasChildren || children;

        return (
            <li
                className={classNames(
                    className,
                    'k-treeview-item'
                )}
            >
                <span className="k-treeview-mid">
                    {_hasChildren && (
                        <span
                            className={classNames(
                                "k-treeview-toggle",
                                {
                                    'k-disabled': disabled
                                }
                            )}>
                            <Icon name={expanded ? 'collapse' : 'expand'} />
                        </span>
                    )}
                    {showCheckbox && (
                        <Checkbox checked={checked} disabled={disabled} />
                    )}
                    <TreeViewLeaf
                        className={classNames(
                            leafClassName,
                            {
                                'k-disabled': disabled
                            }
                        )}
                        text={text}
                        showIcon={showIcon}
                        icon={icon}
                        hover={hover}
                        focus={focus}
                        selected={selected}
                    />
                </span>
                {expanded && _hasChildren && (
                    <>
                        {children}
                    </>
                )}
            </li>
        );
    }
}
