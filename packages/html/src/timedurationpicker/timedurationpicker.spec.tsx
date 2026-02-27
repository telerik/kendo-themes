import { classNames, States, Size, Roundness, FillMode, nextId } from '../misc';
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
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline ]
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
};

export const TimeDurationPicker: KendoComponent<KendoTimeDurationPickerProps & KendoTimeDurationPickerState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoTimeDurationPickerProps &
        KendoTimeDurationPickerState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        rounded,
        fillMode,
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


    const popupId = nextId('timedurationpicker-popup');

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
                <InputInnerInput placeholder={placeholder} value={value}
                    role="combobox"
                    aria-haspopup="dialog"
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-controls={opened ? popupId : undefined}
                    aria-invalid={invalid ? 'true' : undefined}
                    aria-label="Select time duration"
                    disabled={disabled}
                />
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
                    size={size}
                    fillMode={fillMode}
                    tabIndex={-1}
                    aria-label="Select time duration"
                    disabled={disabled}
                />
            </Input>
            { opened &&
                <Popup id={popupId} className="k-timedurationpicker-popup">
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

/**
 * Accessibility specification for TimeDurationPicker.
 *
 * @accessibility
 * - Input has role=combobox with aria-haspopup=dialog
 * - aria-expanded indicates popup visibility
 * - Icon button has tabindex=-1 and aria-label
 * - Time lists in popup follow listbox pattern
 *
 * @wcag 4.1.2 Name, Role, Value - combobox pattern for time duration selection
 */
TimeDurationPicker.ariaSpec = {
    selector: '.k-timedurationpicker',
    rules: [
        { selector: '.k-timedurationpicker .k-input-inner', attribute: 'role=combobox', usage: 'The input element follows the combobox specification.' },
        { selector: '.k-timedurationpicker .k-input-inner', attribute: 'aria-haspopup=dialog', usage: 'Indicates the component has a Dialog Popup.' },
        { selector: '.k-timedurationpicker .k-input-inner', attribute: 'aria-expanded=true/false', usage: 'Announces whether the Popup is visible or not.' },
        { selector: '.k-timedurationpicker .k-input-inner', attribute: 'aria-controls (when open)', usage: 'Points to the popup element.' },
        { selector: '.k-timedurationpicker .k-input-inner', attribute: 'label for or aria-label or aria-labelledby', usage: 'The input needs an accessible name.' },
        { selector: '.k-invalid .k-input-inner', attribute: 'aria-invalid=true', usage: 'Rendered only when the picker is in form and announces invalid state.' },
        { selector: '.k-disabled .k-input-inner', attribute: 'disabled or aria-disabled=true', usage: 'Rendered only when the picker is disabled.' },
        { selector: '.k-timedurationpicker .k-input-button', attribute: 'tabindex=-1', usage: 'Button element must not be focusable.' },
        { selector: '.k-timedurationpicker .k-input-button', attribute: 'aria-label', usage: 'The button needs an accessible name.' },
        { selector: '.k-timedurationpicker.k-disabled .k-button', attribute: 'disabled or aria-disabled', usage: 'Rendered only when the picker is disabled.' },
        { selector: '.k-time-list', attribute: 'role=listbox', usage: 'The timelist elements must have listbox role.' },
        { selector: '.k-time-list', attribute: 'aria-label or aria-labelledby', usage: 'The listbox needs an accessible name.' },
        { selector: '.k-time-list-wrapper .k-reset', attribute: 'role=none', usage: 'The ul element semantic meaning must be removed.' },
        { selector: '.k-time-list-wrapper .k-item', attribute: 'role=option', usage: 'The available options must be marked as such.' },
    ]
};

export default TimeDurationPicker;
