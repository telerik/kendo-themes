import { nextId } from "../../misc";
import { Timeline, TimelineFlagWrap, VerticalTimelineEvent } from "../../timeline";

export const TimelineNormal = (props) => {
    const ev1Id = nextId('tl-ev');
    const ev2Id = nextId('tl-ev');

    return (
        <Timeline
            children={
                <ul>
                    <TimelineFlagWrap year="2010"/>
                    <VerticalTimelineEvent id={ev1Id} date="May 11, 2010"></VerticalTimelineEvent>
                    <TimelineFlagWrap year="2011" />
                    <VerticalTimelineEvent id={ev2Id} date="Oct 11, 2011"></VerticalTimelineEvent>
                </ul>
            }
            {...props}>
        </Timeline>
    );
};
