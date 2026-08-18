import { classNames, stateClassNames, States, Size, Roundness, FillMode, nextId } from '../misc';
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
    States.disabled
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
};

export type KendoDateRangePickerState = { [K in (typeof states)[number]]?: boolean };

/**
 * @aria {aria-label|aria-labelledby} Each date input needs an accessible name.
 * @ux {Range selection} Start and end dates are chosen via two inputs linked to a shared popup calendar.
 * @ux {Linked calendars} Both calendar months advance together as the user navigates.
 * @ux {Inline mode} Can be rendered as an always-visible calendar without a popup.
 * @ux {Disabled state} When disabled, both inputs are non-interactive.
 */
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

    const popupId = nextId('daterangepicker-popup');

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
                        aria-label="Start date"
                    />
                </FloatingLabel>
                {swapButton && (
                    <Button
                        rounded={rounded}
                        size={size}
                        fillMode="flat"
                        icon="arrows-swap"
                        iconClassName="k-rotate-90"
                        aria-label="Swap dates"
                    />
                )}
                <FloatingLabel label="End">
                    <DateInput
                        value={valueSecond}
                        showSpinButton={false}
                        size={size}
                        rounded={rounded}
                        fillMode={fillMode}
                        aria-label="End date"
                    />
                </FloatingLabel>
            </span>
            {opened &&
                <Popup className="k-calendar-container k-daterangepicker-popup">
                    <MultiViewCalendarNormal dir={dir} />
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

/**
 * @keyboard {Escape} Closes the popup
 * @keyboard {Alt/Opt(Mac) + ArrowDown} Opens the popup
 * @keyboard {Alt/Opt(Mac) + ArrowUp} Closes the popup
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#combobox WAI ARIA specification for combobox
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/datepicker-dialog.html ARIA practices Date Picker Dialog Example
 */

export default DateRangePicker;
