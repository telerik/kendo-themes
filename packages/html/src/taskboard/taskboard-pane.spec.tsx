import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { classNames } from '../misc';

export const TASKBOARDPANE_CLASSNAME = `k-taskboard-pane`;

const states = [];

const options = {};

export type KendoTaskBoardPaneProps = {
    header?: React.JSX.Element;
    paneHeaderId?: string;
    title?: React.ReactNode;
    actions?: React.JSX.Element;
};

const defaultHeader = undefined as React.JSX.Element | undefined;

const defaultOptions = {
    header: defaultHeader,
};

export type KendoTaskBoardPaneState = { [K in (typeof states)[number]]?: boolean };

export const TaskBoardPane = (
    props: KendoTaskBoardPaneProps & KendoTaskBoardPaneState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        header,
        paneHeaderId,
        title = "Card X",
        actions,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TASKBOARDPANE_CLASSNAME,
            )}
        >
            <div className="k-taskboard-pane-header">
                {header || (
                    <>
                        <div className="k-taskboard-pane-header-text" id={paneHeaderId}>{title}</div>
                        <span className="k-spacer"></span>
                        <div className="k-taskboard-pane-header-actions">
                            <Button fillMode="flat" icon="x" aria-label="Close" title="Close"></Button>
                        </div>
                    </>
                )}
            </div>

            <div className="k-taskboard-pane-content">
                {props.children}
            </div>

            <ActionButtons alignment="end" className="k-taskboard-pane-actions">
                {actions || (
                    <>
                        <Button icon="trash">Delete</Button>
                        <Button themeColor="primary" icon="pencil">Edit</Button>
                    </>
                )}
            </ActionButtons>
        </div>
    );
};

TaskBoardPane.states = states;
TaskBoardPane.options = options;
TaskBoardPane.className = TASKBOARDPANE_CLASSNAME;
TaskBoardPane.moduleName = null;
TaskBoardPane.folderName = null;
TaskBoardPane.defaultOptions = defaultOptions;

export default TaskBoardPane;
