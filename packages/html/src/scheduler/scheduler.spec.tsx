import { classNames } from '../misc';
import SchedulerView from './scheduler-view.spec';

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

export const Scheduler = (
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

export default Scheduler;
