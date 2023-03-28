import * as React from 'react';
import { classNames } from '../utils';
import { Table } from './table';

export interface TableHeaderProps {
    children?: React.ReactNode;
    className?: string;
}


export class TableHeader extends React.Component<TableHeaderProps> {

    render() {
        const {
            children,
            className,
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-table-header'
                )}>
                <div className="k-table-header-wrap">
                    <Table>{children}</Table>
                </div>
            </div>
        );
    }
}
