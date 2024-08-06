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
import { DateTimeSelector } from '../datetime-selector';
import { ActionSheet, ActionSheetFooter, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';

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
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ]
};

export type KendoDateTimePickerOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDateTimePickerProps = KendoDateTimePickerOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    value?: string;
    placeholder?: string;
    opened?: boolean;
    tab?: 'time' | 'date';
    dir?: 'ltr' | 'rtl';
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
};

export type KendoDateTimePickerState = { [K in (typeof states)[number]]?: boolean };

export const DateTimePicker = (
    props: KendoDateTimePickerProps &
        KendoDateTimePickerState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        tab = 'date',
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
        dir,
        adaptive,
        adaptiveSettings,
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
                <Popup className={`k-${tab === "time" ? "list" : "calendar"}-container k-datetimepicker-popup`} dir={dir}>
                    <DateTimeSelector tab={tab} dir={dir} />
                </Popup>
            }
            { adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings} >
                    <ActionSheetHeader
                        actions={[ 'x' ]}
                        title="Select Date & Time"
                        subTitle="DD / MM / YY">
                    </ActionSheetHeader>

                    <DateTimeSelector size="large" tab={tab} actionButtons={false} />

                    <ActionSheetFooter actions={[ 'Cancel', '!Set' ]} />
                </ActionSheet>
            }
        </>
    );
};

DateTimePicker.states = states;
DateTimePicker.options = options;
DateTimePicker.className = DATETIMEPICKER_CLASSNAME;

export default DateTimePicker;
