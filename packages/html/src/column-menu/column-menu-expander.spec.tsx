import { classNames } from '../misc';
import { Icon } from '../icon';
import { ColumnMenuItem, ColumnMenuItemContent } from '../column-menu';

import { KendoComponent } from '../_types/component';
import { ColumnMenu } from './column-menu.spec';
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
        ...other
    } = props;

    let icon = <></>;

    if ( !expanded && !expanderIcon) {
        icon = <Icon icon="chevron-down" />;
    } else if (expanded && !expanderIcon) {
        icon = <Icon icon="chevron-up" />;
    } else { icon = <Icon icon={expanderIcon} />; }

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                COLUMNMENUEXPANDER_CLASSNAME
            )}>
            <ColumnMenuItem text={itemText} startIcon={itemStartIcon} endIcon={itemEndIcon} sortIndex={itemSortIndex}>
                <span className="k-spacer"></span>
                <span className="k-expander-indicator">
                    {icon}
                </span>
            </ColumnMenuItem>
            { expanded && <ColumnMenuItemContent>{itemContent}</ColumnMenuItemContent> }
            { props.children }
        </div>
    );
};

ColumnMenuExpander.states = states;
ColumnMenuExpander.options = options;
ColumnMenuExpander.className = COLUMNMENUEXPANDER_CLASSNAME;
ColumnMenuExpander.defaultOptions = defaultOptions;
ColumnMenuExpander.moduleName = ColumnMenu.moduleName;
ColumnMenuExpander.folderName = ColumnMenu.folderName;

export default ColumnMenuExpander;
