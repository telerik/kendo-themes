import { classNames, stateClassNames, States } from '../misc';
import { Icon } from '../icon';

import { KendoComponent } from '../_types/component';
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
};

const defaultOptions = {};

export type KendoColumnMenuItemState = { [K in (typeof states)[number]]?: boolean };

export const ColumnMenuItem: KendoComponent<KendoColumnMenuItemProps & KendoColumnMenuItemState & React.HTMLAttributes<HTMLDivElement>> = (
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
            {startIcon && <Icon icon={startIcon} />}
            {text}
            {endIcon &&
                <span className="k-columnmenu-indicators">
                    <Icon icon={endIcon} />
                    {sortIndex && <span className="k-sort-index">{sortIndex}</span>}
                </span>
            }
            {props.children}
        </div>
    );
};

ColumnMenuItem.states = states;
ColumnMenuItem.options = options;
ColumnMenuItem.className = COLUMNMENUITEM_CLASSNAME;
ColumnMenuItem.defaultOptions = defaultOptions;
ColumnMenuItem.moduleName = "column-menu";
ColumnMenuItem.folderName = "column-menu";

export default ColumnMenuItem;
