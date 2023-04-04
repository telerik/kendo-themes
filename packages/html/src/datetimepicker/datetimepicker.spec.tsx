import { classNames, States, Size, Roundness, FillMode } from '../utils';
import {
    Input,
    InputPrefix,
    InputSuffix,
    InputInnerInput,
    InputClearValue,
    InputLoadingIcon,
    InputValidationIcon
} from '../input';
import { Button } from '../button';
import { Popup } from '../popup';
import { DateTimeSelector } from '../datetime-selector';

export const DATETIMEPICKER_CLASSNAME = `k-datetimepicker`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.loading,
    States.readonly
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ],
};

export type KendoDateTimePickerOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDateTimePickerProps = KendoDateTimePickerOptions & {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    value?: string;
    placeholder?: string;
    opened?: boolean;
    tab?: 'time' | 'date';
};

export type KendoDateTimePickerState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    tab: 'date'
} as const;

export const DateTimePicker = (
    props: KendoDateTimePickerProps &
        KendoDateTimePickerState &
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
        loading,
        disabled,
        readonly,
        opened,
        tab = defaultProps.tab,
        ...other
    } = props;


    return (
        <>
            <Input
                {...other}
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
                readonly={readonly}
                className={classNames(props.className, DATETIMEPICKER_CLASSNAME)}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerInput placeholder={placeholder} value={value} />
                <InputValidationIcon
                    valid={valid}
                    invalid={invalid}
                    loading={loading}
                    disabled={disabled} />
                <InputLoadingIcon
                    loading={loading}
                    disabled={disabled} />
                <InputClearValue
                    loading={loading}
                    disabled={disabled}
                    readonly={readonly}
                    value={value} />
                <InputSuffix>{suffix}</InputSuffix>
                <Button
                    className="k-input-button"
                    icon={tab === 'time' ? "clock" : "calendar"}
                    rounded={null}
                    size={size}
                    fillMode={fillMode}
                />
            </Input>
            { opened &&
                <Popup className="k-datetimepicker-popup">
                    <DateTimeSelector tab={tab} />
                </Popup>
            }
        </>
    );
};

DateTimePicker.states = states;
DateTimePicker.options = options;
DateTimePicker.className = DATETIMEPICKER_CLASSNAME;

export default DateTimePicker;
