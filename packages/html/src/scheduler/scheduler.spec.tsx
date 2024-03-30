import { classNames } from '../misc';
import SchedulerView from './scheduler-view.spec';

const SCHEDULER_CLASSNAME = 'k-scheduler';

const states = [];

const options = {};

const defaultProps = {};

export type KendoSchedulerProps = {
    view?: "day" | "week" | "month" | "year" | "agenda" | "timeline";
    toolbar?: JSX.Element | JSX.Element[];
    footer?: JSX.Element | JSX.Element[];
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
Scheduler.defaultProps = defaultProps;

export default Scheduler;
