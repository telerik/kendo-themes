import * as React from 'react';
import { classNames } from '../utils';

export interface ListContentProps {
    children?: React.ReactNode;
    className?: string;
    virtualization?: boolean,
}


export class ListContent extends React.Component<ListContentProps> {

    render() {
        const {
            children,
            className,
            virtualization,
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-list-content'
                )}>
                <ul className={classNames('k-list-ul')}>
                    {children}
                </ul>
                { virtualization && <div className="k-height-container"><div></div></div> }
            </div>

        );
    }
}
