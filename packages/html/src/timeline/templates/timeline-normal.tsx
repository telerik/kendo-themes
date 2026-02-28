import { Timeline, TimelineFlagWrap, VerticalTimelineEvent } from "../../timeline";

export const TimelineNormal = (props) => (
    <Timeline
        children={
            <ul>
                <TimelineFlagWrap year="2010"/>
                <VerticalTimelineEvent id="ev-1" date="May 11, 2010"></VerticalTimelineEvent>
                <TimelineFlagWrap year="2011" />
                <VerticalTimelineEvent id="ev-2" date="Oct 11, 2011"></VerticalTimelineEvent>
            </ul>
        }
        {...props}>
    </Timeline>
);
