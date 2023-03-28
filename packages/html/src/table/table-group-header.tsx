import * as React from 'react';
import { classNames } from '../utils';

export interface TableGroupHeaderProps {
    children?: React.ReactNode;
    className?: string;
}


export class TableGroupHeader extends React.Component<TableGroupHeaderProps> {

    render() {
        const {
            children,
            className,
        } = this.props;

        return (
            <tr
                className={classNames(
                    className,
                    'k-table-group-header'
                )}>
                {children}
            </tr>
        );
    }
}
