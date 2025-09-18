import { Toolbar, KendoToolbarProps } from '../toolbar';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GANTT_FOLDER_NAME, GANTT_MODULE_NAME } from './constants';
const className = `k-gantt-header`;

export const GanttHeaderToolbar: KendoComponent<KendoToolbarProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoToolbarProps
        & React.HTMLAttributes<HTMLDivElement>
) => (
    <Toolbar
        {...props}
        className={classNames(
            props.className,
            className,
            `k-gantt-toolbar`
        )}
    >
        {props.children}
    </Toolbar>
);

GanttHeaderToolbar.className = className;
GanttHeaderToolbar.moduleName = GANTT_MODULE_NAME;
GanttHeaderToolbar.folderName = GANTT_FOLDER_NAME;
