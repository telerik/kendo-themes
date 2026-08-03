import { Button } from "../button";
import { classNames } from "../misc";
import { SegmentedControl, SegmentedControlButton } from "../segmented-control";
import { Toolbar, KendoToolbarProps } from "../toolbar";

import { KendoComponent } from "../_types/component";
import { SCHEDULER_FOLDER_NAME, SCHEDULER_MODULE_NAME } from "./constants";
import { ButtonGroup } from "../button-group";
const className = "k-scheduler-toolbar";

export type KendoSchedulerToolbarProps = KendoToolbarProps & {
  footer?: boolean;
};

/**
 * @aria {role="toolbar"} Follows Toolbar spec: sets the component role.
 * @aria {aria-label|title} Follows Toolbar spec: each toolbar must have a label specifying its purpose.
 */
export const SchedulerToolbar: KendoComponent<KendoSchedulerToolbarProps & React.HTMLAttributes<HTMLDivElement>> = (props: KendoSchedulerToolbarProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { footer, ...others } = props;

    return (
        <Toolbar
            {...others}
            fillMode="flat"
            className={classNames(
                props.className,
                {
                    [ footer ? 'k-scheduler-footer' : className ]: true
                }
            )}
            aria-label={others['aria-label'] || (footer ? 'Scheduler footer' : 'Scheduler toolbar')}
        >
            {props.children ||
                [
                    <Button key="new-event" themeColor="primary" icon="plus" aria-label="Add new event">New Event</Button>,
                    <Button key="today" fillMode="flat">Today</Button>,
                    <ButtonGroup fillMode="flat">
                      <Button key="prev" icon="chevron-left" fillMode="flat" aria-label="Navigate to previous period"></Button>
                      <Button key="next" icon="chevron-right" fillMode="flat" aria-label="Navigate to next period"></Button>
                    </ButtonGroup>,
                    <Button key="current" icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
                        13 June
                    </Button>,
                    <span key="spacer" className="k-spacer"></span>,
                    <SegmentedControl thumbStyles={{width: "15%"}} key="views" className="k-scheduler-views">
                        <SegmentedControlButton selected>Day</SegmentedControlButton>
                        <SegmentedControlButton>Week</SegmentedControlButton>
                        <SegmentedControlButton>Month</SegmentedControlButton>
                        <SegmentedControlButton>Timeline</SegmentedControlButton>
                        <SegmentedControlButton>Agenda</SegmentedControlButton>
                    </SegmentedControl>
                ]
            }
        </Toolbar>
    );
};

SchedulerToolbar.className = className;
SchedulerToolbar.moduleName = SCHEDULER_MODULE_NAME;
SchedulerToolbar.folderName = SCHEDULER_FOLDER_NAME;
