import * as React from 'react';
import { classNames } from '../utils';
import { Button } from '../button';
import { ChipList, ChipProps } from '../chip';
import {
    Input,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputPrefix,
    InputSuffix,
    InputValidationIcon
} from '../input';

export interface MultiSelectProps {
    className?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    value?: string;
    placeholder?: string;
    tags?: React.ReactElement<ChipProps> | React.ReactElement<ChipProps>[];
    size?: null | 'small' | 'medium' | 'large';
    rounded?: null | 'small' | 'medium' | 'large' | 'full';
    fillMode?: null | 'solid' | 'outline' | 'flat';
    showArrowButton?: boolean;
    hover?: boolean;
    focus?: boolean;
    valid?: boolean;
    invalid?: boolean
    required?: boolean;
    loading?: boolean;
    disabled?: boolean;
}

export class MultiSelect extends React.Component<MultiSelectProps> {

    render() {
        const {
            className,
            prefix,
            suffix,
            value,
            placeholder,
            tags,
            size,
            rounded,
            fillMode,
            showArrowButton,
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
                className={classNames(className, 'k-multiselect')}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <div className="k-input-values">
                    <ChipList size={size}>
                        <>
                            {tags}
                        </>
                    </ChipList>
                    <InputInnerInput placeholder={placeholder} value={value}/>
                </div>
                <InputSuffix>{suffix}</InputSuffix>
                <InputValidationIcon {...this.props} />
                <InputLoadingIcon {...this.props} />
                <InputClearValue value={tags ? 'value' : ''} {...this.props} />
                {showArrowButton && (
                    <Button
                        className="k-input-button"
                        icon="arrow-s"
                        rounded={null}
                        size={size}
                        fillMode={fillMode}
                    />
                )}
            </Input>
        );

    }
}
