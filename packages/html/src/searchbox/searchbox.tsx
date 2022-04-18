import * as React from 'react';
import { classNames } from '../utils';
import { Icon } from '../icon';
import {
    Input,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon
} from '../input';

export interface SearchboxProps {
    className?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    showIcon?: boolean;
    icon?: string;
    size?: null | 'small' | 'medium' | 'large';
    rounded?: null | 'small' | 'medium' | 'large' | 'full';
    fillMode?: null | 'solid' | 'outline' | 'flat';
    hover?: boolean;
    focus?: boolean;
    valid?: boolean;
    invalid?: boolean;
    required?: boolean;
    loading?: boolean;
    disabled?: boolean;
}

export class Searchbox extends React.Component<SearchboxProps> {

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
            showIcon = true,
            icon = 'search'
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
                className={classNames(className, 'k-searchbox')}
            >
                { showIcon && (<Icon className="k-input-icon" name={icon} />) }
                <InputInnerInput placeholder={placeholder} value={value} />
                <InputValidationIcon {...this.props} />
                <InputLoadingIcon {...this.props} />
                <InputClearValue {...this.props} />
            </Input>
        );
    }
}
