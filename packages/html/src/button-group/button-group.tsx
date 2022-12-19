import * as React from 'react';
import { ButtonProps } from '../button';
import { classNames } from '../utils';

export interface ButtonGroupProps {
    children?: React.ReactElement<ButtonProps>[];
    className?: string;
    fillMode?: null | 'solid' | 'outline' | 'flat' | 'link' | 'clear';
    disabled?: boolean;
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
            disabled,
            ...htmlAttributes
        } = this.props;

        function modifyChildren(child) {
            const className = classNames(
                child.props.className,
                {
                    'k-disabled': disabled
                }
            );

            const props = {
                className
            };

            return React.cloneElement(child, props);
        }

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-button-group',
                    {
                        [`k-button-group-${fillMode}`]: fillMode,
                        'k-disabled': disabled
                    }
                )}>
                { React.Children.map(children, child => modifyChildren(child)) }
            </div>
        );
    }
}
