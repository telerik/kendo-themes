import { classNames } from '../misc';
import { Button } from '../button';
import { TimelineTrack } from '../timeline';

export const TIMELINETRACKWRAP_CLASSNAME = `k-timeline-track-wrap`;

export const TimelineTrackWrap = (
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
            <Button className="k-timeline-arrow k-timeline-arrow-left" rounded="full" icon="caret-alt-left" disabled />
            <Button className="k-timeline-arrow k-timeline-arrow-right" rounded="full" icon="caret-alt-right" />
            <TimelineTrack>
                {props.children}
            </TimelineTrack>
        </div>
    );
};

export default TimelineTrackWrap;
