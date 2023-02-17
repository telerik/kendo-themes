import * as React from 'react';
import { classNames } from '../utils';

export interface TableListTdProps {
    children?: React.ReactNode;
    className?: string;
    text?: string;
    style?: React.CSSProperties;
}


export class TableListTd extends React.Component<TableListTdProps> {

    render() {
        const {
            children,
            className,
            text,
            ...htmlAttributes
        } = this.props;

        const textOrChildren = text
            ? text
            : children;

        return (
            <span
                style={this.props.style}
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-table-td'
                )}>
                {textOrChildren}
            </span>
        );
    }
}
