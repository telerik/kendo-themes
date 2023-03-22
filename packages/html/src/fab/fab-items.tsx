import * as React from 'react';
import { classNames } from '../utils';

export interface FloatingActionButtonItemsProps {
    className?: string;
    position?: null | 'top' | 'bottom';
    children?: React.ReactNode;
}

export class FloatingActionButtonItems extends React.Component<FloatingActionButtonItemsProps> {

    render() {
        const {
            className,
            position,
            children
        } = this.props;

        return (
            <ul className={classNames(
                className,
                'k-fab-items',
                {
                    [`k-fab-items-${position}`]: position
                }
            )}>
                {children}
            </ul>
        );

    }
}
