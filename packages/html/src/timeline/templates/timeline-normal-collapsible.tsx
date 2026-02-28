import { Timeline, TimelineFlagWrap, VerticalTimelineEvent } from "../../timeline";

export const TimelineNormalCollapsible = (props) => (
    <Timeline
        collapsibleEvents={true}
        children={
            <ul>
                <TimelineFlagWrap year="2010"/>
                <VerticalTimelineEvent id="ev-1" date="May 11, 2010" collapsed={false} showCollapseButton={true}></VerticalTimelineEvent>
                <TimelineFlagWrap year="2011" />
                <VerticalTimelineEvent id="ev-2" date="Oct 11, 2011" subtitle="Collapsed" collapsed={true} showCollapseButton={true}></VerticalTimelineEvent>
            </ul>
        }
        {...props}>
    </Timeline>
);
