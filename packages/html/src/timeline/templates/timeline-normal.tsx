import { Timeline, TimelineFlagWrap, VerticalTimelineEvent } from "../../timeline";

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

export default TimelineNormal;
