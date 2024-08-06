import { classNames } from '../misc';
import { Icon } from '../icon';
import { ColumnMenuItem, ColumnMenuItemContent } from '../column-menu';

export const COLUMNMENUEXPANDER_CLASSNAME = `k-expander`;

const states = [];

const options = {};

export type KendoColumnMenuExpanderProps = {
    itemText?: string;
    itemIcon?: string;
    expanderIcon?: string;
    itemContent?: React.JSX.Element;
    expanded?: boolean;
};

export const ColumnMenuExpander = (
    props: KendoColumnMenuExpanderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        itemText,
        itemIcon,
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
            <ColumnMenuItem text={itemText} icon={itemIcon}>
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

export default ColumnMenuExpander;
