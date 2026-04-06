import { classNames } from '../misc';
import SchedulerView from './scheduler-view.spec';

import { KendoComponent } from '../_types/component';
import { SCHEDULER_FOLDER_NAME, SCHEDULER_MODULE_NAME } from './constants';
const SCHEDULER_CLASSNAME = 'k-scheduler';

const states = [];

const options = {};

const defaultOptions = {};

export type KendoSchedulerProps = {
    view?: "day" | "week" | "month" | "year" | "agenda" | "timeline";
    toolbar?: React.JSX.Element | React.JSX.Element[];
    footer?: React.JSX.Element | React.JSX.Element[];
    layout?: "table" | "flex";
};

export const Scheduler: KendoComponent<KendoSchedulerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoSchedulerProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        view,
        toolbar,
        footer,
        layout,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                SCHEDULER_CLASSNAME
            )}
            role="application"
        >
            {toolbar}
            <SchedulerView
                className={classNames(
                    {
                        'k-scheduler-layout-flex': layout === 'flex',
                    }
                )}
                as={layout === 'table' ? 'table' : 'div'}
                view={view}
            >
                {props.children}
            </SchedulerView>
            {footer}
        </div>
    );
};

Scheduler.states = states;
Scheduler.options = options;
Scheduler.className = SCHEDULER_CLASSNAME;
Scheduler.defaultOptions = defaultOptions;
Scheduler.moduleName = SCHEDULER_MODULE_NAME;
Scheduler.folderName = SCHEDULER_FOLDER_NAME;

/**
 * @ariaSpec
 * Scheduler implements the WAI-ARIA application pattern.
 *
 * - Wrapping element: role="application"
 * - Toolbar: follows Toolbar accessibility specification
 * - View selector ButtonGroup: follows ButtonGroup accessibility specification
 * - Agenda view: uses grid role with proper rowgroup/row/columnheader/rowheader/gridcell roles
 * - Year view: follows MultiViewCalendar accessibility specification
 * - Other views: role="none/presentation" on inner tables, events are role="button"
 * - Non-agenda scrollable content: tabindex="0" for keyboard scrolling
 */
Scheduler.ariaSpec = {
    selector: '.k-scheduler',
    rules: [
        // Scheduler Wrapping Element
        { selector: '.k-scheduler', attribute: 'role=application', usage: 'Specifies the role of the component.' },

        // Scheduler Toolbar — follows Toolbar spec (toolbar_aria.md)
        // The SchedulerToolbar component follows the Toolbar accessibility specification.
        { selector: '.k-scheduler-toolbar', attribute: 'role=toolbar', usage: 'Follows Toolbar spec: sets the component role.' },
        { selector: '.k-scheduler-toolbar', attribute: 'aria-label or title', usage: 'Follows Toolbar spec: each toolbar must have a label specifying its purpose.' },

        // Toolbar tools: navigation icon-only buttons
        { selector: '.k-scheduler-navigation .k-button:has([class*="i-caret-alt-left"])', attribute: 'aria-label', usage: 'Required as the previous navigation button contains only an icon (no text).' },
        { selector: '.k-scheduler-navigation .k-button:has([class*="i-caret-alt-right"])', attribute: 'aria-label', usage: 'Required as the next navigation button contains only an icon (no text).' },

        // Toolbar tools: current date/period display
        { selector: '.k-nav-current', attribute: 'aria-live=polite', usage: 'The new date of the Scheduler view will be announced upon navigation to a new time span or view type.' },

        // Toolbar tools: views dropdown (select element on small screens)
        { selector: '.k-views-dropdown', attribute: 'aria-label', usage: 'The <select> element visible on the toolbar on small screens must have its aria-label set.' },

        // View selector SegmentedControl — follows SegmentedControl accessibility specification.
        { selector: '.k-scheduler-views', attribute: 'role=group', usage: 'Follows SegmentedControl spec: sets the proper role for the group of view buttons.' },
        { selector: '.k-scheduler-views .k-segmented-control-button', attribute: 'aria-pressed (when selected)', usage: 'Follows SegmentedControl spec: specifies the current state of the view SegmentedControl. Only the selected button within the group will have this attribute set to true.' },

        // Agenda view — grid roles
        { selector: '.k-scheduler-agendaview', attribute: 'role=grid', usage: 'The main table of the Agenda view must indicate it is a Data Grid.' },
        { selector: '.k-scheduler-agendaview>tbody', attribute: 'role=none/presentation', usage: 'The <tbody> element must have its semantics removed.' },
        { selector: '.k-scheduler-agendaview .k-scheduler-table', attribute: 'role=none/presentation', usage: 'Inner <table> elements within the Agenda Scheduler must have their semantic role removed.' },
        { selector: '.k-scheduler-agendaview .k-scheduler-table>tbody', attribute: 'role=rowgroup', usage: 'Must have role explicitly set as it has been removed by the <table> role set (none/presentation).' },
        { selector: '.k-scheduler-agendaview .k-scheduler-table>tbody>tr', attribute: 'role=row', usage: 'Must have role explicitly set as it has been removed by the <table> role set (none/presentation).' },
        { selector: '.k-scheduler-agendaview .k-scheduler-table>tbody>tr>th', attribute: 'role=columnheader', usage: 'Must have role explicitly set as it has been removed by the <table> role set (none/presentation).' },
        { selector: '.k-scheduler-agendaview .k-scheduler-content tr .k-selected', attribute: 'aria-selected', usage: 'Used to signify the currently selected row in Agenda view.' },

        // Agenda view — content table cell roles
        { selector: '.k-scheduler-content>.k-scheduler-table>tbody>tr>.k-scheduler-groupcolumn,.k-scheduler-content>.k-scheduler-table>tbody>tr>.k-scheduler-datecolumn', attribute: 'role=rowheader', usage: 'Must have role explicitly set as it has been removed by the <table> role set (none/presentation).' },
        { selector: '.k-scheduler-content>.k-scheduler-table>tbody>tr>.k-scheduler-timecolumn,.k-scheduler-content>.k-scheduler-table>tbody>tr>.k-scheduler-timecolumn+td', attribute: 'role=gridcell', usage: 'Must have role explicitly set as it has been removed by the <table> role set (none/presentation).' },

        // Other views (non-agenda, non-year) — none/presentation on tables
        { selector: '.k-scheduler-dayview,.k-scheduler-weekview,.k-scheduler-monthview,.k-scheduler-timelineview', attribute: 'role=none/presentation', usage: 'All <table> elements within the Scheduler must have their semantic role removed.' },

        // Times sidebar tables — role propagates to child th/tr elements
        { selector: '.k-scheduler-times .k-scheduler-table', attribute: 'role=none/presentation', usage: 'Times sidebar tables must have their semantics removed. The role propagates to child th/tr elements, resolving empty-table-header violations.' },

        // Events
        { selector: '.k-event', attribute: 'role=button', usage: 'Indicating that the event element is interactive.' },
        { selector: '.k-event', attribute: 'aria-label', usage: 'Label containing the title, start, and end date of the appointment.' },

        // Scrollable content (non-agenda)
        { selector: '.k-scheduler-layout:not(.k-scheduler-agendaview) .k-scheduler-content', attribute: 'tabindex=0', usage: 'Scrollable elements need to be focusable to ensure scrolling with arrow keys is available (does not apply to agenda view).' },
    ]
};

export default Scheduler;
