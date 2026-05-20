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
import a11ySpec from './behavior/accessibility.json';
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

DatePicker.ariaSpec = a11ySpec.ariaSpec;

export default DatePicker;
