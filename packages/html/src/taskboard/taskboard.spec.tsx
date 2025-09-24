import { TaskBoardPane, TaskBoardToolbar } from '.';
import { Button } from '../button';
import { FormNormal, FormField } from '../form';
import { States, classNames, stateClassNames } from '../misc';
import { Searchbox } from '../searchbox';
import { Textbox } from '../textbox';

import { KendoComponent } from '../_types/component';
import { TASKBOARD_FOLDER_NAME, TASKBOARD_MODULE_NAME } from './constants';
export const TASKBOARD_CLASSNAME = `k-taskboard`;

const states = [
    States.disabled
];

const options = {};

export type KendoTaskBoardProps = {
    toolbar?: React.JSX.Element;
    pane?: boolean;
    panePosition?: "start" | "end";
};

const defaultToolbar =
    <>
        <TaskBoardToolbar>
            <Button icon="plus">Add Column</Button>
            <span className="k-spacer"></span>
            <Searchbox placeholder="Search..." />
        </TaskBoardToolbar>
    </>;

const defaultOptions = {
    toolbar: defaultToolbar,
    pane: false,
    panePosition: "end",
};

export type KendoTaskBoardState = { [K in (typeof states)[number]]?: boolean };

export const TaskBoard: KendoComponent<KendoTaskBoardProps & KendoTaskBoardState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoTaskBoardProps & KendoTaskBoardState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        disabled,
        toolbar = defaultOptions.toolbar,
        panePosition = defaultOptions.panePosition,
        pane = defaultOptions.pane,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TASKBOARD_CLASSNAME,
                stateClassNames(TASKBOARD_CLASSNAME, {
                    disabled
                }),
            )}
        >
            <div className="k-taskboard-header">
                {toolbar}
            </div>

            <div className="k-taskboard-content" style={{
                marginRight: (pane && panePosition === 'end') ? '304px' : undefined,
                marginLeft: (pane && panePosition === 'start') ? '304px' : undefined,
            }}>

                <div className="k-taskboard-columns-container">
                    {props.children}
                </div>
            </div>

            {pane && <>
                <TaskBoardPane className={classNames(
                    {
                        ["k-taskboard-pane-start"]: panePosition === "start",
                    }
                )}>
                    <FormNormal formButtons={null}>
                        <FormField label="Textbox:" editor={ <Textbox /> } ></FormField>
                    </FormNormal>
                </TaskBoardPane>
            </>}
        </div>
    );
};

TaskBoard.states = states;
TaskBoard.options = options;
TaskBoard.className = TASKBOARD_CLASSNAME;
TaskBoard.defaultOptions = defaultOptions;
TaskBoard.moduleName = TASKBOARD_MODULE_NAME;
TaskBoard.folderName = TASKBOARD_FOLDER_NAME;

export default TaskBoard;
