import { classNames, stateClassNames, States, Size, Roundness, FillMode } from '../misc';
import { DateInput } from '../dateinput';
import { FloatingLabel } from '../floating-label';
import { Button } from '../button';
import { MultiViewCalendarNormal } from '../multiviewcalendar';
import { Popup } from '../popup';
import { ActionSheet, ActionSheetFooter, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';

import { KendoComponent } from '../_types/component';
import { DATERANGEPICKER_FOLDER_NAME, DATERANGEPICKER_MODULE_NAME } from './constants';
export const DATERANGEPICKER_CLASSNAME = `k-daterangepicker`;

const states = [
    States.disabled,
    States.readonly,
    States.invalid,
    States.focus
];

const options = {
    size: [Size.undefined, Size.small, Size.medium, Size.large],
    rounded: [Roundness.undefined, Roundness.none, Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline]
};

const defaultOptions = {
};

export type KendoDateRangePickerOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDateRangePickerProps = KendoDateRangePickerOptions & {
    valueFirst?: string;
    valueSecond?: string;
    swapButton?: boolean;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
    adaptiveTitle?: string;
    adaptiveSubtitle?: string;
    dir?: 'ltr' | 'rtl';
    id?: string;
};

export type KendoDateRangePickerState = { [K in (typeof states)[number]]?: boolean };

export const DateRangePicker: KendoComponent<KendoDateRangePickerProps & KendoDateRangePickerState & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoDateRangePickerProps &
        KendoDateRangePickerState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        rounded,
        fillMode,
        disabled,
        readonly,
        invalid,
        focus,
        valueFirst,
        valueSecond,
        swapButton,
        opened,
        adaptive,
        adaptiveSettings,
        adaptiveTitle,
        adaptiveSubtitle,
        dir,
        id = 'daterangepicker',
        ...other
    } = props;


    return (
        <>
            <span
                {...other}
                dir={dir}
                className={classNames(
                    props.className,
                    DATERANGEPICKER_CLASSNAME,
                    stateClassNames(DATERANGEPICKER_CLASSNAME, { disabled }),
                )}
            >
                <FloatingLabel label="Start">
                    <DateInput
                        value={valueFirst}
                        showSpinButton={false}
                        size={size}
                        rounded={rounded}
                        fillMode={fillMode}
                        disabled={disabled}
                        readonly={readonly}
                        invalid={invalid}
                        focus={focus}
                        role="combobox"
                        aria-label="Start date"
                        aria-haspopup="grid"
                        aria-expanded={opened ? 'true' : 'false'}
                        aria-controls={`${id}-calendar`}
                        {...(opened && focus && { 'aria-activedescendant': `${id}-active` })}
                        aria-readonly={readonly ? 'true' : undefined}
                        aria-invalid={invalid ? 'true' : undefined}
                        aria-disabled={disabled ? 'true' : undefined}
                        tabIndex={0}
                    />
                </FloatingLabel>
                {swapButton && (
                    <Button
                        rounded={rounded}
                        size={size}
                        fillMode="flat"
                        icon="arrows-swap"
                        iconClassName="k-rotate-90"
                        aria-label="Swap start and end dates"
                    />
                )}
                <FloatingLabel label="End">
                    <DateInput
                        value={valueSecond}
                        showSpinButton={false}
                        size={size}
                        rounded={rounded}
                        fillMode={fillMode}
                        disabled={disabled}
                        readonly={readonly}
                        invalid={invalid}
                        role="combobox"
                        aria-label="End date"
                        aria-haspopup="grid"
                        aria-expanded={opened ? 'true' : 'false'}
                        aria-controls={`${id}-calendar`}
                        {...(opened && { 'aria-activedescendant': `${id}-active` })}
                        aria-readonly={readonly ? 'true' : undefined}
                        aria-invalid={invalid ? 'true' : undefined}
                        aria-disabled={disabled ? 'true' : undefined}
                        tabIndex={0}
                    />
                </FloatingLabel>
            </span>
            {opened &&
                <Popup id={`${id}-calendar`} className="k-calendar-container k-daterangepicker-popup">
                    <MultiViewCalendarNormal dir={dir} activeCellId={`${id}-active`} titleId={`${id}-title`} />
                </Popup>
            }
            {adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings}
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="check" themeColor="primary" size="large" fillMode="flat" aria-label="Confirm date range selection" />}
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
                    <div className="k-scrollable-wrap">
                        <MultiViewCalendarNormal size="large" orientation="vertical" />
                    </div>
                </ActionSheet>
            }
        </>
    );
};

DateRangePicker.states = states;
DateRangePicker.options = options;
DateRangePicker.className = DATERANGEPICKER_CLASSNAME;
DateRangePicker.defaultOptions = defaultOptions;
DateRangePicker.moduleName = DATERANGEPICKER_MODULE_NAME;
DateRangePicker.folderName = DATERANGEPICKER_FOLDER_NAME;

export default DateRangePicker;
