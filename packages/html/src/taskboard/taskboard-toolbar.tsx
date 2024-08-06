import { KendoToolbarProps, Toolbar } from '../toolbar';
import { classNames } from '../misc';

export const TASKBOARDTOOLBAR_CLASSNAME = `k-taskboard-toolbar`;

const states = [];

const options = {};

export const TaskBoardToolbar = (
    props: KendoToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <Toolbar
            {...other}
            className={classNames(
                props.className,
                TASKBOARDTOOLBAR_CLASSNAME,
            )}
        >
            {children}
        </Toolbar>
    );
};

TaskBoardToolbar.states = states;
TaskBoardToolbar.options = options;
TaskBoardToolbar.className = TASKBOARDTOOLBAR_CLASSNAME;

export default TaskBoardToolbar;
