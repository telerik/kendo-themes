import * as React from 'react';
import { classNames } from '../utils';
import { CardCallout } from '../card';

export interface CardProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    orientation?: null | 'vertical' | 'horizontal';
    themeColor?: null | 'primary' | 'info' | 'success' | 'warning' | 'error';
    callout?: null | 'true' | 'top' | 'bottom' | 'left' | 'right';
    hover?: boolean;
    focus?: boolean;
    selected?: boolean;
    disabled?: boolean;
}

export class Card extends React.Component<CardProps> {

    render() {
        const {
            children,
            className,
            orientation,
            themeColor,
            callout,
            hover,
            focus,
            selected,
            disabled,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                style={this.props.style}
                {...htmlAttributes}
                className={classNames(
                    'k-card',
                    {
                        [`k-card-${themeColor}`]: themeColor,
                        [`k-card-${orientation}`]: orientation,
                        'k-card-with-callout': callout,
                        'k-hover': hover,
                        'k-focus': focus,
                        'k-selected': selected,
                        'k-disabled': disabled
                    },
                    className
                )}>
                {callout && callout !== 'true' &&
                    <CardCallout callout={callout} />
                }
                <>{children}</>
            </div>
        );
    }
}
