import { classNames } from '../misc';
import { CardHeader, CardBody, CardSubtitle } from '../card';
import { TimelineCard, TimelineCardTitle } from '../timeline';

export const TIMELINEHORIZONTALEVENT_CLASSNAME = `k-timeline-event`;

const states = [];

const options = {};

export type KendoHorizontalTimelineEventProps = {
    content?: string | React.JSX.Element;
    title?: string;
    subtitle?: string;
};

export const HorizontalTimelineEvent = (
    props: KendoHorizontalTimelineEventProps &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        content = "Event content",
        title = "Event title",
        subtitle = "Event subtitle",
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                TIMELINEHORIZONTALEVENT_CLASSNAME
            )}>
            {content && <div className={classNames('k-timeline-card')}>
                <TimelineCard orientation="vertical" callout="top">
                    <div className="k-card-inner">
                        <CardHeader>
                            <TimelineCardTitle>{title}</TimelineCardTitle>
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

HorizontalTimelineEvent.states = states;
HorizontalTimelineEvent.options = options;
HorizontalTimelineEvent.className = TIMELINEHORIZONTALEVENT_CLASSNAME;

export default HorizontalTimelineEvent;
