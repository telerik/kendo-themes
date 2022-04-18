import * as React from 'react';
import { classNames } from '../utils';

export interface FloatingLabelProps {
    className?: string;
    children?: React.ReactNode;
    label?: string;
    focus?: boolean;
    valid?: boolean;
    invalid?: boolean;
    empty?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
}

export class FloatingLabel extends React.Component<FloatingLabelProps> {

    render() {
        const {
            className,
            children,
            label,
            focus,
            valid,
            invalid,
            empty,
            disabled,
            style,
        } = this.props;

        return (
            <span
                className={classNames(
                    className,
                    'k-floating-label-container',
                    {
                        'k-focus': focus,
                        'k-valid': valid,
                        'k-invalid': invalid,
                        'k-empty': empty,
                        'k-disabled': disabled
                    }
                )}
                style={style}
            >
                {children}
                { label && (
                    <label className="k-label">
                        {label}
                    </label>
                )}
            </span>
        );
    }
}
