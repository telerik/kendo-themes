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
import { TimeSelector, TimeSelectorFastSelection } from '../time-selector';
import { ActionButtons } from '../action-buttons';

export const TIMEDURATIONPICKER_CLASSNAME = `k-timedurationpicker`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.required,
    States.disabled,
    States.loading
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ],
};

export type KendoTimeDurationPickerOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoTimeDurationPickerProps = KendoTimeDurationPickerOptions & {
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    value?: string;
    placeholder?: string;
    opened?: boolean;
};

export type KendoTimeDurationPickerState = { [K in (typeof states)[number]]?: boolean };

export const TimeDurationPicker = (
    props: KendoTimeDurationPickerProps &
        KendoTimeDurationPickerState &
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
        opened,
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
                className={classNames(props.className, TIMEDURATIONPICKER_CLASSNAME)}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerInput placeholder={placeholder} value={value} />
                <InputValidationIcon {...props} />
                <InputLoadingIcon {...props} />
                <InputClearValue {...props} />
                <InputSuffix>{suffix}</InputSuffix>
                <Button
                    className="k-input-button"
                    icon="clock-arrow-rotate"
                    rounded={null}
                    size={size}
                    fillMode={fillMode}
                />
            </Input>
            { opened &&
                <Popup className="k-timedurationpicker-popup">
                    <TimeSelector columns={[ "dd", "HH", "mm" ]} focusedColumn="HH" fastSelection={(<TimeSelectorFastSelection/>)}/>
                    <ActionButtons alignment="stretched" className="k-timeduration-footer">
                        <Button className="k-time-cancel">Cancel</Button>
                        <Button themeColor="primary" className="k-time-accept">Set</Button>
                    </ActionButtons>
                </Popup>
            }
        </>
    );
};

TimeDurationPicker.states = states;
TimeDurationPicker.options = options;
TimeDurationPicker.className = TIMEDURATIONPICKER_CLASSNAME;

export default TimeDurationPicker;
