import { classNames, stateClassNames, States } from '../misc';
import { Icon } from '../icon';

export const COLUMNMENUITEM_CLASSNAME = `k-columnmenu-item`;

const states = [
    States.focus,
    States.selected
];

const options = {};

export type KendoColumnMenuItemProps = {
    text?: string;
    startIcon?: string;
    endIcon?: string;
    sortIndex?: number;
    actions?: React.JSX.Element | string;
    draggable?: boolean;
};

const defaultOptions = {};

export type KendoColumnMenuItemState = { [K in (typeof states)[number]]?: boolean };

export const ColumnMenuItem = (
    props: KendoColumnMenuItemProps & KendoColumnMenuItemState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        focus,
        selected,
        text,
        startIcon,
        endIcon,
        sortIndex,
        actions,
        draggable,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                COLUMNMENUITEM_CLASSNAME,
                stateClassNames(COLUMNMENUITEM_CLASSNAME, {
                    focus,
                    selected,
                })
            )}>
            {draggable &&
                <span className="k-columnmenu-drag-handle" >
                    <Icon icon="handle-drag"/>
                </span>
            }
            {startIcon && <Icon icon={startIcon} />}
            {text}
            {endIcon &&
                <span className="k-columnmenu-indicators">
                    <Icon icon={endIcon} />
                    {sortIndex && <span className="k-sort-index">{sortIndex}</span>}
                </span>
            }
            {props.children}
            {actions &&
                <>
                    <span className="k-spacer"></span>
                    <span className="k-columnmenu-item-actions">{actions}</span>
                </>
            }
        </div>
    );
};

ColumnMenuItem.states = states;
ColumnMenuItem.options = options;
ColumnMenuItem.className = COLUMNMENUITEM_CLASSNAME;
ColumnMenuItem.defaultOptions = defaultOptions;

export default ColumnMenuItem;
