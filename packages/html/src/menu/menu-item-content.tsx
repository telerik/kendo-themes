import * as React from 'react';
import { classNames } from '../utils';


export interface MenuItemContentProps {
    className?: string;
    children?: React.ReactNode;
}

export class MenuItemContent extends React.Component<MenuItemContentProps> {


    render() {
        const {
            className,
            children,
        } = this.props;

        if (!children) {
            return <></>;
        }

        return (
            <span
                className={classNames(
                    className,
                    'k-menu-item-content',
                )}>
                {children}
            </span>
        );
    }
}
