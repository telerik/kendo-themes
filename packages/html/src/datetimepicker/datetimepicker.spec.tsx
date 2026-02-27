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
 * Accessibility specification for DateTimePicker.
 *
 * @accessibility
 * - Input has role=combobox with aria-haspopup=dialog
 * - aria-expanded indicates popup visibility
 * - Icon button has tabindex=-1 and aria-label
 * - Calendar popup follows Calendar ARIA spec
 * - Date/Time view chooser follows ButtonGroup spec
 * - Adaptive mode follows ActionSheet ARIA spec
 *
 * @wcag 4.1.2 Name, Role, Value - combobox pattern for date/time selection
 */
DateTimePicker.ariaSpec = {
    selector: '.k-datetimepicker',
    rules: [
        { selector: '.k-datetimepicker .k-input-inner', attribute: 'role=combobox', usage: 'The input element follows the combobox specification.' },
        { selector: '.k-datetimepicker .k-input-inner', attribute: 'aria-haspopup=dialog', usage: 'Indicates the component has a Dialog Popup.' },
        { selector: '.k-datetimepicker .k-input-inner', attribute: 'aria-expanded=true/false', usage: 'Announces whether the Popup is visible or not.' },
        { selector: '.k-datetimepicker .k-input-inner', attribute: 'aria-controls (when open)', usage: 'Points to the popup element containing the calendar or time selector.' },
        { selector: '.k-datetimepicker .k-input-inner', attribute: 'aria-activedescendant (when open)', usage: 'Points to the focused item in the Calendar or Time Popup.' },
        { selector: '.k-datetimepicker .k-input-inner', attribute: 'label for or aria-label or aria-labelledby', usage: 'The input needs an accessible name.' },
        { selector: '.k-invalid .k-input-inner', attribute: 'aria-invalid=true', usage: 'Rendered only when the picker is in form and announces invalid state.' },
        { selector: '.k-disabled .k-input-inner', attribute: 'disabled or aria-disabled=true', usage: 'Rendered only when the picker is disabled.' },
        { selector: '.k-datetimepicker .k-input-button', attribute: 'tabindex=-1', usage: 'Button element must not be focusable.' },
        { selector: '.k-datetimepicker .k-input-button', attribute: 'aria-label', usage: 'The button needs an accessible name.' },
        { selector: '.k-datetimepicker.k-disabled .k-button', attribute: 'disabled or aria-disabled', usage: 'Rendered only when the picker is disabled.' },
    ]
};

export default DateTimePicker;
