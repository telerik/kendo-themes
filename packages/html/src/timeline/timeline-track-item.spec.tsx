import { States, classNames, stateClassNames } from '../misc';

export const TIMELINETRACKITEM_CLASSNAME = `k-timeline-track-item`;

const states = [
    States.focus,
];

export type KendoTimelineTrackItemOptions = {
    children?: React.JSX.Element | React.JSX.Element[];
    content?: string;
};

export type KendoTimelineTrackItemState = { [K in (typeof states)[number]]?: boolean };

export const TimelineTrackItem = (
    props: KendoTimelineTrackItemOptions &
        KendoTimelineTrackItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        content,
        focus,
        ...other
    } = props;

    return (

        <li
            {...other}
            className={classNames(
                props.className,
                TIMELINETRACKITEM_CLASSNAME,
                stateClassNames(TIMELINETRACKITEM_CLASSNAME, {
                    focus
                }),
            )}>
            {content}
            {props.children}
        </li>
    );
};

TimelineTrackItem.states = states;
TimelineTrackItem.className = TIMELINETRACKITEM_CLASSNAME;

export default TimelineTrackItem;
