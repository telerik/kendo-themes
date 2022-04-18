import * as React from 'react';
import { classNames } from '../utils';

export interface CardFooterProps {
    children?: React.ReactNode;
    className?: string;
}

export class CardFooter extends React.Component<CardFooterProps> {

    render() {
        const {
            children,
            className,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    'k-card-footer',
                    className
                )}>
                {children}
            </div>
        );
    }
}
