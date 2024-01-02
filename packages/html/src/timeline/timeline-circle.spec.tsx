import { classNames } from '../misc';

export const TIMELINECIRCLE_CLASSNAME = `k-timeline-circle`;

export const TimelineCircle = (
    props: React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        ...other
    } = props;

    return (

        <span
            {...other}
            className={classNames(
                props.className,
                TIMELINECIRCLE_CLASSNAME
            )}>
        </span>
    );
};

export default TimelineCircle;
