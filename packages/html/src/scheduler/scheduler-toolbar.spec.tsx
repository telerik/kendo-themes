import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { classNames } from '../misc';
import { Toolbar, KendoToolbarProps } from '../toolbar';

import { KendoComponent } from '../_types/component';
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
        >
            {props.children ||
                [
                    <ButtonGroup className="k-scheduler-navigation">
                        <Button className="k-group-start">Today</Button>
                        <Button icon="caret-alt-left"></Button>
                        <Button className="k-group-end" icon="caret-alt-right"></Button>
                    </ButtonGroup>,
                    <Button icon="calendar" className="k-nav-current" fillMode="flat" >
                        Monday, June 13, 2022
                    </Button>,
                    <span className="k-spacer"></span>,
                    <ButtonGroup className="k-scheduler-views">
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
