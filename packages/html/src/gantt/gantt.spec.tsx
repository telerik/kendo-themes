import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GANTT_FOLDER_NAME, GANTT_MODULE_NAME } from './constants';
export const GANTT_CLASSNAME = 'k-gantt';

const states = [];

const options = {};

export type KendoGanttProps = {
    headerToolbar?: React.JSX.Element;
    footerToolbar?: React.JSX.Element;
};

const defaultOptions = {};

/**
 * @aria {role="application"} The Gantt uses role=application to indicate a complex interactive widget.
 * @aria {aria-roledescription} Provides a human-readable description of the component role.
 * @aria {role="toolbar"} The toolbar is a collection of command buttons and inputs.
 * @aria {aria-label} Clarifies the purpose of the toolbar.
 * @aria {aria-label} Icon-only toggle button must have accessible text.
 * @aria {role="tree"} The timeline content area is a tree structure.
 * @aria {role="treeitem"} Each task in the timeline is a tree item.
 * @aria {aria-level} Specifies the nesting level of the task.
 * @aria {aria-describedby} References the tooltip providing task details (when visible).
 * @aria {aria-hidden="true"} The progress indicator is decorative.
 * @aria {aria-hidden="true"} Task action buttons are hidden from the accessibility tree.
 * @aria {aria-hidden="true"} Dependency lines are decorative.
 * @ux {Task list} A tree list on the left side shows the hierarchy of tasks.
 * @ux {Timeline} Task bars on the right represent duration on a time axis.
 * @ux {Resize} Dragging a bar's edge changes the task duration.
 * @ux {Drag} Dragging a bar horizontally changes the task start date.
 * @ux {Dependencies} Connector lines visualize dependencies between tasks.
 */
export const Gantt: KendoComponent<KendoGanttProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGanttProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        headerToolbar,
        footerToolbar,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                GANTT_CLASSNAME,
            )}
            role="application"
            aria-roledescription="Gantt Chart">
            { headerToolbar }
            { props.children}
            { footerToolbar }
        </div>
    );
};

Gantt.states = states;
Gantt.options = options;
Gantt.className = GANTT_CLASSNAME;
Gantt.defaultOptions = defaultOptions;
Gantt.moduleName = GANTT_MODULE_NAME;
Gantt.folderName = GANTT_FOLDER_NAME;

/**
 * @keyboard {Alt/Opt(Mac) + 1,2,3,...} navigates to the view with the respective number
 * @keyboard {F10} Focuses the ToolBar.
 * @keyboard {Tab} Moves focus to the corresponding task in the TimeLine.
 * @keyboard {Shift + Tab} If focus has been previously on the same line in the treelist, moves focus to last focused cell. Otherwise, focus the last cell on the same line.
 * @keyboard {Home} Moves focus to first task.
 * @keyboard {End} Moves focus to the last task.
 * @keyboard {ArrowUp} Moves focus to previous task.
 * @keyboard {ArrowDown} Moves focus to the next task.
 * @keyboard {ArrowLeft} Scrolls the view to the left.
 * @keyboard {ArrowRight} Scrolls the view to the right.
 * @keyboard {Enter} Gantt Popup Form is opened to provide editing of the task. The dependencies and field edit is made. On close focus is returned on the task.
 * @keyboard {Delete} The task gets deleted. The focus is moved to the previous task.
 * @keyboard {Alt/Opt(Mac) + ArrowRight} The task is expanded, if it contains child tasks. The task should remain in focus and the timeline should be scrolled to it.
 * @keyboard {Alt/Opt(Mac) + ArrowLeft} The task is collapsed, if it contains child tasks. The task should remain in focus and the timeline should be scrolled to it.
 */

export default Gantt;
