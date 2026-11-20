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

/**
 * @aria {aria-disabled="true"} Rendered on a disabled card.
 * @aria {aria-label="Card menu"} The icon-only card menu button is named "Card menu".
 * @aria {aria-haspopup="menu"} The card menu button opens a menu.
 * @aria {aria-expanded="true"|"false"} Reflects whether the card menu is open.
 * @ux {Draggable} Cards are dragged to another column to change their workflow status.
 * @ux {Edit} Clicking the card opens an edit form for the card details.
 * @ux {Header and body} Displays a title and optional content or metadata.
 */
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
            aria-disabled={props.disabled ? "true" : undefined}
        >
            {children}
            {menuButton && (
                <Button className="k-taskboard-card-menu-button" fillMode="flat" icon="more-vertical" aria-label="Card menu" title="Card menu" aria-haspopup="menu" aria-expanded="false"></Button>
            )}
        </Card>
    );
};

TaskBoardCard.states = states;
TaskBoardCard.options = options;
TaskBoardCard.className = TASKBOARDCARD_CLASSNAME;
TaskBoardCard.moduleName = null;
TaskBoardCard.folderName = null;
TaskBoardCard.defaultOptions = defaultOptions;

export default TaskBoardCard;
