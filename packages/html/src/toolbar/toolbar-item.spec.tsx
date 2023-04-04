import { classNames, stateClassNames, States } from '../utils-new';

export const TOOLBARITEM_CLASSNAME = `k-toolbar-item`;

const states = [
    States.focus,
];

const options = {};

export type KendoToolbarItemState = { [K in (typeof states)[number]]?: boolean };

export const ToolbarItem = (
    props: KendoToolbarItemState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        focus,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TOOLBARITEM_CLASSNAME,
                stateClassNames(TOOLBARITEM_CLASSNAME, {
                    focus,
                })
            )}>
            {props.children}
        </div>
    );
};

ToolbarItem.states = states;
ToolbarItem.options = options;
ToolbarItem.className = TOOLBARITEM_CLASSNAME;

export default ToolbarItem;
