import { KendoCardProps, Card, KendoCardOptions, KendoCardState } from '../card';
import { Button } from '../button';
import { classNames } from '../misc';

export const TASKBOARDCARD_CLASSNAME = `k-taskboard-card`;

const states = [];

const options = {};

export type KendoTaskBoardCardProps = {
    category?: boolean;
    menuButton?: boolean;
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
        menuButton,
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
            role="listitem"
            tabIndex={0}
        >
            {children}
            {menuButton && (
                <Button className="k-taskboard-card-menu-button" fillMode="flat" icon="more-vertical" aria-label="Card menu" title="Card menu"></Button>
            )}
        </Card>
    );
};

TaskBoardCard.states = states;
TaskBoardCard.options = options;
TaskBoardCard.className = TASKBOARDCARD_CLASSNAME;
TaskBoardCard.defaultOptions = defaultOptions;

export default TaskBoardCard;
