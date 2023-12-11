import { classNames } from '../misc';

export const TIMELINETRACKITEM_CLASSNAME = `k-timeline-track-item`;

export type KendoTimelineTrackItemOptions = {
    children?: JSX.Element | JSX.Element[];
    content?: string;
};

export const TimelineTrackItem = (
    props: KendoTimelineTrackItemOptions &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        content,
        ...other
    } = props;

    return (

        <li
            {...other}
            className={classNames(
                props.className,
                TIMELINETRACKITEM_CLASSNAME
            )}>
            {content}
            {props.children}
        </li>
    );
};

export default TimelineTrackItem;
