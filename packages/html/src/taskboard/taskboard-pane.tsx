import { ActionButtons } from '..';
import { Button } from '../button';
import { classNames } from '../misc';

export const TASKBOARDPANE_CLASSNAME = `k-taskboard-pane`;

const states = [];

const options = {};

export type KendoTaskBoardPaneProps = {
    header?: React.JSX.Element;
};

const defaultHeader =
    <>
        <div className="k-taskboard-pane-header-text">Card X</div>
        <span className="k-spacer"></span>
        <div className="k-taskboard-pane-header-actions">
            <Button fillMode="flat" icon="x"></Button>
        </div>
    </>;

export type KendoTaskBoardPaneState = { [K in (typeof states)[number]]?: boolean };

export const TaskBoardPane = (
    props: KendoTaskBoardPaneProps & KendoTaskBoardPaneState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        header = defaultHeader,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TASKBOARDPANE_CLASSNAME,
                "k-taskboard-edit-pane",
            )}
        >
            <div className="k-taskboard-pane-header">
                {header}
            </div>

            <div className="k-taskboard-pane-content">
                {props.children}
            </div>

            <ActionButtons alignment="end" className="k-taskboard-pane-actions">
                <Button icon="trash">Delete</Button>
                <Button themeColor="primary" icon="pencil">Edit</Button>
            </ActionButtons>
        </div>
    );
};

TaskBoardPane.states = states;
TaskBoardPane.options = options;
TaskBoardPane.className = TASKBOARDPANE_CLASSNAME;

export default TaskBoardPane;
