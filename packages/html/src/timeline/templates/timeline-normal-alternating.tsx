import { nextId } from "../../misc";
import { Timeline, TimelineFlagWrap, VerticalTimelineEvent } from "../../timeline";

export const TimelineNormalAlternating = (props) => {
    const ev1Id = nextId('tl-ev');
    const ev2Id = nextId('tl-ev');
    const ev3Id = nextId('tl-ev');
    const ev4Id = nextId('tl-ev');

    return (
        <Timeline
            alternatingMode={true}
            children={
                <ul>
                    <TimelineFlagWrap year="2010"/>
                    <VerticalTimelineEvent id={ev1Id} date="Apr 11, 2010" reverse={true}/>
                    <VerticalTimelineEvent id={ev2Id} date="May 11, 2010"></VerticalTimelineEvent>
                    <TimelineFlagWrap year="2011" />
                    <VerticalTimelineEvent id={ev3Id} date="Oct 11, 2011" reverse={true}></VerticalTimelineEvent>
                    <VerticalTimelineEvent id={ev4Id} date="Dec 11, 2011"></VerticalTimelineEvent>
                </ul>
            }
            {...props}>
        </Timeline>
    );
};
