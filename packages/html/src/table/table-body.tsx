import * as React from 'react';
import { classNames } from '../utils';

export interface TableBodyProps {
    children?: React.ReactNode;
    className?: string;
}


export class TableBody extends React.Component<TableBodyProps> {

    render() {
        const {
            children,
            className,
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-table-body',
                    'k-table-scroller'
                )}>
                {children}
            </div>
        );
    }
}
