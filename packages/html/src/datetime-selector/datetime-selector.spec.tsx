import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { CalendarNormal } from '../calendar';
import { TimeSelector, TimeSelectorHeader } from '../time-selector';
import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { DATETIME_SELECTOR_FOLDER_NAME, DATETIME_SELECTOR_MODULE_NAME } from './constants';
const DATETIMESELECTOR_CLASSNAME = `k-datetime-wrap`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
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
    actionButtons: true
} as const;

export const DateTimeSelector: KendoComponent<KendoDateTimeSelectorProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoDateTimeSelectorProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
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
            )}
            role="group"
            aria-label="Date and time selector">
            <div className="k-datetime-buttongroup" role="tablist">
                <ButtonGroup stretched role="presentation">
                    <Button className="k-group-start" size={size} selected={tab === 'date'} role="tab" aria-selected={tab === 'date' ? 'true' : 'false'}>Date</Button>
                    <Button className="k-group-end" size={size} selected={tab === 'time'} role="tab" aria-selected={tab === 'time' ? 'true' : 'false'}>Time</Button>
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
DateTimeSelector.moduleName = DATETIME_SELECTOR_MODULE_NAME;
DateTimeSelector.folderName = DATETIME_SELECTOR_FOLDER_NAME;

/**
 * Accessibility specification for DateTimeSelector.
 *
 * @accessibility
 * - The wrapper has role=group with aria-label
 * - Tab buttons use role=tab with aria-selected
 * - Embedded Calendar and TimeSelector follow their own ARIA specs
 * - Action buttons (Set/Cancel) are accessible via button semantics
 *
 * @wcag 4.1.2 Name, Role, Value - tabbed group for date/time switching
 */
DateTimeSelector.ariaSpec = {
    selector: '.k-datetime-wrap',
    rules: [
        { selector: '.k-datetime-wrap', attribute: 'role=group', usage: 'Groups the date/time selector components.' },
        { selector: '.k-datetime-wrap', attribute: 'aria-label', usage: 'Describes the date/time selector purpose.' },
        { selector: '.k-datetime-buttongroup', attribute: 'role=tablist', usage: 'The buttongroup acts as a tablist for Date/Time tabs.' },
        { selector: '.k-datetime-buttongroup .k-button', attribute: 'role=tab', usage: 'Each tab button has role=tab.' },
        { selector: '.k-datetime-buttongroup .k-button', attribute: 'aria-selected', usage: 'Indicates which tab is currently active.' },
    ]
};

export default DateTimeSelector;
