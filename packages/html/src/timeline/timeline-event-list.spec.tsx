import { classNames } from '../misc';

export const TIMELINEEVENTLIST_CLASSNAME = `k-timeline-events-list`;

export const TimelineEventList = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (

        <div
            {...other}
            className={classNames(
                props.className,
                TIMELINEEVENTLIST_CLASSNAME
            )}>
            <ul className="k-timeline-scrollable-wrap">
                {props.children}
            </ul>
        </div>
    );
};

export default TimelineEventList;