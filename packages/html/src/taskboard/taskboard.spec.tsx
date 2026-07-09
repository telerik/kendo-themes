import { TaskBoardPane } from './taskboard-pane.spec';
import { TaskBoardToolbar } from './taskboard-toolbar';
import { Button } from '../button';
import { FormNormal, FormField } from '../form';
import { States, classNames, stateClassNames, nextId } from '../misc';
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

/**
 * @aria {role="application"} The TaskBoard has role=application as its inner navigation requires the use of arrows.
 * @aria {role="form"} The edit Form needs the appropriate role.
 * @aria {aria-labelledby} The TaskBoard edit form must be labeled by the header text of the pane.
 */
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
            role="application"
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

            {pane && (() => {
                const paneHeaderId = nextId('taskboard-pane-header');
                return (
                    <TaskBoardPane
                        className={classNames(
                            {
                                ["k-taskboard-pane-start"]: panePosition === "start",
                            }
                        )}
                        paneHeaderId={paneHeaderId}
                    >
                        <FormNormal formButtons={null} role="form" aria-labelledby={paneHeaderId}>
                            <FormField label="Textbox:" editor={ <Textbox /> } ></FormField>
                        </FormNormal>
                    </TaskBoardPane>
                );
            })()}
        </div>
    );
};

TaskBoard.states = states;
TaskBoard.options = options;
TaskBoard.className = TASKBOARD_CLASSNAME;
TaskBoard.defaultOptions = defaultOptions;
TaskBoard.moduleName = TASKBOARD_MODULE_NAME;
TaskBoard.folderName = TASKBOARD_FOLDER_NAME;

/**
 * @keyboard {Tab} Navigates through the TaskBoard tab stops - the ToolBar, each Column, column action buttons, each Card, popup items, and pane fields/buttons.
 * @keyboard {ArrowLeft} Focuses the previous column or a card in the previous column.
 * @keyboard {ArrowRight} Focuses the next column or a card in the next column.
 * @keyboard {ArrowUp} Focuses the previous card.
 * @keyboard {ArrowDown} Focuses the next card.
 * @keyboard {Enter} Selects the focused card.
 * @keyboard {Delete} Deletes the currently focused item. When focus is on a card, deletes the card. When focus is on a column, deletes the column. If delete confirmation is enabled, opens a confirmation dialog instead of deleting immediately.
 * @keyboard {Control + E} Puts the focused card or column in edit mode.
 * @keyboard {Control + A} Creates a new card or column. Creating a card is blocked when the target column has reached its WIP limit.
 * @keyboard {Enter or Space} Activates the focused popup action.
 * @keyboard {ArrowUp} Moves focus to the previous popup item.
 * @keyboard {ArrowDown} Moves focus to the next popup item.
 * @keyboard {Escape} Closes the popup and returns focus to the actions button.
 * @keyboard {Enter} When focus is in the title field, saves the current changes.
 * @keyboard {Control + Enter} When focus is in the description field, saves the current changes.
 * @keyboard {Escape} Closes the pane and returns focus to the element that opened it.
 * @keyboard {Tab} Moves focus to the next field or action in the pane.
 * @keyboard {Shift + Tab} Moves focus to the previous field or action in the pane.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#listt WAI-ARIA spec: Role List
 */

export default TaskBoard;
