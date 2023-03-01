import * as React from 'react';
import { classNames } from '../utils';
import { Icon } from '../icon';


export interface MenuItemProps {
    className?: string;
    children?: React.ReactElement[];
    dir?: string;
    text?: string;
    icon?: string;
    size?: null | 'small' | 'medium' | 'large';
    hover?: boolean;
    focus?: boolean;
    active?: boolean;
    selected?: boolean;
    disabled?: boolean;
    showArrow?: boolean;
    arrowIconName?: string;
}

export class MenuItem extends React.Component<MenuItemProps> {

    static defaultProps = {
        size: 'medium',
        dir: 'ltr'
    };

    render() {
        const {
            className,
            children,
            text,
            icon,
            showArrow,
            arrowIconName,
            hover,
            focus,
            active,
            selected,
            disabled,
            dir,
        } = this.props;

        const contentTemplate = <></>;

        if (children) {
            children.forEach( child => {
                const component = child.type;

                if (component === 'MenuItemContent') {
                    contentTemplate.props.children.push( child );
                    return;
                }
            });
        }

        let expandArrowName = arrowIconName;

        if ( !expandArrowName ) {
            expandArrowName = dir === 'rtl'
                ? 'caret-alt-left'
                : 'caret-alt-right';
        }

        return (

            <li
                className={classNames(
                    className,
                    'k-item k-menu-item',
                    {
                        'k-disabled': disabled,
                        'k-focus': focus,
                    }
                )}>
                <span
                    className={classNames(
                        className,
                        'k-link k-menu-link',
                        {
                            'k-hover': hover,
                            'k-active': active,
                            'k-selected': selected,
                            'k-disabled': disabled
                        }
                    )}>
                    {icon && <Icon className="k-menu-link-icon" name={icon} />}
                    <span className="k-menu-link-text">{text}</span>
                    {showArrow && <span className="k-menu-expand-arrow"><Icon name={expandArrowName} /></span>}
                </span>
                {contentTemplate}
            </li>
        );
    }
}
