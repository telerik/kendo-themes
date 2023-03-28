import * as React from 'react';
import { classNames } from '../utils';

export interface TableTdProps {
    children?: React.ReactNode;
    className?: string;
    text?: string;
    colspan?: any;
}


export class TableTd extends React.Component<TableTdProps> {

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
            <td
                colSpan={colspan}
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-table-td'
                )}>
                {textOrChildren}
            </td>
        );
    }
}
