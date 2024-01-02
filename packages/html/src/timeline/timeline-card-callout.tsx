import { classNames } from '../misc';
import { CardCallout, KendoCardCalloutProps } from '../card';

export const TIMELINECARDCALLOUT_CLASSNAME = `k-timeline-card-callout`;

const states = [];

const defaultProps = {};

export const TimelineCardCallout = (
    props:
        KendoCardCalloutProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <CardCallout
            className={classNames(
                props.className,
                TIMELINECARDCALLOUT_CLASSNAME,
            )}
            {...other}
        >
        </CardCallout>
    );
};

TimelineCardCallout.states = states;
TimelineCardCallout.className = TIMELINECARDCALLOUT_CLASSNAME;
TimelineCardCallout.defaultProps = defaultProps;

export default TimelineCardCallout;