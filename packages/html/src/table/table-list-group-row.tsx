import * as React from 'react';
import { classNames } from '../utils';

export interface TableListGroupRowProps {
    children?: React.ReactNode;
    className?: string;
}


export class TableListGroupRow extends React.Component<TableListGroupRowProps> {

    render() {
        const {
            children,
            className,
        } = this.props;

        return (
            <li
                className={classNames(
                    className,
                    'k-table-group-row'
                )}>
                {children}
            </li>
        );
    }
}
