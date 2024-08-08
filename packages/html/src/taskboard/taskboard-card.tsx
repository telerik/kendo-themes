import { KendoCardProps, Card, KendoCardOptions, KendoCardState } from '../card';
import { classNames } from '../misc';

export const TASKBOARDCARD_CLASSNAME = `k-taskboard-card`;

const states = [];

const options = {};

export type KendoTaskBoardCardProps = {
    category?: boolean;
};

const defaultOptions = {};

export const TaskBoardCard = (
    props: KendoTaskBoardCardProps &
        KendoCardProps & KendoCardOptions & KendoCardState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        category,
        ...other
    } = props;

    return (
        <Card
            {...other}
            className={classNames(
                props.className,
                TASKBOARDCARD_CLASSNAME,
                {
                    [`${TASKBOARDCARD_CLASSNAME}-category`]: category,
                }
            )}
        >
            {children}
        </Card>
    );
};

TaskBoardCard.states = states;
TaskBoardCard.options = options;
TaskBoardCard.className = TASKBOARDCARD_CLASSNAME;
TaskBoardCard.defaultOptions = defaultOptions;

export default TaskBoardCard;
