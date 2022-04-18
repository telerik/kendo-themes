import * as React from 'react';
import { Icon } from '../icon';

export interface InputInnerSpanProps {
    value?: string;
    placeholder?: string;
    showValue?: boolean;
    valueIcon?: React.ReactNode;
    valueIconName?: string;
}

export class InputInnerSpan extends React.Component<InputInnerSpanProps> {

    render() {
        const {
            value,
            placeholder,
            valueIcon,
            showValue,
            valueIconName
        } = this.props;

        return (
            <span className="k-input-inner">
                {valueIcon}
                {!valueIcon && valueIconName && <Icon className="k-input-value-icon" name={valueIconName} />}
                {showValue && !value && placeholder}
                {showValue && value && <span className="k-input-value-text">{value}</span>}
            </span>
        );
    }
}
