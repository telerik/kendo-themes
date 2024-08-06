import { classNames } from '../misc';

export const TIMELINEDATEWRAP_CLASSNAME = `k-timeline-date-wrap`;

const states = [];

const options = {};

export type KendoDateWrapProps = {
    date?: string;
};

export const TimelineDateWrap = (
    props: KendoDateWrapProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        date = "May 25, 2008",
        ...other
    } = props;

    return (

        <div
            {...other}
            className={classNames(
                props.className,
                TIMELINEDATEWRAP_CLASSNAME
            )}>
            <span className="k-timeline-date">{date}</span>
        </div>
    );
};

TimelineDateWrap.states = states;
TimelineDateWrap.options = options;
TimelineDateWrap.className = TIMELINEDATEWRAP_CLASSNAME;

export default TimelineDateWrap;
