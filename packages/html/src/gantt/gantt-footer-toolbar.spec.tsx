import { Toolbar, KendoToolbarProps } from '../toolbar';
import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GANTT_FOLDER_NAME, GANTT_MODULE_NAME } from './constants';
const className = `k-gantt-footer`;

export const GanttFooterToolbar: KendoComponent<KendoToolbarProps & React.HTMLAttributes<HTMLDivElement>> = (
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

GanttFooterToolbar.className = className;
GanttFooterToolbar.moduleName = GANTT_MODULE_NAME;
GanttFooterToolbar.folderName = GANTT_FOLDER_NAME;
