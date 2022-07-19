import * as React from 'react';
import { classNames } from '../utils';
import { Button } from '../button';
import {
    Input,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputPrefix,
    InputSuffix,
    InputValidationIcon
} from '../input';

export interface ComboboxProps {
    className?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
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
    hoverButton?: boolean;
}

export class Combobox extends React.Component<ComboboxProps> {

    render() {
        const {
            className,
            prefix,
            suffix,
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
            hoverButton
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
                className={classNames(className, 'k-combobox')}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerInput placeholder={placeholder} value={value} />
                <InputSuffix>{suffix}</InputSuffix>
                <InputValidationIcon {...this.props} />
                <InputLoadingIcon {...this.props} />
                <InputClearValue {...this.props} />
                <Button
                    className="k-input-button"
                    icon="arrow-s"
                    rounded={null}
                    size={this.props.size}
                    fillMode={this.props.fillMode}
                    hover={hoverButton}
                />
            </Input>
        );

    }
}
