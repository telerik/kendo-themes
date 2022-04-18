import * as React from 'react';
import { classNames } from '../utils';
import { CardTitle, CardSubtitle } from '../card';
import { Button } from '../button';

export interface CardHeaderProps {
    children?: React.ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
    details?: boolean;
}

export class CardHeader extends React.Component<CardHeaderProps> {

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
                {...htmlAttributes}
                className={classNames(
                    'k-card-header',
                    className
                )}>
                {title && <CardTitle>{title}</CardTitle>}
                {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}

                <>{children}</>

                {details &&
                    <span className="k-card-header-actions">
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
