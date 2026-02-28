import { classNames } from '../misc';
import { Button } from '../button';
import { TimelineTrack } from '../timeline';

import { KendoComponent } from '../_types/component';
import { TIMELINE_FOLDER_NAME, TIMELINE_MODULE_NAME } from './constants';
export const TIMELINETRACKWRAP_CLASSNAME = `k-timeline-track-wrap`;

export const TimelineTrackWrap: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
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
                TIMELINETRACKWRAP_CLASSNAME
            )}>
            <Button className="k-timeline-arrow k-timeline-arrow-left" rounded="full" icon="caret-alt-left" disabled aria-hidden="true" tabIndex={-1} />
            <Button className="k-timeline-arrow k-timeline-arrow-right" rounded="full" icon="caret-alt-right" aria-hidden="true" tabIndex={-1} />
            <TimelineTrack>
                {props.children}
            </TimelineTrack>
        </div>
    );
};

TimelineTrackWrap.className = TIMELINETRACKWRAP_CLASSNAME;
TimelineTrackWrap.moduleName = TIMELINE_MODULE_NAME;
TimelineTrackWrap.folderName = TIMELINE_FOLDER_NAME;

export default TimelineTrackWrap;
