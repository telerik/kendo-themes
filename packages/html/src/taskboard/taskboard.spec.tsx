import { TaskBoardPane } from './taskboard-pane';
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
 * @ariaSpec
 * TaskBoard is a composite component with columns (lists), cards (list items),
 * action buttons, and an edit pane with a form.
 *
 * - Root: role="application" (uses arrow key navigation)
 * - Columns: role="list", tabindex=0, aria-labelledby
 * - Cards: role="listitem", tabindex=0
 * - Column action buttons: icon-only, need aria-label or title
 * - Card menu button: icon-only, needs aria-label or title
 * - Pane close button: icon-only, needs aria-label or title
 * - Edit form: role="form", aria-labelledby pane header
 */
TaskBoard.ariaSpec = {
    selector: '.k-taskboard',
    rules: [
        // TaskBoard root
        { selector: '.k-taskboard', attribute: 'role=application', usage: 'The TaskBoard has role=application as its inner navigation requires the use of arrows.' },

        // Columns
        { selector: '.k-taskboard-column-cards-container', attribute: 'role=list', usage: 'The TaskBoard Column cards container is a collection of list items.' },
        { selector: '.k-taskboard-column-cards-container', attribute: 'tabindex=0', usage: 'The TaskBoard Column cards container must be focusable.' },
        { selector: '.k-taskboard-column-cards-container', attribute: 'aria-labelledby', usage: 'The TaskBoard Column cards container must be labelled by its column header.' },

        // Column action buttons
        { selector: '.k-taskboard-column-header-actions > .k-button', attribute: 'role=button or nodeName=button', usage: 'The TaskBoard Column actions are buttons.' },
        { selector: '.k-taskboard-column-header-actions > .k-button', attribute: 'aria-label or title', usage: 'Each action must have an accessible name as they are represented by icons.' },

        // Column intermediate container
        { selector: '.k-taskboard-column-cards', attribute: 'role=presentation', usage: 'The cards inner container must not break the list-listitem relationship.' },

        // Cards
        { selector: '.k-taskboard-card', attribute: 'role=listitem', usage: 'The TaskBoard Tasks (cards) are list items.' },
        { selector: '.k-taskboard-card', attribute: 'tabindex=0', usage: 'The TaskBoard Card must be focusable.' },

        // Card menu button
        { selector: '.k-taskboard-card-menu-button', attribute: 'role=button or nodeName=button', usage: 'The TaskBoard card menu element must be a button.' },
        { selector: '.k-taskboard-card-menu-button', attribute: 'aria-label or title', usage: 'The menu button must have an accessible name as it is represented by an icon.' },

        // Pane close button
        { selector: '.k-taskboard-pane-header-actions > .k-button', attribute: 'role=button or nodeName=button', usage: 'The TaskBoard edit form close element must be a button.' },
        { selector: '.k-taskboard-pane-header-actions > .k-button', attribute: 'aria-label or title', usage: 'The edit form close button must have an accessible name.' },

        // Edit form
        { selector: '.k-taskboard-edit-pane .k-form', attribute: 'role=form', usage: 'The edit Form needs the appropriate role.' },
        { selector: '.k-taskboard-edit-pane .k-form', attribute: 'aria-labelledby', usage: 'The TaskBoard edit form must be labeled by the header text of the pane.' },
    ]
};

export default TaskBoard;
