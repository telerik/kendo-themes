import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const TIMELINEDATEWRAP_CLASSNAME = `k-timeline-date-wrap`;

const states = [];

const options = {};

export type KendoDateWrapProps = {
    date?: string;
};

const defaultOptions = {
    date: "May 25, 2008",
};

export const TimelineDateWrap: KendoComponent<KendoDateWrapProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoDateWrapProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        date = defaultOptions.date,
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
TimelineDateWrap.defaultOptions = defaultOptions;

export default TimelineDateWrap;
