import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface TableListProps {
    children?: React.ReactNode;
    className?: string;
    size?: null | 'small' | 'medium' | 'large';
    virtualization?: boolean;
}


export class TableList extends React.Component<TableListProps> {

    render() {
        const {
            children,
            className,
            size,
            virtualization,
        } = this.props;

        return (
            <ul
                className={classNames(
                    className,
                    'k-table',
                    'k-table-list',
                    {
                        [`k-table-${kendoThemeMaps.sizeMap[size!]}`]: size,
                        'k-virtual-table': virtualization,
                    }
                )}>
                {children}
            </ul>
        );
    }
}
