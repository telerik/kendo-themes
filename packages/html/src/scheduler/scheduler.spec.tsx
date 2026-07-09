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

/**
 * @aria {role="application"} Specifies the role of the component.
 * @aria {aria-label} Required as the previous navigation button contains only an icon (no text).
 * @aria {aria-label} Required as the next navigation button contains only an icon (no text).
 * @aria {role="group"} Follows SegmentedControl spec: sets the proper role for the group of view buttons.
 * @aria {aria-pressed} Follows SegmentedControl spec: specifies the current state of the view SegmentedControl. Only the selected button within the group will have this attribute set to true.
 * @aria {role="grid"} The main table of the Agenda view must indicate it is a Data Grid.
 * @aria {role="none"|\"presentation"} The <tbody> element must have its semantics removed.
 * @aria {role="none"|\"presentation"} All <table> elements within the Scheduler must have their semantic role removed.
 */
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
 * @keyboard {t} navigates to today's time period
 * @keyboard {c} opens the popup for creation of new appointment
 * @keyboard {b} toggles view between business hours and full day (where available)
 * @keyboard {Shift + ArrowLeft} navigates to the previous time period
 * @keyboard {Shift + ArrowRight} navigates to the next time period
 * @keyboard {Alt/Opt(Mac) + 1,2,3,...} navigates to the view with the respective number
 * @keyboard {F10} Focuses the ToolBar.
 * @keyboard {Arrow Keys} move focus through appointments and the `more events` button, then continue to the next appointment in sequence
 * @keyboard {Enter} opens the Edit Popup to modify the appointment
 * @keyboard {Delete or Backspace} opens the Delete confirmation popup to modify the appointment
 * @keyboard {Enter} If date is focused, opens its Tooltip.
 * @keyboard {Enter} If Tooltip is focused, navigates to Day view displaying the Tooltip date.
 * @keyboard {Delete or Backspace} If a Tooltip is focused, closes that and returns focus to its target date.
 * @keyboard {ArrowLeft or ArrowRight} move focus through tools
 * @keyboard {ArrowDown} moves focus to the selected (if present), or the first event (if any) in the view
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#grid WAI-ARIA specification for grid
 * @see https://www.w3.org/TR/wai-aria-1.2/#application WAI-ARIA specification for application
 */

export default Scheduler;
