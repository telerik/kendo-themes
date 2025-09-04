import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
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
TimelineCircle.moduleName = "timeline";
TimelineCircle.folderName = "timeline";

export default TimelineCircle;
