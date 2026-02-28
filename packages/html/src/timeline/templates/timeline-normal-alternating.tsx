import { Timeline, TimelineFlagWrap, VerticalTimelineEvent } from "../../timeline";

export const TimelineNormalAlternating = (props) => (
    <Timeline
        alternatingMode={true}
        children={
            <ul>
                <TimelineFlagWrap year="2010"/>
                <VerticalTimelineEvent id="ev-1" date="Apr 11, 2010" reverse={true}/>
                <VerticalTimelineEvent id="ev-2" date="May 11, 2010"></VerticalTimelineEvent>
                <TimelineFlagWrap year="2011" />
                <VerticalTimelineEvent id="ev-3" date="Oct 11, 2011" reverse={true}></VerticalTimelineEvent>
                <VerticalTimelineEvent id="ev-4" date="Dec 11, 2011"></VerticalTimelineEvent>
            </ul>
        }
        {...props}>
    </Timeline>
);
