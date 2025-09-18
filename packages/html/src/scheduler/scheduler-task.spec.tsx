import { classNames } from '../misc';
import Icon from '../icon/icon.spec';


import { KendoComponent } from '../_types/component';
import { Scheduler } from './scheduler.spec';
const className = 'k-task';

const states = [];

const options = {};

const defaultOptions = {
    markStyle: { backgroundColor: "gold" },
};


export type KendoSchedulerTaskProps = {
    text?: string;
    markStyle?: React.CSSProperties;
    recurring?: boolean;
    closable?: boolean;
};

export const SchedulerTask: KendoComponent<KendoSchedulerTaskProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoSchedulerTaskProps
        & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        text,
        markStyle = defaultOptions.markStyle,
        recurring,
        closable,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                className,
                props.className
            )}>
            <span className="k-scheduler-mark" style={markStyle}></span>
            {recurring && <Icon icon="arrow-rotate-cw" />}
            <span className="k-scheduler-task-text">{text}</span>
            {closable &&
                <a href="#" className="k-link k-event-delete">
                    <Icon icon="x" />
                </a>
            }
        </div>
    );
};


SchedulerTask.states = states;
SchedulerTask.options = options;
SchedulerTask.defaultOptions = defaultOptions;
SchedulerTask.className = className;
SchedulerTask.moduleName = Scheduler.moduleName;
SchedulerTask.folderName = Scheduler.folderName;

export default SchedulerTask;
