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
import { CalendarNormal } from '../calendar';
import { ActionSheet, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';

import { KendoComponent } from '../_types/component';
import { DATEPICKER_FOLDER_NAME, DATEPICKER_MODULE_NAME } from './constants';
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
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    rounded: [Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline]
};

const defaultOptions = {
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
    adaptiveTitle?: string;
    adaptiveSubtitle?: string;
    dir?: 'ltr' | 'rtl';
};

export type KendoDatePickerState = { [K in (typeof states)[number]]?: boolean };

export const DatePicker: KendoComponent<KendoDatePickerProps & KendoDatePickerState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoDatePickerProps &
        KendoDatePickerState &
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
        dir,
        ...other
    } = props;


    const popupId = nextId('datepicker-popup');

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
                <InputInnerInput placeholder={placeholder} value={value}
                    role="combobox"
                    aria-haspopup="grid"
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-controls={(opened || adaptive) ? popupId : undefined}
                    aria-invalid={invalid ? 'true' : undefined}
                    aria-label="Select date"
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
                    icon="calendar"
                    size={size}
                    fillMode={fillMode}
                    tabIndex={-1}
                    aria-label="Select date"
                    disabled={disabled}
                />
            </Input>
            {opened &&
                <Popup id={popupId} className="k-calendar-container k-datepicker-popup">
                    <CalendarNormal dir={dir} />
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
                >
                    <CalendarNormal size="large"></CalendarNormal>
                </ActionSheet>
            }
        </>
    );
};

DatePicker.states = states;
DatePicker.options = options;
DatePicker.className = DATEPICKER_CLASSNAME;
DatePicker.defaultOptions = defaultOptions;
DatePicker.moduleName = DATEPICKER_MODULE_NAME;
DatePicker.folderName = DATEPICKER_FOLDER_NAME;

/**
 * Accessibility specification for DatePicker.
 *
 * @accessibility
 * - Input has role=combobox with aria-haspopup=grid
 * - aria-expanded indicates popup visibility
 * - Icon button has tabindex=-1 and aria-label
 * - Calendar popup follows Calendar ARIA spec
 * - Adaptive mode follows ActionSheet ARIA spec
 *
 * @wcag 4.1.2 Name, Role, Value - combobox pattern for date selection
 */
DatePicker.ariaSpec = {
    selector: '.k-datepicker',
    rules: [
        { selector: '.k-datepicker .k-input-inner', attribute: 'role=combobox', usage: 'The input element follows the combobox specification.' },
        { selector: '.k-datepicker .k-input-inner', attribute: 'aria-haspopup=grid', usage: 'Indicates the component has a Calendar Popup that implements role=grid.' },
        { selector: '.k-datepicker .k-input-inner', attribute: 'aria-expanded=true/false', usage: 'Announces whether the Popup is visible or not.' },
        { selector: '.k-datepicker .k-input-inner', attribute: 'aria-controls (when open)', usage: 'Points to the popup element.' },
        { selector: '.k-datepicker .k-input-inner', attribute: 'label for or aria-label or aria-labelledby', usage: 'The input needs an accessible name.' },
        { selector: '.k-invalid .k-input-inner', attribute: 'aria-invalid=true', usage: 'Rendered only when the picker is in form and announces invalid state.' },
        { selector: '.k-disabled .k-input-inner', attribute: 'disabled or aria-disabled=true', usage: 'Rendered only when the picker is disabled.' },
        { selector: '.k-datepicker .k-input-button', attribute: 'tabindex=-1', usage: 'Button element must not be focusable.' },
        { selector: '.k-datepicker .k-input-button', attribute: 'aria-label', usage: 'The button needs an accessible name.' },
        { selector: '.k-datepicker.k-disabled .k-button', attribute: 'disabled or aria-disabled', usage: 'Rendered only when the picker is disabled.' },
    ]
};

export default DatePicker;
