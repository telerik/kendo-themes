import * as React from 'react';
import { classNames } from '../utils';

export interface TypographyProps {
    children?: React.ReactNode;
    className?: string;
    type: 'body' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'code' | 'pre' | 'display-1' | 'display-2' | 'display-3' | 'display-4';
}

export class Typography extends React.Component<TypographyProps> {

    render() {
        const {
            children,
            className,
            type,
            ...htmlAttributes
        } = this.props;

        const typeClass = type === 'p' ? 'paragraph' : type;
        const Component = type.includes('display') ? 'div' : type as React.ElementType;

        return (
            <Component
                {...htmlAttributes}
                className={classNames(
                    {
                        [`k-${typeClass}`]: type,
                    },
                    className
                )}>
                {children}
            </Component>
        );
    }
}
