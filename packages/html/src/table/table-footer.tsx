import * as React from 'react';
import { classNames } from '../utils';

export interface TableFooterProps {
    children?: React.ReactNode;
    className?: string;
}


export class TableFooter extends React.Component<TableFooterProps> {

    render() {
        const {
            children,
            className,
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-table-footer'
                )}>
                {children}
            </div>
        );
    }
}
