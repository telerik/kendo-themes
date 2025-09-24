import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { SCHEDULER_FOLDER_NAME, SCHEDULER_MODULE_NAME } from './constants';
const SCHEDULER_VIEW_CLASSNAME = 'k-scheduler-layout';

const states = [];

const options = {};

const defaultOptions = {};

export type KendoSchedulerViewProps = {
    view?: "day" | "week" | "month" | "agenda" | "timeline" | "year";
};

export const SchedulerView: KendoComponent<KendoSchedulerViewProps & ( | ( React.HTMLAttributes<HTMLDivElement> & { as: 'div' } ) | ( React.HTMLAttributes<HTMLTableElement> & { as: 'table' } ) )> = (
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
SchedulerView.defaultOptions = defaultOptions;
SchedulerView.moduleName = SCHEDULER_MODULE_NAME;
SchedulerView.folderName = SCHEDULER_FOLDER_NAME;

export default SchedulerView;
