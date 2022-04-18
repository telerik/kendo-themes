import * as React from 'react';
import { classNames } from '../utils';
import { Button } from '../button';
import {
    Picker,
    InputInnerSpan,
    InputPrefix,
    InputSuffix
} from '../input';

import { ColorPreview } from '../color-preview';

export interface ColorPickerProps {
    className?: string;
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
    disabled?: boolean;
}

export class ColorPicker extends React.Component<ColorPickerProps> {

    static defaultProps = {
        arrowIconName: 'arrow-s'
    };

    render() {
        const {
            className,
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
            disabled
        } = this.props;

        return (
            <Picker
                size={size}
                rounded={rounded}
                fillMode={fillMode}
                hover={hover}
                focus={focus}
                valid={valid}
                invalid={invalid}
                required={required}
                disabled={disabled}
                className={classNames(
                    className,
                    'k-colorpicker',
                    'k-icon-picker'
                )}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerSpan
                    placeholder={placeholder}
                    value={value}
                    showValue={false}
                    valueIcon={
                        <ColorPreview
                            className="k-value-icon"
                            color={value}
                            iconName={valueIconName}
                        />
                    }
                    valueIconName={valueIconName}
                />
                <InputSuffix>{suffix}</InputSuffix>
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
