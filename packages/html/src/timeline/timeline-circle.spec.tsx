import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { TIMELINE_FOLDER_NAME, TIMELINE_MODULE_NAME } from './constants';
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
TimelineCircle.moduleName = TIMELINE_MODULE_NAME;
TimelineCircle.folderName = TIMELINE_FOLDER_NAME;

export default TimelineCircle;
