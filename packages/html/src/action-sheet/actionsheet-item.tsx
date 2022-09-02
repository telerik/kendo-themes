import * as React from 'react';
import { classNames } from '../utils';
import { Icon } from '../icon';

export interface ActionSheetItemProps {
    children?: React.ReactNode;
    className?: string;
    text?: string;
    description?: string;
    iconName?: string;
    hover?: boolean;
    focus?: boolean;
    selected?: boolean;
    disabled?: boolean;
}


export class ActionSheetItem extends React.Component<ActionSheetItemProps> {

    render() {
        const {
            children,
            className,
            iconName,
            text,
            description,
            hover,
            focus,
            selected,
            disabled,
        } = this.props;


        return (
            <li
                className={classNames(
                    className,
                    'k-actionsheet-item',
                    {
                        'k-hover': hover,
                        'k-focus': focus,
                        'k-selected': selected,
                        'k-disabled': disabled
                    }
                )}>
                {!children && (text !== '' || description !== '' || iconName !== '') && <>
                    <a href="#" className="k-actionsheet-action">
                        { iconName !== '' && <span className="k-icon-wrap"><Icon className="k-actionsheet-item-icon" name={iconName} /></span> }
                        <span className="k-actionsheet-item-text">
                            { text !== '' && <span className="k-actionsheet-item-title">{text}</span> }
                            { description !== '' && <span className="k-actionsheet-item-description">{description}</span> }
                        </span>
                    </a>
                </>}
                {children}
            </li>
        );
    }
}
