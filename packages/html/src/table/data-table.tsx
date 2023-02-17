import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';

export interface DataTableProps {
    children?: React.ReactNode;
    className?: string;
    size?: null | 'small' | 'medium' | 'large';
}


export class DataTable extends React.Component<DataTableProps> {

    static defaultProps = {
        size: 'medium',
    };

    render() {
        const {
            children,
            className,
            size,
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-data-table',
                    {
                        [`k-table-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                    }
                )}>
                {children}
            </div>
        );
    }
}
