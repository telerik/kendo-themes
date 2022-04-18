import * as React from 'react';
import { classNames } from '../utils';
import { Button } from '../button';
import {
    Picker,
    InputInnerSpan,
    InputLoadingIcon,
    InputPrefix,
    InputSuffix,
    InputValidationIcon
} from '../input';

export interface DropdownListProps {
    className?: string;
    style?: React.CSSProperties,
    valueIconName?: string;
    arrowIconName?: string;
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
    showValue?: boolean;
}

export class DropdownList extends React.Component<DropdownListProps> {

    static defaultProps = {
        showValue: true,
        arrowIconName: 'arrow-s'
    };

    render() {
        const {
            className,
            style,
            valueIconName,
            arrowIconName,
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
            showValue
        } = this.props;

        return (
            <Picker
                style={style}
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
                className={classNames(
                    className,
                    'k-dropdown',
                    {
                        'k-icon-picker': !showValue && valueIconName
                    }
                )}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerSpan
                    placeholder={placeholder}
                    value={value}
                    showValue={showValue}
                    valueIconName={valueIconName}
                />
                <InputSuffix>{suffix}</InputSuffix>
                <InputValidationIcon {...this.props} />
                <InputLoadingIcon {...this.props} />
                <Button
                    className="k-input-button"
                    icon={arrowIconName}
                    rounded={null}
                    size={this.props.size}
                    fillMode={this.props.fillMode}
                />
            </Picker>
        );

    }
}
