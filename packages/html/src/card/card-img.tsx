import * as React from 'react';
import { classNames } from '../utils';

export interface CardImageProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    src?: string;
}

export class CardImage extends React.Component<CardImageProps> {

    render() {
        const {
            children,
            className,
            src,
            ...htmlAttributes
        } = this.props;

        return (
            <>
                {
                    src
                        ? <img
                            style={this.props.style}
                            {...htmlAttributes}
                            className={classNames(
                                'k-card-image',
                                className
                            )}
                            src={src}
                        />
                        : <span
                            style={this.props.style}
                            {...htmlAttributes}
                            className={classNames(
                                'k-card-image',
                                className
                            )}
                        ><>{children}</></span>
                }
            </>
        );
    }
}
