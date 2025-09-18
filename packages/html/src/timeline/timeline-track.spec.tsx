import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Timeline } from './timeline.spec';
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
TimelineTrack.moduleName = Timeline.moduleName;
TimelineTrack.folderName = Timeline.folderName;

export default TimelineTrack;
