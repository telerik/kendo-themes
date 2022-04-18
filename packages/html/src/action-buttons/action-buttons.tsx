import * as React from 'react';
import { ButtonProps } from '../button';
import { classNames } from '../utils';

export interface ActionButtonsProps {
    children?: React.ReactElement<ButtonProps>|React.ReactElement<ButtonProps>[];
    className?: string;
    alignment?: 'start' | 'center' | 'end' | 'stretched';
    orientation?: 'horizontal' | 'vertical';
}

export class ActionButtons extends React.Component<ActionButtonsProps> {

    static defaultProps = {
        alignment: 'start',
        orientation: 'horizontal'
    };

    render() {
        const {
            children,
            className,
            alignment,
            orientation,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    'k-actions',
                    {
                        [`k-actions-${alignment}`]: alignment,
                        [`k-actions-${orientation}`]: orientation
                    },
                    className
                )}>
                {children}
            </div>
        );
    }
}
