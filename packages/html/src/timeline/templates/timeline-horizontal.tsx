import { Timeline, TimelineTrackWrap, TimelineTrackItem, TimelineFlag, TimelineDateWrap, TimelineCircle, TimelineEventList, HorizontalTimelineEvent } from "../../timeline";

export const TimelineHorizontal = (props) => (
    <Timeline
        orientation="horizontal"
        children={
            <>
                <TimelineTrackWrap>
                    <TimelineTrackItem className="k-timeline-flag-wrap">
                        <TimelineFlag content="2015"></TimelineFlag>
                    </TimelineTrackItem>
                    <TimelineTrackItem>
                        <TimelineDateWrap date="Jan 14, 2015"></TimelineDateWrap>
                        <TimelineCircle></TimelineCircle>
                    </TimelineTrackItem>
                    <TimelineTrackItem focus>
                        <TimelineDateWrap date="Jun 1, 2015"></TimelineDateWrap>
                        <TimelineCircle></TimelineCircle>
                    </TimelineTrackItem>
                    <TimelineTrackItem>
                        <TimelineDateWrap date="Sep 29, 2015"></TimelineDateWrap>
                        <TimelineCircle></TimelineCircle>
                    </TimelineTrackItem>
                    <TimelineTrackItem className="k-timeline-flag-wrap">
                        <TimelineFlag content="2016"></TimelineFlag>
                    </TimelineTrackItem>
                </TimelineTrackWrap>
                <TimelineEventList>
                    <HorizontalTimelineEvent />
                </TimelineEventList>
            </>
        }
        {...props}>
    </Timeline>
);

export default TimelineHorizontal;
