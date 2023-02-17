import * as React from 'react';
import { classNames } from '../utils';

export interface TableGroupRowProps {
    children?: React.ReactNode;
    className?: string;
}


export class TableGroupRow extends React.Component<TableGroupRowProps> {

    render() {
        const {
            children,
            className,
        } = this.props;

        return (
            <tr
                className={classNames(
                    className,
                    'k-table-group-row'
                )}>
                {children}
            </tr>
        );
    }
}
