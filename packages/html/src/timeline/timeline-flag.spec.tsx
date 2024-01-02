import { classNames } from '../misc';

export const TIMELINEFLAG_CLASSNAME = `k-timeline-flag`;

export type KendoTimelineFlagOptions = {
    content?: string;
};

export const TimelineFlag = (
    props: KendoTimelineFlagOptions &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        content,
        ...other
    } = props;

    return (

        <span
            {...other}
            className={classNames(
                props.className,
                TIMELINEFLAG_CLASSNAME
            )}>
            {content}
        </span>
    );
};

export default TimelineFlag;
