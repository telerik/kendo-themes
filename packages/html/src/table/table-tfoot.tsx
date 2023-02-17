import * as React from 'react';
import { classNames } from '../utils';

export interface TableTfootProps {
    children?: React.ReactNode;
    className?: string;
}


export class TableTfoot extends React.Component<TableTfootProps> {

    render() {
        const {
            children,
            className,
        } = this.props;

        return (
            <tfoot
                className={classNames(
                    className,
                    'k-table-tfoot'
                )}>
                {children}
            </tfoot>
        );
    }
}
