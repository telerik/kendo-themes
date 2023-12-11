import { classNames } from '../misc';

export const TIMELINETRACK_CLASSNAME = `k-timeline-track`;

export const TimelineTrack = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (

        <div
            {...other}
            className={classNames(
                props.className,
                TIMELINETRACK_CLASSNAME
            )}>
            <ul className="k-timeline-scrollable-wrap">
                {props.children}
            </ul>
        </div>
    );
};

export default TimelineTrack;
