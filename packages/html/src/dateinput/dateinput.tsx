import * as React from 'react';
import { classNames } from '../utils';
import { SpinButton } from '../spinbutton';
import {
    Input,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon
} from '../input';

export interface DateInputProps {
    className?: string;
    value?: string;
    placeholder?: string;
    size?: null | 'small' | 'medium' | 'large';
    rounded?: null | 'small' | 'medium' | 'large' | 'full';
    fillMode?: null | 'solid' | 'outline' | 'flat';
    hover?: boolean;
    focus?: boolean;
    valid?: boolean;
    invalid?: boolean
    required?: boolean;
    loading?: boolean;
    disabled?: boolean;
    showSpinButton?: boolean;
}

export class DateInput extends React.Component<DateInputProps> {

    static defaultProps = {
        showSpinButton: true
    };

    render() {
        const {
            className,
            value,
            placeholder,
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
            showSpinButton
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
                className={classNames(className, 'k-dateinput')}
            >
                <InputInnerInput placeholder={placeholder} value={value} />
                <InputValidationIcon {...this.props} />
                <InputLoadingIcon {...this.props} />
                <InputClearValue {...this.props} />
                {showSpinButton && (
                    <SpinButton
                        className="k-input-spinner"
                        size={size}
                        fillMode={fillMode}
                    />
                )}
            </Input>
        );

    }
}
