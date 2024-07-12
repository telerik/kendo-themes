import { classNames, States, Size, Roundness, FillMode } from '../misc';
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
import { CalendarNormal } from '../calendar';
import { ActionSheet, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';

export const DATEPICKER_CLASSNAME = `k-datepicker`;

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
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ]
};

const defaultProps = {
    size: Input.defaultProps.size,
    rounded: Input.defaultProps.rounded,
    fillMode: Input.defaultProps.fillMode
};

export type KendoDatePickerOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDatePickerProps = KendoDatePickerOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    value?: string;
    placeholder?: string;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
    dir?: 'ltr' | 'rtl';
};

export type KendoDatePickerState = { [K in (typeof states)[number]]?: boolean };

export const DatePicker = (
    props: KendoDatePickerProps &
        KendoDatePickerState &
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
        adaptive,
        adaptiveSettings,
        dir,
        ...other
    } = props;


    return (
        <>
            <Input
                {...other}
                dir={dir}
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
                className={classNames(props.className, DATEPICKER_CLASSNAME)}
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
                    icon="calendar"
                    rounded={null}
                    size={size}
                    fillMode={fillMode}
                />
            </Input>
            { opened &&
                <Popup className="k-calendar-container k-datepicker-popup">
                    <CalendarNormal dir={dir} />
                </Popup>
            }
            { adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings} >
                    <ActionSheetHeader
                        actions={[ 'x' ]}
                        title="Select Dates"
                        subTitle="DD / MM / YY">
                    </ActionSheetHeader>
                    <CalendarNormal size="large"></CalendarNormal>
                </ActionSheet>
            }
        </>
    );
};

DatePicker.states = states;
DatePicker.options = options;
DatePicker.className = DATEPICKER_CLASSNAME;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
