import * as React from 'react';
import { classNames } from '../utils';

export interface ListGroupItemProps {
    children?: React.ReactNode;
    className?: string;
}


export class ListGroupItem extends React.Component<ListGroupItemProps> {

    render() {
        const {
            children,
            className,
        } = this.props;


        return (
            <li
                className={classNames(
                    className,
                    'k-list-group-item'
                )}>
                <span className="k-list-item-text">{children}</span>
            </li>
        );
    }
}
