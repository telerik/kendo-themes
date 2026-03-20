import { Timeline, KendoTimelineProps } from '../timeline.spec';
import { TimelineCircle } from '../timeline-circle.spec';
import { TimelineDateWrap } from '../timeline-date-wrap.spec';
import { TimelineFlag } from '../timeline-flag.spec';
import { TimelineTrackItem } from '../timeline-track-item.spec';
import { TimelineTrackWrap } from '../timeline-track-wrap.spec';
import { TimelineFlagWrap } from '../timeline-flag-wrap.spec';
import { VerticalTimelineEvent } from '../vertical-timeline-event.spec';
import { HorizontalTimelineEvent } from '../horizontal-timeline-event.spec';
import { TimelineEventList } from '../timeline-event-list.spec';
import { TimelineHorizontal } from '../templates/timeline-horizontal';
import { TimelineNormalAlternating } from '../templates/timeline-normal-alternating';

const options = Timeline.options;
const states = Timeline.states;
const defaults = {
  ...Timeline.defaultOptions,
  variant: 'vertical',
};
const variants = [
    {
        name: 'vertical',
        title: 'Vertical',
    },
    {
        name: 'horizontal',
        title: 'Horizontal',
    },
];
const modifiers = [];

const style = `
    .k-timeline-events-list .k-timeline-scrollable-wrap {
        height: 115px !important;
    }
`;

export const TimelineDemo = (
    props: KendoTimelineProps & { variant?: (typeof variants)[number]['name'] }
) => {
    const { variant, ...other } = props;

    switch (variant) {
        case 'horizontal':
            return (
                <>
                    <style>{style}</style>
                    <TimelineHorizontal {...other}>
                        <TimelineTrackWrap>
                            <TimelineTrackItem className="k-timeline-flag-wrap">
                                <TimelineFlag content="Timeline Flag"></TimelineFlag>
                            </TimelineTrackItem>
                            <TimelineTrackItem>
                                <TimelineDateWrap date="Date"></TimelineDateWrap>
                                <TimelineCircle></TimelineCircle>
                            </TimelineTrackItem>
                            <TimelineTrackItem className="k-focus">
                                <TimelineDateWrap date="Current Date"></TimelineDateWrap>
                                <TimelineCircle></TimelineCircle>
                            </TimelineTrackItem>
                            <TimelineTrackItem>
                                <TimelineDateWrap date="Date"></TimelineDateWrap>
                                <TimelineCircle></TimelineCircle>
                            </TimelineTrackItem>
                            <TimelineTrackItem className="k-timeline-flag-wrap">
                                <TimelineFlag content="Timeline Flag"></TimelineFlag>
                            </TimelineTrackItem>
                        </TimelineTrackWrap>
                        <TimelineEventList>
                            <HorizontalTimelineEvent />
                        </TimelineEventList>
                    </TimelineHorizontal>
                </>
            );
        case 'vertical':
        default:
            return (
                <TimelineNormalAlternating {...other}>
                    <ul>
                        <TimelineFlagWrap year="Timeline Flag" />
                        <VerticalTimelineEvent title="Header" subtitle="Subheader" showCollapseButton date="Timeline Date" reverse={true} />
                        <TimelineFlagWrap year="Timeline Flag" />
                        <VerticalTimelineEvent title="Header" subtitle="Subheader" showCollapseButton date="Timeline Date"></VerticalTimelineEvent>
                    </ul>
                </TimelineNormalAlternating>
            );
    }
}


TimelineDemo.options = options;
TimelineDemo.states = states;
TimelineDemo.variants = variants;
TimelineDemo.defaultOptions = defaults;
TimelineDemo.modifiers = modifiers;
TimelineDemo.className = Timeline.className;

export default TimelineDemo;

