import * as React from 'react';
import { classNames } from '../utils';

export interface TableTheadProps {
    children?: React.ReactNode;
    className?: string;
}


export class TableThead extends React.Component<TableTheadProps> {

    render() {
        const {
            children,
            className,
        } = this.props;

        return (
            <thead
                className={classNames(
                    className,
                    'k-table-thead'
                )}>
                {children}
            </thead>
        );
    }
}
