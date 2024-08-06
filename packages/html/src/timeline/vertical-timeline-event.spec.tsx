import { classNames } from '../misc';
import { CardHeader, CardBody, CardSubtitle } from '../card';
import { TimelineCard, TimelineCardTitle, TimelineCircle } from '../timeline';

export const TIMELINEVERTICALEVENT_CLASSNAME = `k-timeline-event`;

const states = [];

const options = {};

export type KendoVerticalTimelineEventProps = {
    date?: string;
    content?: string | React.JSX.Element;
    collapsed?: boolean;
    reverse?: boolean;
    title?: string;
    subtitle?: string;
    showCollapseButton?: boolean;
};

export const VerticalTimelineEvent = (
    props: KendoVerticalTimelineEventProps &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        collapsed = false,
        reverse = false,
        title = "Event title",
        subtitle = "Event subtitle",
        content = "Event content",
        date,
        showCollapseButton,
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                TIMELINEVERTICALEVENT_CLASSNAME,
                { "k-reverse": reverse }
            )}>
            {date && <div className="k-timeline-date-wrap"><span className="k-timeline-date">{date}</span></div>}
            {<TimelineCircle />}
            {content && <div className={classNames('k-timeline-card', { 'k-collapsed': collapsed } )}>
                <TimelineCard { ...(reverse ? { callout: "right" } : { callout: "left" } )} >
                    <div className="k-card-inner">
                        <CardHeader>
                            <TimelineCardTitle collapsible={showCollapseButton}>{title}</TimelineCardTitle>
                            <CardSubtitle>{subtitle}</CardSubtitle>
                        </CardHeader>
                        <CardBody>
                            <div className="k-card-description">{content}</div>
                        </CardBody>
                    </div>
                </TimelineCard>

            </div>}
            {props.children}
        </li>
    );
};

VerticalTimelineEvent.states = states;
VerticalTimelineEvent.options = options;
VerticalTimelineEvent.className = TIMELINEVERTICALEVENT_CLASSNAME;

export default VerticalTimelineEvent;
