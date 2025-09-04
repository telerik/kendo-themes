import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { CalendarNormal } from '../calendar';
import { TimeSelector, TimeSelectorHeader } from '../time-selector';
import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
const DATETIMESELECTOR_CLASSNAME = `k-datetime-wrap`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoDateTimeSelectorOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoDateTimeSelectorProps = KendoDateTimeSelectorOptions & {
    tab?: 'time' | 'date';
    dir?: 'ltr' | 'rtl';
    actionButtons?: boolean;
};

const defaultOptions = {
    tab: 'date',
    size: Size.medium,
    actionButtons: true
} as const;

export const DateTimeSelector: KendoComponent<KendoDateTimeSelectorProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoDateTimeSelectorProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        tab = defaultOptions.tab,
        actionButtons = defaultOptions.actionButtons,
        dir,
        ...other
    } = props;


    return (
        <div
            {...other}
            className={classNames(
                props.className,
                DATETIMESELECTOR_CLASSNAME,
                {
                    'k-date-tab': tab === 'date',
                    'k-time-tab': tab === 'time',
                },
                optionClassNames(DATETIMESELECTOR_CLASSNAME, {
                    size
                })
            )}>
            <div className="k-datetime-buttongroup">
                <ButtonGroup stretched>
                    <Button className="k-group-start" size={size} selected={tab === 'date'}>Date</Button>
                    <Button className="k-group-end" size={size} selected={tab === 'time'}>Time</Button>
                </ButtonGroup>
            </div>
            <div className="k-datetime-selector">
                {tab === 'time'
                    ? <>
                        <div className="k-datetime-calendar-wrap"></div>
                        <div className="k-datetime-time-wrap">
                            <TimeSelector size={size} columns={[ "HH", "mm", "ss", "tt" ]} focusedColumn="mm" header={(
                                <TimeSelectorHeader title="10:00:00 AM">
                                    <Button size={size} fillMode="flat" className="k-time-now">Now</Button>
                                </TimeSelectorHeader>
                            )}/>
                        </div>
                    </>
                    : <>
                        <div className="k-datetime-calendar-wrap">
                            <CalendarNormal size={size} showOtherMonth dir={dir}></CalendarNormal>
                        </div>
                        <div className="k-datetime-time-wrap"></div>
                    </>
                }
            </div>

            { actionButtons &&
                <ActionButtons className="k-datetime-footer" alignment="stretched">
                    <Button size={size} themeColor="primary" className="k-time-accept">Set</Button>
                    <Button size={size} className="k-time-cancel">Cancel</Button>
                </ActionButtons>
            }
        </div>
    );
};

DateTimeSelector.states = states;
DateTimeSelector.options = options;
DateTimeSelector.className = DATETIMESELECTOR_CLASSNAME;
DateTimeSelector.defaultOptions = defaultOptions;
DateTimeSelector.moduleName = "date-time-picker";
DateTimeSelector.folderName = "datetimepicker";

export default DateTimeSelector;
