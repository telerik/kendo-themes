import * as React from 'react';
import { classNames } from '../utils';

export interface CardTitleProps {
    children?: React.ReactNode;
    className?: string;
    hover?: boolean;
    focus?: boolean;
}

export class CardTitle extends React.Component<CardTitleProps> {

    render() {
        const {
            children,
            className,
            hover,
            focus,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    'k-card-title',
                    {
                        'k-hover': hover,
                        'k-focus': focus,
                    },
                    className
                )}>
                {children}
            </div>
        );
    }
}
