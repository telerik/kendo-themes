import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const TIMELINEEVENTLIST_CLASSNAME = `k-timeline-events-list`;

export const TimelineEventList: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
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

TimelineEventList.className = TIMELINEEVENTLIST_CLASSNAME;

export default TimelineEventList;
