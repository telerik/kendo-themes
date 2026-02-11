import { Timeline } from "../../timeline/timeline.spec";
import { TimelineFlagWrap } from "../../timeline/timeline-flag-wrap.spec";
import { VerticalTimelineEvent } from "../../timeline/vertical-timeline-event.spec";

export const TimelineNormal = (props) => (
    <Timeline
        children={
            <ul>
                <TimelineFlagWrap year="2010"/>
                <VerticalTimelineEvent date="May 11, 2010"></VerticalTimelineEvent>
                <TimelineFlagWrap year="2011" />
                <VerticalTimelineEvent date="Oct 11, 2011"></VerticalTimelineEvent>
            </ul>
        }
        {...props}>
    </Timeline>
);
