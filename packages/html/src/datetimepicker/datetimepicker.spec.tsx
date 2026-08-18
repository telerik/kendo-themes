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
import { DateTimeSelector } from '../datetime-selector';
import { ActionSheet, ActionSheetFooter, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';

import { KendoComponent } from '../_types/component';
import { DATETIMEPICKER_FOLDER_NAME, DATETIMEPICKER_MODULE_NAME } from './constants';
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
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    rounded: [Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline]
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
    adaptiveTitle?: string;
    adaptiveSubtitle?: string;
};

export type KendoDateTimePickerState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    tab: 'date'
} as const;

/**
 * @aria {role="combobox"} The input element follows the combobox specification.
 * @aria {aria-haspopup="dialog"} Indicates the component has a Dialog Popup.
 * @aria {aria-expanded="true"|\"false"} Announces whether the Popup is visible or not.
 * @aria {aria-controls} Points to the popup element containing the calendar or time selector.
 * @aria {aria-activedescendant} Points to the focused item in the Calendar or Time Popup.
 * @aria {aria-label|aria-labelledby} The input needs an accessible name.
 * @aria {tabindex="-1"} Button element must not be focusable.
 * @aria {aria-label} The button needs an accessible name.
 * @aria {aria-disabled} Rendered only when the picker is disabled.
 * @ux {Combined picker} A single popup contains both a date calendar and a time selector.
 * @ux {Tab switching} The popup header switches between the date and time views.
 * @ux {Direct input} Date and time can also be typed directly into the input.
 * @ux {Disabled state} When disabled, the input and popup are non-interactive.
 */
export const DateTimePicker: KendoComponent<KendoDateTimePickerProps & KendoDateTimePickerState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoDateTimePickerProps &
        KendoDateTimePickerState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        rounded,
        fillMode,
        tab = defaultOptions.tab,
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
        dir,
        adaptive,
        adaptiveSettings,
        adaptiveTitle,
        adaptiveSubtitle,
        ...other
    } = props;

    const popupId = nextId('datetimepicker-popup');

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
                <InputInnerInput placeholder={placeholder} value={value}
                    role="combobox"
                    aria-haspopup="dialog"
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-controls={(opened || adaptive) ? popupId : undefined}
                    aria-invalid={invalid ? 'true' : undefined}
                    aria-label="Select date and time"
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
                    icon={tab === 'time' ? "clock" : "calendar"}
                    size={size}
                    fillMode={fillMode}
                    tabIndex={-1}
                    aria-label="Select date and time"
                    disabled={disabled}
                />
            </Input>
            {opened &&
                <Popup id={popupId} className="k-datetime-container k-datetimepicker-popup" dir={dir}>
                    <DateTimeSelector size={size} tab={tab} dir={dir} />
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
                            <Button text="Cancel" size="large" className="k-time-cancel" />
                            <Button text="Set" size="large" themeColor="primary" className="k-time-accept" />
                        </ActionSheetFooter>
                    }
                >
                    <DateTimeSelector size="large" tab={tab} actionButtons={false} />
                </ActionSheet>
            }
        </>
    );
};

DateTimePicker.states = states;
DateTimePicker.options = options;
DateTimePicker.className = DATETIMEPICKER_CLASSNAME;
DateTimePicker.defaultOptions = defaultOptions;
DateTimePicker.moduleName = DATETIMEPICKER_MODULE_NAME;
DateTimePicker.folderName = DATETIMEPICKER_FOLDER_NAME;

/**
 * @keyboard {Escape} Discards the selection and closes the popup.
 * @keyboard {Enter} Enters in time edit if calendar is the target. Otherwise, accepts the selected time and closes the popup.
 * @keyboard {Alt/Opt(Mac) + ArrowDown} Opens the dropdown and moves the focus to the displayed calendar.
 * @keyboard {Alt/Opt(Mac) + ArrowUp} Closes the dropdown and moves the focus to the input element.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#combobox WAI ARIA specification for combobox
 * @see https://www.w3.org/TR/wai-aria-1.2/#spinbutton WAI ARIA specification for spinbutton
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/datepicker-dialog.html ARIA practices Date Picker Dialog Example
 */

export default DateTimePicker;
