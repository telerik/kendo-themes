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

/**
 * @aria {role="combobox"} The input element follows the combobox specification.
 * @aria {aria-haspopup="dialog"} Indicates the component has a Dialog Popup.
 * @aria {aria-expanded="true"|\"false"} Announces whether the Popup is visible or not.
 * @aria {aria-controls} Points to the popup element.
 * @aria {aria-label|aria-labelledby} The input needs an accessible name.
 * @aria {aria-invalid="true"} Rendered only when the picker is in form and announces invalid state.
 * @aria {aria-disabled="true"} Rendered only when the picker is disabled.
 * @aria {tabindex="-1"} Button element must not be focusable.
 * @aria {aria-label} The button needs an accessible name.
 * @aria {aria-disabled} Rendered only when the picker is disabled.
 * @aria {role="listbox"} The timelist elements must have listbox role.
 * @aria {aria-label|aria-labelledby} The listbox needs an accessible name.
 * @aria {role="none"} The ul element semantic meaning must be removed.
 * @aria {role="option"} The available options must be marked as such.
 * @ux {Clock popup} Opens a time-selection popup when the clock button is clicked.
 * @ux {Direct input} The time can also be typed directly into the input field.
 * @ux {Step intervals} Configurable minute and second steps limit the selectable values.
 * @ux {Disabled state} When disabled, the input and popup are non-interactive.
 */
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
 * @keyboard {Escape} Closes the popup
 * @keyboard {Alt/Opt(Mac) + ArrowDown} Opens the popup
 * @keyboard {Alt/Opt(Mac) + ArrowUp} Closes the popup
 * @keyboard {ArrowUp} Increases the value of the time segment that is highlighted.
 * @keyboard {ArrowDown} Decreases the value of the time segment that is highlighted.
 * @keyboard {ArrowLeft} Moves to previous time segment in the input.
 * @keyboard {ArrowRight} Moves to next time segment in the input.
 * @keyboard {Backspace} Deletes value of the time segment.
 * @keyboard {Escape} Closes the popup
 * @keyboard {Shift + Tab or ArrowLeft} Focuses previous carousel.
 * @keyboard {Tab or ArrowRight} Focuses next carousel.
 * @keyboard {ArrowDown} Selects next value in the carousel.
 * @keyboard {ArrowUp} Selects previous value in the carousel.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#combobox WAI-ARIA specification for combobox
 * @see https://www.w3.org/TR/wai-aria-1.2/#listbox WAI-ARIA specification for listbox
 */

export default TimePicker;
