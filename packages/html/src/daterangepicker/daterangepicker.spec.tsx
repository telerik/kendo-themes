import { classNames, stateClassNames, States, Size, Roundness, FillMode } from '../misc';
import { DateInput } from '../dateinput';
import { FloatingLabel } from '../floating-label';
import { Button } from '../button';
import { MultiViewCalendar } from '../multiviewcalendar';
import { Popup } from '../popup';
import { ActionSheet, ActionSheetHeader, KendoActionSheetProps } from '../action-sheet';

export const DATERANGEPICKER_CLASSNAME = `k-daterangepicker`;

const states = [
    States.disabled
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ]
};

const defaultProps = {};

export type KendoDateRangePickerOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoDateRangePickerProps = KendoDateRangePickerOptions & {
    swapButton?: boolean;
    opened?: boolean;
    adaptive?: boolean;
    adaptiveSettings?: KendoActionSheetProps;
    dir?: 'ltr' | 'rtl';
};

export type KendoDateRangePickerState = { [K in (typeof states)[number]]?: boolean };

export const DateRangePicker = (
    props: KendoDateRangePickerProps &
        KendoDateRangePickerState &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        rounded,
        fillMode,
        disabled,
        swapButton,
        opened,
        adaptive,
        adaptiveSettings,
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
                        showSpinButton={false}
                        size={size}
                        rounded={rounded}
                        fillMode={fillMode}
                    />
                </FloatingLabel>
            </span>
            { opened &&
                <Popup className="k-calendar-container k-daterangepicker-popup">
                    <MultiViewCalendar dir={dir} />
                </Popup>
            }
            { adaptive &&
                <ActionSheet adaptive={true} {...adaptiveSettings} >
                    <ActionSheetHeader
                        actions={[ 'x' ]}
                        title="Select Dates"
                        subTitle="DD / MM / YY">
                    </ActionSheetHeader>
                    <div className="k-scrollable-wrap">
                        <MultiViewCalendar size="large" calendarView="month" orientation="vertical" showCalendarCaption />
                    </div>
                </ActionSheet>
            }
        </>
    );
};

DateRangePicker.states = states;
DateRangePicker.options = options;
DateRangePicker.className = DATERANGEPICKER_CLASSNAME;
DateRangePicker.defaultProps = defaultProps;

export default DateRangePicker;
