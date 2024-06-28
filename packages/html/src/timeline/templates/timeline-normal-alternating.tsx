import { Timeline, TimelineFlagWrap, VerticalTimelineEvent } from "../../timeline";

export const TimelineNormalAlternating = (props) => (
    <Timeline
        alternatingMode={true}
        children={
            <ul>
                <TimelineFlagWrap year="2010"/>
                <VerticalTimelineEvent date="Apr 11, 2010" reverse={true}/>
                <VerticalTimelineEvent date="May 11, 2010"></VerticalTimelineEvent>
                <TimelineFlagWrap year="2011" />
                <VerticalTimelineEvent date="Oct 11, 2011" reverse={true}></VerticalTimelineEvent>
                <VerticalTimelineEvent date="Dec 11, 2011"></VerticalTimelineEvent>
            </ul>
        }
        {...props}>
    </Timeline>
);

export default TimelineNormalAlternating;
