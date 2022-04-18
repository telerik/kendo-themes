import * as React from 'react';
import { classNames } from '../utils';

export interface NoDataProps {
    children?: React.ReactNode;
    className?: string;
}

export class NoData extends React.Component<NoDataProps> {

    render() {
        const {
            children,
            className
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-nodata',
                )}>
                {children}
            </div>
        );
    }
}
