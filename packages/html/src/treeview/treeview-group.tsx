import * as React from 'react';
import { classNames } from '../utils';
import { TreeviewItemProps } from './treeview-item';

export interface TreeviewGroupProps {
    className?: string;
    children?: React.ReactElement<TreeviewItemProps> | React.ReactElement<TreeviewItemProps>[];
}

export class TreeviewGroup extends React.Component<TreeviewGroupProps> {

    render() {
        const {
            className,
            children
        } = this.props;

        return (
            <ul className={classNames(className, 'k-treeview-group')}>
                {children}
            </ul>
        );
    }
}
