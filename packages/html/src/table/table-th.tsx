import * as React from 'react';
import { classNames } from '../utils';

export interface TableThProps {
    children?: React.ReactNode;
    className?: string;
    text?: string;
    colspan?: any;
}


export class TableTh extends React.Component<TableThProps> {

    render() {
        const {
            children,
            className,
            text,
            colspan,
            ...htmlAttributes
        } = this.props;

        const textOrChildren = text
            ? text
            : children;

        return (
            <th
                colSpan={colspan}
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-table-th'
                )}>
                {textOrChildren}
            </th>
        );
    }
}
