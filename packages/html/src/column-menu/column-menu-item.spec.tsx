import { classNames, stateClassNames, States } from '../misc';
import { Icon } from '../icon';

import { KendoComponent } from '../_types/component';
import { COLUMN_MENU_FOLDER_NAME, COLUMN_MENU_MODULE_NAME } from './constants';
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

/**
 * @aria {role="button"} Sets column menu item role to button.
 * @aria {tabindex="0"} Sets column menu item tabindex.
 * @aria {aria-expanded="true"|\"false"} Sets the expanded state of an expandable item.
 * @aria {aria-controls} Points to id attribute of the content whose visibility the expandable item controls.
 * @aria {id} Unique and deterministic id linked to the aria-controls attribute of the corresponding expandable item.
 */
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
            )}
            role="button"
            tabIndex={0}
        >
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
ColumnMenuItem.moduleName = COLUMN_MENU_MODULE_NAME;
ColumnMenuItem.folderName = COLUMN_MENU_FOLDER_NAME;

export default ColumnMenuItem;
