import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { TOOLBAR_FOLDER_NAME, TOOLBAR_MODULE_NAME } from './constants';
export const TOOLBARITEM_CLASSNAME = `k-toolbar-item`;

const states = [
    States.focus
];

const options = {};

const defaultOptions = {};

export type KendoToolbarItemState = { [K in (typeof states)[number]]?: boolean };

/**
 * @ux {Overflow handling} Moves to the overflow popup when the toolbar runs out of space.
 * @ux {Template} Renders a button, separator, or any custom control based on its type.
 */
export const ToolbarItem: KendoComponent<KendoToolbarItemState & React.HTMLAttributes<HTMLDivElement>> = (
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
ToolbarItem.defaultOptions = defaultOptions;
ToolbarItem.moduleName = TOOLBAR_MODULE_NAME;
ToolbarItem.folderName = TOOLBAR_FOLDER_NAME;

export default ToolbarItem;
