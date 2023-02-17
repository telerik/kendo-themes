import * as React from 'react';
import { classNames } from '../utils';

export interface TableRowProps {
    children?: React.ReactNode;
    className?: string;
    alt?: boolean;
    hover?: boolean;
    focus?: boolean;
    selected?: boolean;
    disabled?: boolean;
}


export class TableRow extends React.Component<TableRowProps> {

    render() {
        const {
            children,
            className,
            alt,
            hover,
            focus,
            selected,
            disabled,
        } = this.props;

        return (
            <tr
                className={classNames(
                    className,
                    'k-table-row',
                    {
                        'k-table-alt-row': alt,
                        'k-hover': hover,
                        'k-focus': focus,
                        'k-selected': selected,
                        'k-disabled': disabled
                    }
                )}>
                {children}
            </tr>
        );
    }
}
