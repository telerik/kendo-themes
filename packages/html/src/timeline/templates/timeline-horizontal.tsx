import { Timeline } from "../../timeline/timeline.spec";
import { TimelineTrackWrap } from "../../timeline/timeline-track-wrap.spec";
import { TimelineTrackItem } from "../../timeline/timeline-track-item.spec";
import { TimelineFlag } from "../../timeline/timeline-flag.spec";
import { TimelineDateWrap } from "../../timeline/timeline-date-wrap.spec";
import { TimelineCircle } from "../../timeline/timeline-circle.spec";
import { TimelineEventList } from "../../timeline/timeline-event-list.spec";
import { HorizontalTimelineEvent } from "../../timeline/horizontal-timeline-event.spec";

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
