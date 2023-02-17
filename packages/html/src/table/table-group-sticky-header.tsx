import * as React from 'react';
import { classNames } from '../utils';

export interface TableGroupStickyHeaderProps {
    children?: React.ReactNode;
    className?: string;
}


export class TableGroupStickyHeader extends React.Component<TableGroupStickyHeaderProps> {

    render() {
        const {
            children,
            className,
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-table-group-sticky-header'
                )}>
                {children}
            </div>
        );
    }
}
