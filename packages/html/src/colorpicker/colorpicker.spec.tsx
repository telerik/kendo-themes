import { classNames, States, Size, Roundness, FillMode } from '../utils';
import {
    InputPrefix,
    InputSuffix,
    InputInnerSpan,
    Picker
} from '../input';
import { Button } from '../button';
import { ColorPreview } from '../color-preview';

export const COLORPICKER_CLASSNAME = `k-colorpicker`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ],
};

export type KendoColorPickerOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoColorPickerProps = KendoColorPickerOptions & {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    type?: string;
    value?: string;
    placeholder?: string;
    valueIconName?: string;
    arrowIconName?: string;
};

export type KendoColorPickerState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    arrowIconName: 'arrow-s',
    size: Picker.defaultProps.size,
    rounded: Picker.defaultProps.rounded,
    fillMode: Picker.defaultProps.fillMode
};

export const ColorPicker = (
    props: KendoColorPickerProps &
        KendoColorPickerState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
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
        disabled,
        valueIconName,
        arrowIconName = defaultProps.arrowIconName,
        ...other
    } = props;


    return (
        <Picker
            {...other}
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
                props.className,
                COLORPICKER_CLASSNAME,
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
                size={size}
                fillMode={fillMode}
            />
        </Picker>
    );
};

ColorPicker.states = states;
ColorPicker.options = options;
ColorPicker.className = COLORPICKER_CLASSNAME;
ColorPicker.defaultProps = defaultProps;

export default ColorPicker;
