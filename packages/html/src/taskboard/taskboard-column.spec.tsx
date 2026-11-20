import { Button } from '../button';
import { classNames, nextId } from '../misc';
import { Textbox } from '../textbox';

export const TASKBOARDCOLUMN_CLASSNAME = `k-taskboard-column`;

const states = [];

const options = {};

export type KendoTaskBoardColumnProps = {
    header?: React.JSX.Element;
    title?: string;
    edit?: boolean;
};

const defaultOptions = {
    header: undefined as React.JSX.Element | undefined,
    title: "Column Header",
};

export type KendoTaskBoardColumnState = { [K in (typeof states)[number]]?: boolean };

/**
 * @ux {Status label} The column header indicates the name of the workflow stage.
 * @ux {Add card} A button adds a new card to the column.
 * @ux {Drop target} Accepts cards dragged from other columns.
 * @ux {Rename} In edit mode the column name is an input with a clear button, and the column actions are disabled.
 */
export const TaskBoardColumn = (
    props: KendoTaskBoardColumnProps & KendoTaskBoardColumnState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        header,
        title = defaultOptions.title,
        edit,
        ...other
    } = props;

    const columnHeaderId = nextId('taskboard-column-header');

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TASKBOARDCOLUMN_CLASSNAME,
                {
                    [`${TASKBOARDCOLUMN_CLASSNAME}-edit`]: edit,
                }
            )}
        >
            <div className="k-taskboard-column-header">
                {header || (
                    <>
                        <div className="k-taskboard-column-header-text k-text-ellipsis" id={columnHeaderId}>
                            {edit ? <Textbox value={title} focus aria-label="Column name" /> : title}
                        </div>
                        <span className="k-spacer"></span>
                        <div className="k-taskboard-column-header-actions">
                            <Button fillMode="flat" icon="pencil" disabled={edit} aria-label="Edit column" title="Edit column"></Button>
                            <Button fillMode="flat" icon="plus" disabled={edit} aria-label="Add card" title="Add card"></Button>
                            <Button fillMode="flat" icon="x" disabled={edit} aria-label="Delete column" title="Delete column"></Button>
                        </div>
                    </>
                )}
            </div>

            <div className="k-taskboard-column-cards-container"
                role="list"
                tabIndex={0}
                aria-labelledby={header ? undefined : columnHeaderId}
            >
                <div className="k-taskboard-column-cards" role="presentation">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

TaskBoardColumn.states = states;
TaskBoardColumn.options = options;
TaskBoardColumn.className = TASKBOARDCOLUMN_CLASSNAME;
TaskBoardColumn.moduleName = null;
TaskBoardColumn.folderName = null;
TaskBoardColumn.defaultOptions = defaultOptions;

export default TaskBoardColumn;
