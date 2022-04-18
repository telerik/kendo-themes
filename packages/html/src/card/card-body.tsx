import * as React from 'react';
import { classNames } from '../utils';
import { CardTitle, CardSubtitle } from '../card';
import { Button } from '../button';

export interface CardBodyProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    title?: string;
    subtitle?: string;
    details?: boolean;
}

export class CardBody extends React.Component<CardBodyProps> {

    render() {
        const {
            children,
            className,
            title,
            subtitle,
            details,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                style={this.props.style}
                {...htmlAttributes}
                className={classNames(
                    'k-card-body',
                    className
                )}>
                {title && <CardTitle>{title}</CardTitle>}
                {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}

                <>{children}</>

                {details &&
                    <span className="k-card-body-actions">
                        <Button
                            className="k-card-details"
                            icon="more-vertical"
                            rounded="medium"
                            size="medium"
                            fillMode="flat"
                            themeColor="base"
                        />
                    </span>
                }
            </div>
        );
    }
}
