import { classNames, States } from '../misc';

export const TIMELINEFLAGWRAP_CLASSNAME = `k-timeline-flag-wrap`;

const states = [
    States.focus,
    States.selected
];

const options = {};

export type KendoFlagWrapProps = {
    year?: string;
};

export const TimelineFlagWrap = (
    props: KendoFlagWrapProps &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        year = "2020",
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                TIMELINEFLAGWRAP_CLASSNAME
            )}>
            <span className="k-timeline-flag">{year}</span>
            {props.children}
        </li>
    );
};

TimelineFlagWrap.states = states;
TimelineFlagWrap.options = options;
TimelineFlagWrap.className = TIMELINEFLAGWRAP_CLASSNAME;

export default TimelineFlagWrap;
