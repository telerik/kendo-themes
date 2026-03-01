import { Button } from '../button';
import { classNames, nextId } from '../misc';

export const TASKBOARDCOLUMN_CLASSNAME = `k-taskboard-column`;

const states = [];

const options = {};

export type KendoTaskBoardColumnProps = {
    header?: React.JSX.Element;
    edit?: boolean;
};

const defaultOptions = {
    header: undefined as React.JSX.Element | undefined,
};

export type KendoTaskBoardColumnState = { [K in (typeof states)[number]]?: boolean };

export const TaskBoardColumn = (
    props: KendoTaskBoardColumnProps & KendoTaskBoardColumnState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        header,
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
                        <div className="k-taskboard-column-header-text k-text-ellipsis" id={columnHeaderId}>Column Header</div>
                        <span className="k-spacer"></span>
                        <div className="k-taskboard-column-header-actions">
                            <Button fillMode="flat" icon="pencil" aria-label="Edit column" title="Edit column"></Button>
                            <Button fillMode="flat" icon="plus" aria-label="Add card" title="Add card"></Button>
                            <Button fillMode="flat" icon="x" aria-label="Delete column" title="Delete column"></Button>
                        </div>
                    </>
                )}
            </div>

            <div className="k-taskboard-column-cards-container"
                role="list"
                tabIndex={0}
                aria-labelledby={columnHeaderId}
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
TaskBoardColumn.defaultOptions = defaultOptions;

export default TaskBoardColumn;
