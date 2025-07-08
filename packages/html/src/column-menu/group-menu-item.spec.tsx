import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
export const GROUPMENUITEM_CLASSNAME = `k-group-menu-item`;

const states = [
    States.hover,
    States.selected
];

const options = {};

export type KendoGroupMenuItemProps = {
    text?: string;
    actionsStart?: React.JSX.Element | React.JSX.Element[];
    actionsEnd?: React.JSX.Element | React.JSX.Element[];
};

const defaultOptions = {};

export type KendoGroupMenuItemState = { [K in (typeof states)[number]]?: boolean };

export const GroupMenuItem: KendoComponent<KendoGroupMenuItemProps & KendoGroupMenuItemState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGroupMenuItemProps & KendoGroupMenuItemState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        hover,
        selected,
        text,
        actionsStart,
        actionsEnd,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                GROUPMENUITEM_CLASSNAME,
                stateClassNames(GROUPMENUITEM_CLASSNAME, {
                    hover,
                    selected,
                })
            )}>
            {actionsStart && (
                <span className="k-group-menu-item-actions">
                    {actionsStart}
                </span>
            )}
            <span className="k-group-item-text">
                {text}
            </span>
            {actionsEnd && (
                <>
                    <span className="k-spacer"></span>
                    <span className="k-group-menu-item-actions">
                        {actionsEnd}
                    </span>
                </>
            )}
            {props.children}
        </div>
    );
}

GroupMenuItem.states = states;
GroupMenuItem.options = options;
GroupMenuItem.className = GROUPMENUITEM_CLASSNAME;
GroupMenuItem.defaultOptions = defaultOptions;

export default GroupMenuItem;
