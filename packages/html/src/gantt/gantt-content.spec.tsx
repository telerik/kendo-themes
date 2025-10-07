import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GANTT_FOLDER_NAME, GANTT_MODULE_NAME } from './constants';
const className = `k-gantt-content`;

export const GanttContent: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            props.className,
            className,
        )}>
        {props.children}
    </div>
);

GanttContent.className = className;
GanttContent.moduleName = GANTT_MODULE_NAME;
GanttContent.folderName = GANTT_FOLDER_NAME;
