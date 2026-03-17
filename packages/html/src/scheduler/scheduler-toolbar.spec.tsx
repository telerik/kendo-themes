import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { classNames } from '../misc';
import { Toolbar, KendoToolbarProps } from '../toolbar';

import { KendoComponent } from '../_types/component';
import { SCHEDULER_FOLDER_NAME, SCHEDULER_MODULE_NAME } from './constants';
const className = 'k-scheduler-toolbar';

export type KendoSchedulerToolbarProps = KendoToolbarProps & {
    footer?: boolean
};

export const SchedulerToolbar: KendoComponent<KendoSchedulerToolbarProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoSchedulerToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const { footer, ...others } = props;

    return (
        <Toolbar
            {...others}
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
                    <ButtonGroup key="nav" className="k-scheduler-navigation">
                        <Button className="k-group-start">Today</Button>
                        <Button icon="caret-alt-left" aria-label="Navigate to previous period"></Button>
                        <Button className="k-group-end" icon="caret-alt-right" aria-label="Navigate to next period"></Button>
                    </ButtonGroup>,
                    <Button key="current" icon="calendar" className="k-nav-current" fillMode="flat" aria-live="polite">
                        Monday, June 13, 2022
                    </Button>,
                    <span key="spacer" className="k-spacer"></span>,
                    <ButtonGroup key="views" className="k-scheduler-views">
                        <Button className="k-group-start" selected>Day</Button>
                        <Button>Week</Button>
                        <Button>Month</Button>
                        <Button>Timeline</Button>
                        <Button className="k-group-end">Agenda</Button>
                    </ButtonGroup>
                ]
            }
        </Toolbar>
    );
};

SchedulerToolbar.className = className;
SchedulerToolbar.moduleName = SCHEDULER_MODULE_NAME;
SchedulerToolbar.folderName = SCHEDULER_FOLDER_NAME;
