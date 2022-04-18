import * as React from 'react';
import { classNames } from '../utils';
import { CardProps } from '../card';

export interface CardDeckProps {
    children?: React.ReactElement<CardProps>[];
    className?: string;
}

export class CardDeck extends React.Component<CardDeckProps> {

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
                    'k-card-deck',
                    className
                )}>
                {children}
            </div>
        );
    }
}
