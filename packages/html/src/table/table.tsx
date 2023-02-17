import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface TableProps {
    children?: React.ReactNode;
    className?: string;
    size?: null | 'small' | 'medium' | 'large';
}


export class Table extends React.Component<TableProps> {

    render() {
        const {
            children,
            className,
            size,
        } = this.props;

        return (
            <table
                className={classNames(
                    className,
                    'k-table',
                    {
                        [`k-table-${kendoThemeMaps.sizeMap[size!]}`]: size,
                    }
                )}>
                {children}
            </table>
        );
    }
}
