import { classNames, stateClassNames, States, Size, Roundness, FillMode } from '../misc';
import { DateInput } from '../dateinput';
import { FloatingLabel } from '../floating-label';
import { Button } from '../button';
import { MultiViewCalendarNormal } from '../multiviewcalendar';
import { Popup } from '../popup';
import { ActionSheet, ActionSheetFooter, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';
import { Input } from '../input';

import { KendoComponent } from '../_types/component';
export const DATERANGEPICKER_CLASSNAME = `k-daterangepicker`;

const states = [
    States.disabled
];

const options = {
    size: [Size.small, Size.medium, Size.large],
    rounded: [Roundness.small, Roundness.medium, Roundness.large, Roundness.full],
    fillMode: [FillMode.solid, FillMode.flat, FillMode.outline]
};

const defaultOptions = {
    size: Input.defaultOptions.size,
    rounded: Input.defaultOptions.rounded,
    fillMode: Input.defaultOptions.fillMode
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
        valueFirst,
        valueSecond,
        swapButton,
        opened,
        adaptive,
        adaptiveSettings,
        adaptiveTitle,
        adaptiveSubtitle,
        dir,
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
                    />
                </FloatingLabel>
                {swapButton && (
                    <Button
                        rounded={rounded}
                        size={size}
                        fillMode="flat"
                        icon="arrows-swap"
                        iconClassName="k-rotate-90"
                    />
                )}
                <FloatingLabel label="End">
                    <DateInput
                        value={valueSecond}
                        showSpinButton={false}
                        size={size}
                        rounded={rounded}
                        fillMode={fillMode}
                    />
                </FloatingLabel>
            </span>
            {opened &&
                <Popup className="k-calendar-container k-daterangepicker-popup">
                    <MultiViewCalendarNormal dir={dir} />
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
                            <Button text="Cancel" size="large" themeColor="base" className="k-time-cancel" />
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
DateRangePicker.moduleName = "date-range-picker";
DateRangePicker.folderName = "daterangepicker";

export default DateRangePicker;
