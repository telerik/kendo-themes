import * as React from 'react';
import { classNames } from '../utils';

export interface TableTbodyProps {
    children?: React.ReactNode;
    className?: string;
}


export class TableTbody extends React.Component<TableTbodyProps> {

    render() {
        const {
            children,
            className,
        } = this.props;

        return (
            <tbody
                className={classNames(
                    className,
                    'k-table-tbody'
                )}>
                {children}
            </tbody>
        );
    }
}
