import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { TIMELINE_FOLDER_NAME, TIMELINE_MODULE_NAME } from './constants';
export const TIMELINEFLAG_CLASSNAME = `k-timeline-flag`;

export type KendoTimelineFlagOptions = {
    content?: string;
};

export const TimelineFlag: KendoComponent<KendoTimelineFlagOptions & React.HTMLAttributes<HTMLSpanElement>> = (
    props: KendoTimelineFlagOptions &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        content,
        ...other
    } = props;

    return (

        <span
            {...other}
            className={classNames(
                props.className,
                TIMELINEFLAG_CLASSNAME
            )}>
            {content}
        </span>
    );
};

TimelineFlag.className = TIMELINEFLAG_CLASSNAME;
TimelineFlag.moduleName = TIMELINE_MODULE_NAME;
TimelineFlag.folderName = TIMELINE_FOLDER_NAME;

export default TimelineFlag;
