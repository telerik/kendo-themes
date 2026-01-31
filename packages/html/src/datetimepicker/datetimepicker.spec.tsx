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
    id?: string;
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
        id = 'k-datetimepicker',
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
                <InputInnerInput
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    readonly={readonly}
                    role="combobox"
                    aria-label="Date time picker"
                    aria-haspopup="dialog"
                    aria-expanded={opened ? 'true' : 'false'}
                    aria-controls={`${id}-popup`}
                    aria-required={required ? 'true' : undefined}
                    aria-invalid={invalid ? 'true' : undefined}
                    aria-disabled={disabled ? 'true' : undefined}
                    {...(opened && { 'aria-activedescendant': `${id}-active` })}
                    {...(readonly && { 'aria-readonly': 'true' })}
                    tabIndex={0}
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
                    aria-label={tab === 'time' ? "Select time" : "Select date"}
                    tabIndex={-1}
                    disabled={disabled}
                    aria-disabled={disabled ? 'true' : undefined}
                />
            </Input>
            {opened &&
                <Popup className="k-datetime-container k-datetimepicker-popup" dir={dir} id={`${id}-popup`}>
                    <DateTimeSelector size={size} tab={tab} dir={dir} activeCellId={`${id}-active`} titleId={`${id}-title`} />
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" aria-label="Confirm" />}
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

export default DateTimePicker;
