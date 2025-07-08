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
import { TimeSelector, TimeSelectorHeader } from '../time-selector';
import { ActionButtons } from '../action-buttons';
import { ActionSheet, ActionSheetFooter, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';

import { KendoComponent } from '../_types/component';
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
    size: [Size.small, Size.medium, Size.large],
    rounded: [Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.solid, FillMode.flat, FillMode.outline]
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
    size: Input.defaultOptions.size,
    rounded: Input.defaultOptions.rounded,
    fillMode: Input.defaultOptions.fillMode
};


export const TimePicker: KendoComponent<KendoTimePickerProps & KendoTimePickerState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoTimePickerProps &
        KendoTimePickerState &
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
        adaptive,
        adaptiveSettings,
        adaptiveTitle,
        adaptiveSubtitle,
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
                className={classNames(props.className, TIMEPICKER_CLASSNAME)}
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
                    icon="clock"
                    rounded={null}
                    size={size}
                    fillMode={fillMode}
                />
            </Input>
            {opened &&
                <Popup className="k-list-container k-timepicker-popup">
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
                <ActionSheet adaptive={true} {...adaptiveSettings}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" />}
                            title={adaptiveTitle}
                            subtitle={adaptiveSubtitle}
                        />
                    }
                    footer={
                        <ActionSheetFooter>
                            <Button text="Cancel" size="large" themeColor="base" />
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

export default TimePicker;
