import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { Timeline } from './timeline.spec';
export const TIMELINECIRCLE_CLASSNAME = `k-timeline-circle`;

export const TimelineCircle: KendoComponent<React.HTMLAttributes<HTMLSpanElement>> = (
    props: React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        ...other
    } = props;

    return (

        <span
            {...other}
            className={classNames(
                props.className,
                TIMELINECIRCLE_CLASSNAME
            )}>
        </span>
    );
};

TimelineCircle.className = TIMELINECIRCLE_CLASSNAME;
TimelineCircle.moduleName = Timeline.moduleName;
TimelineCircle.folderName = Timeline.folderName;

export default TimelineCircle;
