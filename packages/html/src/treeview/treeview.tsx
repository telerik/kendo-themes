import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { TreeviewGroup } from './treeview-group';
import { TreeviewItemProps } from './treeview-item';

export interface TreeviewProps {
    className?: string;
    children?: React.ReactElement<TreeviewItemProps> | React.ReactElement<TreeviewItemProps>[];
    size?: null | 'small' | 'medium' | 'large';
}

export class Treeview extends React.Component<TreeviewProps> {

    static defaultProps = {
        size: 'medium'
    };

    render() {
        const {
            className,
            size,
            children
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-treeview',
                    {
                        [`k-treeview-${kendoThemeMaps.sizeMap[size!] || size}`]: size
                    }
                )}
            >
                <TreeviewGroup className="k-treeview-lines">
                    {children}
                </TreeviewGroup>
            </div>
        );
    }
}
