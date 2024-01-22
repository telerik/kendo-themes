import { Button } from '../button';
import { classNames } from '../misc';

export const TASKBOARDCOLUMN_CLASSNAME = `k-taskboard-column`;

const states = [];

const options = {};

export type KendoTaskBoardColumnProps = {
    header?: JSX.Element;
    edit?: boolean;
};

const defaultHeader =
    <>
        <div className="k-taskboard-column-header-text k-text-ellipsis">Column Header</div>
        <span className="k-spacer"></span>
        <div className="k-taskboard-column-header-actions">
            <Button fillMode="flat" icon="pencil"></Button>
            <Button fillMode="flat" icon="plus"></Button>
            <Button fillMode="flat" icon="x"></Button>
        </div>
    </>;

const defaultProps = {
    header: defaultHeader,
};

export type KendoTaskBoardColumnState = { [K in (typeof states)[number]]?: boolean };

export const TaskBoardColumn = (
    props: KendoTaskBoardColumnProps & KendoTaskBoardColumnState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        header = defaultProps.header,
        edit,
        ...other
    } = props;

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
                {header}
            </div>

            <div className="k-taskboard-column-cards-container">
                <div className="k-taskboard-column-cards">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

TaskBoardColumn.states = states;
TaskBoardColumn.options = options;
TaskBoardColumn.className = TASKBOARDCOLUMN_CLASSNAME;
TaskBoardColumn.defaultProps = defaultProps;

export default TaskBoardColumn;
