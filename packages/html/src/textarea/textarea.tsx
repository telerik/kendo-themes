import * as React from 'react';
import { classNames } from '../utils';
import { Input, InputInnerTextarea } from '../input';

export interface TextareaProps {
    className?: string;
    value?: string;
    placeholder?: string;
    size?: null | 'small' | 'medium' | 'large';
    rounded?: null | 'small' | 'medium' | 'large' | 'full';
    fillMode?: null | 'solid' | 'outline' | 'flat';
    rows?: number;
    hover?: boolean;
    focus?: boolean;
    valid?: boolean;
    invalid?: boolean
    required?: boolean;
    loading?: boolean;
    disabled?: boolean;
}

export class Textarea extends React.Component<TextareaProps> {

    render() {
        const {
            className,
            placeholder,
            value,
            rows,
            size,
            rounded,
            fillMode,
            hover,
            focus,
            valid,
            invalid,
            required,
            loading,
            disabled,
        } = this.props;

        return (
            <Input
                size={size}
                rounded={rounded}
                fillMode={fillMode}
                hover={hover}
                focus={focus}
                valid={valid}
                invalid={invalid}
                required={required}
                loading={loading}
                disabled={disabled}
                className={classNames(className, 'k-textarea')}
            >
                <InputInnerTextarea
                    className="!k-overflow-auto"
                    value={value}
                    placeholder={placeholder}
                    rows={rows}
                />
            </Input>
        );
    }
}
