import * as React from 'react';
import { ButtonProps } from '../button';
import { classNames } from '../utils';

export interface ButtonGroupProps {
    children?: React.ReactElement<ButtonProps>[];
    className?: string;
    fillMode?: null | 'solid' | 'outline' | 'flat' | 'link' | 'clear';
}

export class ButtonGroup extends React.Component<ButtonGroupProps> {

    static defaultProps = {
        fillMode: 'solid'
    };

    render() {
        const {
            children,
            className,
            fillMode = ButtonGroup.defaultProps.fillMode,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-button-group',
                    {
                        [`k-button-group-${fillMode}`]: fillMode
                    }
                )}>
                {children}
            </div>
        );
    }
}
