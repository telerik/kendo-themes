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
 * @ariaSpec
 * The Gantt is a composite component consisting of:
 * - Toolbar(s) (role=toolbar) for actions and view switching
 * - Splitter separating TreeList (left) and Timeline (right)
 * - TreeList pane follows TreeList ariaSpec
 * - Timeline pane has role=tree with treeitem tasks
 *
 * @see ariaSpec below
 * @see TreeList ariaSpec for the left pane
 * @see Splitter ariaSpec for the pane separator
 * @see Toolbar ariaSpec for gantt toolbars
 */
Gantt.ariaSpec = {
    selector: '.k-gantt',
    rules: [
        // ── Gantt Root ──
        { selector: '.k-gantt', attribute: 'role=application', usage: 'The Gantt uses role=application to indicate a complex interactive widget.' },
        { selector: '.k-gantt', attribute: 'aria-roledescription', usage: 'Provides a human-readable description of the component role.' },

        // ── Gantt Toolbar ──
        { selector: '.k-gantt-toolbar', attribute: 'role=toolbar', usage: 'The toolbar is a collection of command buttons and inputs.' },
        { selector: '.k-gantt-toolbar', attribute: 'aria-label', usage: 'Clarifies the purpose of the toolbar.' },
        { selector: '.k-gantt-toggle', attribute: 'aria-label', usage: 'Icon-only toggle button must have accessible text.' },
        { selector: 'select.k-views-dropdown', attribute: 'aria-label', usage: 'The view selector dropdown must have an accessible name.' },

        // ── Splitter (embedded) ──
        // The Splitter component handles its own ARIA (role=separator, aria-label, aria-orientation).
        // See Splitter ariaSpec for details.

        // ── TreeList Pane ──
        // The TreeList component handles its own ARIA (role=treegrid, etc.).
        // See TreeList ariaSpec for details.

        // ── Timeline ──
        { selector: '.k-gantt-timeline .k-grid-content', attribute: 'role=tree', usage: 'The timeline content area is a tree structure.' },
        { selector: '.k-gantt-timeline .k-gantt-rows', attribute: 'role=presentation', usage: 'The rows grid is presentational.' },
        { selector: '.k-gantt-timeline .k-gantt-columns', attribute: 'role=presentation', usage: 'The columns grid is presentational.' },
        { selector: '.k-gantt-timeline .k-gantt-tasks', attribute: 'role=presentation', usage: 'The tasks table is presentational.' },
        { selector: '.k-gantt-timeline .k-task', attribute: 'role=treeitem', usage: 'Each task in the timeline is a tree item.' },
        { selector: '.k-gantt-timeline .k-task', attribute: 'aria-level (when present)', usage: 'Specifies the nesting level of the task.' },
        { selector: '.k-gantt-timeline .k-task', attribute: 'aria-describedby (when present)', usage: 'References the tooltip providing task details (when visible).' },
        { selector: '.k-gantt-timeline .k-task .k-task-complete', attribute: 'aria-hidden=true', usage: 'The progress indicator is decorative.' },
        { selector: '.k-gantt-timeline .k-task .k-task-actions', attribute: 'aria-hidden=true', usage: 'Task action buttons are hidden from the accessibility tree.' },

        // ── Decorative Elements ──
        { selector: '.k-gantt-dependencies', attribute: 'aria-hidden=true', usage: 'Dependency lines are decorative.' },
        { selector: '.k-current-time', attribute: 'aria-hidden=true', usage: 'The current time marker is decorative.' },
        { selector: '.k-task-dot', attribute: 'aria-hidden=true', usage: 'Task connection dots are decorative.' },
        { selector: '.k-gantt-line', attribute: 'aria-hidden=true', usage: 'Dependency connector lines are decorative.' },
        { selector: '.k-task-draghandle', attribute: 'aria-hidden=true', usage: 'The progress drag handle is decorative.' },
        { selector: '.k-resize-handle', attribute: 'aria-hidden=true', usage: 'Resize handles are decorative.' },

        // ── Row Reordering ──
        { selector: '.k-drag-cell', attribute: 'aria-label', usage: 'Drag cells must have an accessible name.' },
    ]
};

export default Gantt;
