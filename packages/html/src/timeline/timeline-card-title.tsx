import { classNames } from '../misc';
import { IconButton } from '../button';

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
            {collapsible && <IconButton fillMode="flat" icon="chevron-right" className="k-event-collapse"></IconButton>}
        </div>
    );
};

TimelineCardTitle.states = states;
TimelineCardTitle.className = TIMELINECARDTITLE_CLASSNAME;
TimelineCardTitle.defaultProps = defaultProps;

export default TimelineCardTitle;