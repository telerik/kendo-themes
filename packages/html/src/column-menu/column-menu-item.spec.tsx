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
    icon?: string;
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
        icon,
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
            <Icon icon={icon} />{text}
            {props.children}
        </div>
    );
};

ColumnMenuItem.states = states;
ColumnMenuItem.options = options;
ColumnMenuItem.className = COLUMNMENUITEM_CLASSNAME;
ColumnMenuItem.defaultOptions = defaultOptions;

export default ColumnMenuItem;
