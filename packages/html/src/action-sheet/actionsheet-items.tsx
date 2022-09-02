import * as React from 'react';
import { classNames } from '../utils';

export interface ActionSheetItemsProps {
    children?: React.ReactNode;
    className?: string;
}


export class ActionSheetItems extends React.Component<ActionSheetItemsProps> {

    render() {
        const {
            children,
            className,
        } = this.props;

        return (
            <ul className={classNames(
                'k-list-ul',
                className
            )}>
                {children}
            </ul>
        );
    }
}
