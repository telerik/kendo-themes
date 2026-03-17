import { classNames } from '../misc';
import { nextId } from '../misc';
import { Icon } from '../icon';
import { ColumnMenuItem, ColumnMenuItemContent } from '../column-menu';

import { KendoComponent } from '../_types/component';
import { COLUMN_MENU_FOLDER_NAME, COLUMN_MENU_MODULE_NAME } from './constants';
export const COLUMNMENUEXPANDER_CLASSNAME = `k-expander`;

const states = [];

const options = {};

export type KendoColumnMenuExpanderProps = {
    itemText?: string;
    itemStartIcon?: string;
    itemEndIcon?: string;
    itemSortIndex?: number;
    expanderIcon?: string;
    itemContent?: React.JSX.Element;
    expanded?: boolean;
    contentId?: string;
};

const defaultOptions = {};

export const ColumnMenuExpander: KendoComponent<KendoColumnMenuExpanderProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoColumnMenuExpanderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        itemText,
        itemStartIcon,
        itemEndIcon,
        itemSortIndex,
        expanded,
        itemContent,
        expanderIcon,
        contentId: contentIdProp,
        ...other
    } = props;

    const contentId = contentIdProp || nextId('columnmenu-content');

    const icon = !expanded && !expanderIcon
        ? <Icon icon="chevron-down" />
        : expanded && !expanderIcon
            ? <Icon icon="chevron-up" />
            : <Icon icon={expanderIcon} />;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                COLUMNMENUEXPANDER_CLASSNAME
            )}>
            <ColumnMenuItem text={itemText} startIcon={itemStartIcon} endIcon={itemEndIcon} sortIndex={itemSortIndex}
                aria-expanded={expanded ? 'true' : 'false'}
                aria-controls={contentId}
            >
                <span className="k-spacer"></span>
                <span className="k-expander-indicator">
                    {icon}
                </span>
            </ColumnMenuItem>
            { expanded && <ColumnMenuItemContent id={contentId}>{itemContent}</ColumnMenuItemContent> }
            { props.children }
        </div>
    );
};

ColumnMenuExpander.states = states;
ColumnMenuExpander.options = options;
ColumnMenuExpander.className = COLUMNMENUEXPANDER_CLASSNAME;
ColumnMenuExpander.defaultOptions = defaultOptions;
ColumnMenuExpander.moduleName = COLUMN_MENU_MODULE_NAME;
ColumnMenuExpander.folderName = COLUMN_MENU_FOLDER_NAME;

export default ColumnMenuExpander;
