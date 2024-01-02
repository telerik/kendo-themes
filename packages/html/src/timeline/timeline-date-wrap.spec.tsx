import { classNames } from '../misc';

export const TIMELINEDATEWRAP_CLASSNAME = `k-timeline-date-wrap`;

const states = [];

const options = {};

export type KendoDateWrapProps = {
    date?: string;
};

const defaultProps = {
    date: "May 25, 2008",
};

export const TimelineDateWrap = (
    props: KendoDateWrapProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        date = defaultProps.date,
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
TimelineDateWrap.defaultProps = defaultProps;

export default TimelineDateWrap;
