import * as React from 'react';
import { classNames } from '../utils';

export interface TableListRowProps {
    children?: React.ReactNode;
    className?: string;
    alt?: boolean;
    hover?: boolean;
    focus?: boolean;
    selected?: boolean;
    disabled?: boolean;
}


export class TableListRow extends React.Component<TableListRowProps> {

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
            <li
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
            </li>
        );
    }
}
