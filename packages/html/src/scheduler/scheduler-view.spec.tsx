import { classNames } from '../misc';

const SCHEDULER_VIEW_CLASSNAME = 'k-scheduler-layout';

const states = [];

const options = {};

const defaultProps = {};

export type KendoSchedulerViewProps = {
    view?: "day" | "week" | "month" | "agenda" | "timeline" | "year";
};

export const SchedulerView = (
    props: KendoSchedulerViewProps & (
        | ( React.HTMLAttributes<HTMLDivElement> & { as: 'div' } )
        | ( React.HTMLAttributes<HTMLTableElement> & { as: 'table' } )
    )
) => {
    const {
        as: Component = 'div',
        view,
        ...other
    } = props;

    return (
        <Component
            {...other}
            className={classNames(
                props.className,
                SCHEDULER_VIEW_CLASSNAME,
                {
                    [`k-scheduler-${view}view`]: view,
                }
            )}>
            {props.children}
        </Component>
    );
};

SchedulerView.states = states;
SchedulerView.options = options;
SchedulerView.className = SCHEDULER_VIEW_CLASSNAME;
SchedulerView.defaultProps = defaultProps;

export default SchedulerView;
