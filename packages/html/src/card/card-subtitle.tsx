import * as React from 'react';
import { classNames } from '../utils';

export interface CardSubtitleProps {
    children?: React.ReactNode;
    className?: string;
}

export class CardSubtitle extends React.Component<CardSubtitleProps> {

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
                    'k-card-subtitle',
                    className
                )}>
                {children}
            </div>
        );
    }
}
