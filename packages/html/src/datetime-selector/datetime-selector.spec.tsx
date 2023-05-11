import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { Calendar } from '../calendar';
import { TimeSelector, TimeSelectorHeader } from '../time-selector';
import { classNames } from '../misc';

const DATETIMESELECTOR_CLASSNAME = `k-datetime-wrap`;

const states = [];

const options = {};

export type KendoDateTimeSelectorProps = {
    tab?: 'time' | 'date'
};

const defaultProps = {
    tab: 'date'
} as const;

export const DateTimeSelector = (
    props: KendoDateTimeSelectorProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        tab = defaultProps.tab,
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
                }
            )}>
            <div className="k-datetime-buttongroup">
                <ButtonGroup stretched>
                    <Button className="k-group-start" selected={tab === 'date'}>Date</Button>
                    <Button className="k-group-end" selected={tab === 'time'}>Time</Button>
                </ButtonGroup>
            </div>
            <div className="k-datetime-selector">
                {tab === 'time'
                    ? <>
                        <div className="k-datetime-calendar-wrap"></div>
                        <div className="k-datetime-time-wrap">
                            <TimeSelector columns={[ "HH", "mm", "ss", "tt" ]} focusedColumn="mm" header={(
                                <TimeSelectorHeader title="10:00:00 AM">
                                    <Button fillMode="flat" className="k-time-now">Now</Button>
                                </TimeSelectorHeader>
                            )}/>
                        </div>
                    </>
                    : <>
                        <div className="k-datetime-calendar-wrap">
                            <Calendar showOtherMonth></Calendar>
                        </div>
                        <div className="k-datetime-time-wrap"></div>
                    </>
                }
            </div>

            <ActionButtons className="k-datetime-footer" alignment="stretched">
                <Button themeColor="primary" className="k-time-accept">Set</Button>
                <Button className="k-time-cancel">Cancel</Button>
            </ActionButtons>
        </div>
    );
};

DateTimeSelector.states = states;
DateTimeSelector.options = options;
DateTimeSelector.className = DATETIMESELECTOR_CLASSNAME;
DateTimeSelector.defaultProps = defaultProps;

export default DateTimeSelector;
