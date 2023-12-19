import { classNames } from '../misc';
import { Icon } from '../icon';

export const TIMELINECARDTITLE_CLASSNAME = `k-card-title`;

const states = [];

const defaultProps = {};

export type KendoTimelineCardTitleProps = {
    collapsible?: boolean;
};

export const TimelineCardTitle = (
    props: KendoTimelineCardTitleProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        collapsible,
        children,
        ...other
    } = props;

    return (
        <div
            className={classNames(
                props.className,
                TIMELINECARDTITLE_CLASSNAME,
            )}
            {...other}
        >
            <span className="k-event-title">{children}</span>
            {collapsible && <span className="k-event-collapse k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button"><Icon icon="chevron-right" className="k-button-icon"/></span>}
        </div>
    );
};

TimelineCardTitle.states = states;
TimelineCardTitle.className = TIMELINECARDTITLE_CLASSNAME;
TimelineCardTitle.defaultProps = defaultProps;

export default TimelineCardTitle;