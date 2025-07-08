import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const TIMELINETRACK_CLASSNAME = `k-timeline-track`;

export const TimelineTrack: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
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

TimelineTrack.className = TIMELINETRACK_CLASSNAME;

export default TimelineTrack;
