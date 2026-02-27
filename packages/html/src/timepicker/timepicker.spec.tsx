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
import { TimeSelector, TimeSelectorHeader } from '../time-selector';
import { ActionButtons } from '../action-buttons';
import { ActionSheet, ActionSheetFooter, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';

import { KendoComponent } from '../_types/component';
import { TIMEPICKER_FOLDER_NAME, TIMEPICKER_MODULE_NAME } from './constants';
export const TIMEPICKER_CLASSNAME = `k-timepicker`;

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
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    rounded: [Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline]
};

export type KendoTimePickerOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoTimePickerProps = KendoTimePickerOptions & {
    prefix?: React.JSX.Element;
    suffix?: React.JSX.Element;
    value?: string;
    placeholder?: string;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
    adaptiveTitle?: string;
    adaptiveSubtitle?: string;
};

export type KendoTimePickerState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
};


export const TimePicker: KendoComponent<KendoTimePickerProps & KendoTimePickerState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoTimePickerProps &
        KendoTimePickerState &
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
        adaptive,
        adaptiveSettings,
        adaptiveTitle,
        adaptiveSubtitle,
        ...other
    } = props;


    const popupId = nextId('timepicker-popup');

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
                className={classNames(props.className, TIMEPICKER_CLASSNAME)}
            >
                <InputPrefix>{prefix}</InputPrefix>
                <InputInnerInput placeholder={placeholder} value={value}
                    role="combobox"
                    aria-haspopup="dialog"
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-controls={(opened || adaptive) ? popupId : undefined}
                    aria-invalid={invalid ? 'true' : undefined}
                    aria-label="Select time"
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
                    icon="clock"
                    size={size}
                    fillMode={fillMode}
                    tabIndex={-1}
                    aria-label="Select time"
                    disabled={disabled}
                />
            </Input>
            {opened &&
                <Popup id={popupId} className="k-list-container k-timepicker-popup">
                    <TimeSelector columns={["HH", "mm", "ss", "tt"]} focusedColumn="mm" header={(
                        <TimeSelectorHeader title="10:00:00 AM">
                            <Button fillMode="flat" className="k-time-now">Now</Button>
                        </TimeSelectorHeader>
                    )} />
                    <ActionButtons alignment="stretched" className="k-time-footer">
                        <Button themeColor="primary" className="k-time-accept">Set</Button>
                        <Button className="k-time-cancel">Cancel</Button>
                    </ActionButtons>
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} id={popupId} {...adaptiveSettings}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" aria-label="Apply" />}
                            title={adaptiveTitle}
                            subtitle={adaptiveSubtitle}
                        />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" size="large" />
                            <Button text="Set time" size="large" themeColor="primary" />
                        </ActionSheetFooter>
                    }
                >
                    <TimeSelector size="large" columns={["HH", "mm", "ss", "tt"]} focusedColumn="HH" header={(
                        <TimeSelectorHeader title="10:00:00 АМ">
                            <Button size="large" fillMode="flat" className="k-time-now">Now</Button>
                        </TimeSelectorHeader>
                    )} />
                </ActionSheet>
            }
        </>
    );
};

TimePicker.states = states;
TimePicker.options = options;
TimePicker.className = TIMEPICKER_CLASSNAME;
TimePicker.defaultOptions = defaultOptions;
TimePicker.moduleName = TIMEPICKER_MODULE_NAME;
TimePicker.folderName = TIMEPICKER_FOLDER_NAME;

/**
 * Accessibility specification for TimePicker.
 *
 * @accessibility
 * - Input has role=combobox with aria-haspopup=dialog
 * - aria-expanded indicates popup visibility
 * - Icon button has tabindex=-1 and aria-label
 * - Time lists in popup follow listbox pattern
 * - Adaptive mode follows ActionSheet ARIA spec
 *
 * @wcag 4.1.2 Name, Role, Value - combobox pattern for time selection
 */
TimePicker.ariaSpec = {
    selector: '.k-timepicker',
    rules: [
        { selector: '.k-timepicker .k-input-inner', attribute: 'role=combobox', usage: 'The input element follows the combobox specification.' },
        { selector: '.k-timepicker .k-input-inner', attribute: 'aria-haspopup=dialog', usage: 'Indicates the component has a Dialog Popup.' },
        { selector: '.k-timepicker .k-input-inner', attribute: 'aria-expanded=true/false', usage: 'Announces whether the Popup is visible or not.' },
        { selector: '.k-timepicker .k-input-inner', attribute: 'aria-controls (when open)', usage: 'Points to the popup element.' },
        { selector: '.k-timepicker .k-input-inner', attribute: 'label for or aria-label or aria-labelledby', usage: 'The input needs an accessible name.' },
        { selector: '.k-invalid .k-input-inner', attribute: 'aria-invalid=true', usage: 'Rendered only when the picker is in form and announces invalid state.' },
        { selector: '.k-disabled .k-input-inner', attribute: 'disabled or aria-disabled=true', usage: 'Rendered only when the picker is disabled.' },
        { selector: '.k-timepicker .k-input-button', attribute: 'tabindex=-1', usage: 'Button element must not be focusable.' },
        { selector: '.k-timepicker .k-input-button', attribute: 'aria-label', usage: 'The button needs an accessible name.' },
        { selector: '.k-timepicker.k-disabled .k-button', attribute: 'disabled or aria-disabled', usage: 'Rendered only when the picker is disabled.' },
        { selector: '.k-time-list', attribute: 'role=listbox', usage: 'The timelist elements must have listbox role.' },
        { selector: '.k-time-list', attribute: 'aria-label or aria-labelledby', usage: 'The listbox needs an accessible name.' },
        { selector: '.k-time-list-wrapper .k-reset', attribute: 'role=none', usage: 'The ul element semantic meaning must be removed.' },
        { selector: '.k-time-list-wrapper .k-item', attribute: 'role=option', usage: 'The available options must be marked as such.' },
    ]
};

export default TimePicker;
