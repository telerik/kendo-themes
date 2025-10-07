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
import { TimeSelector, TimeSelectorFastSelection } from '../time-selector';
import { ActionButtons } from '../action-buttons';

import { KendoComponent } from '../_types/component';
import { TIMEDURATIONPICKER_FOLDER_NAME, TIMEDURATIONPICKER_MODULE_NAME } from './constants';
export const TIMEDURATIONPICKER_CLASSNAME = `k-timedurationpicker`;

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

export type KendoTimeDurationPickerOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoTimeDurationPickerProps = KendoTimeDurationPickerOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    value?: string;
    placeholder?: string;
    opened?: boolean;
};

export type KendoTimeDurationPickerState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Input.defaultOptions.size,
    rounded: Input.defaultOptions.rounded,
    fillMode: Input.defaultOptions.fillMode
};

export const TimeDurationPicker: KendoComponent<KendoTimeDurationPickerProps & KendoTimeDurationPickerState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoTimeDurationPickerProps &
        KendoTimeDurationPickerState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size = defaultOptions.size,
        rounded = defaultOptions.rounded,
        fillMode = defaultOptions.fillMode,
        prefix,
        suffix,
        value,
        placeholder,
        hover,
        focus,
        valid,
        invalid,
        required,
        loading,
        disabled,
        readonly,
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
                readonly={readonly}
                className={classNames(props.className, TIMEDURATIONPICKER_CLASSNAME)}
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
TimeDurationPicker.defaultOptions = defaultOptions;
TimeDurationPicker.moduleName = TIMEDURATIONPICKER_MODULE_NAME;
TimeDurationPicker.folderName = TIMEDURATIONPICKER_FOLDER_NAME;

export default TimeDurationPicker;
