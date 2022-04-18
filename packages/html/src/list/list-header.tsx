import * as React from 'react';
import { classNames } from '../utils';

export interface ListHeaderProps {
    children?: React.ReactNode;
    className?: string;
}


export class ListHeader extends React.Component<ListHeaderProps> {

    render() {
        const {
            children,
            className,
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-list-group-sticky-header'
                )}>
                <div className="k-list-header-text">{children}</div>
            </div>

        );
    }
}
