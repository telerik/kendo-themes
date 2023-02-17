import * as React from 'react';
import { classNames } from '../utils';

export interface TableListThProps {
    children?: React.ReactNode;
    className?: string;
    text?: string;
    style?: React.CSSProperties;
}


export class TableListTh extends React.Component<TableListThProps> {

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
                    'k-table-th'
                )}>
                {textOrChildren}
            </span>
        );
    }
}
