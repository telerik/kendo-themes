import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { PANELBAR_FOLDER_NAME, PANELBAR_MODULE_NAME } from './constants';
export const PANELBAR_CLASSNAME = `k-panelbar`;

const states = [];

const options = {};

export type KendoPanelBarProps = {
    activeDescendant?: string;
};

const defaultOptions = {};

/**
 * @aria {role="tree"} The root element of the PanelBar has role tree.
 * @aria {aria-activedescendant} Points to the currently focused item
 * @ux {Expand / Collapse} Clicking a panel header toggles its content section.
 * @ux {Single expand} Can be configured so that only one panel is open at a time.
 * @ux {Disabled items} Individual items can be disabled and cannot be toggled.
 * @ux {Nested items} Items can contain nested sub-items forming a tree structure.
 */
export const PanelBar: KendoComponent<KendoPanelBarProps & React.HTMLAttributes<HTMLUListElement>> = (
    props: KendoPanelBarProps & React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        activeDescendant,
        ...other
    } = props;

    return (
        <ul
            {...other}
            className={classNames(
                props.className,
                PANELBAR_CLASSNAME
            )}
            role="tree"
            aria-activedescendant={activeDescendant}
        >
            {props.children}
        </ul>
    );
};

PanelBar.states = states;
PanelBar.options = options;
PanelBar.className = PANELBAR_CLASSNAME;
PanelBar.defaultOptions = defaultOptions;
PanelBar.moduleName = PANELBAR_MODULE_NAME;
PanelBar.folderName = PANELBAR_FOLDER_NAME;

/**
 * @keyboard {ArrowUp} Focuses the previous PanelBar item. If no previous item is available, focuses the last item.
 * @keyboard {ArrowDown} Focuses the next PanelBar item. If no next item is available, focuses the first item.
 * @keyboard {ArrowLeft} Collapses an expanded item. If the item is collapsed, focuses its parent.
 * @keyboard {ArrowRight} Expands a collapsed item. If the item is expanded, focuses its first child node.
 * @keyboard {Home} Moves focus to the first item in the PanelBar without expanding or collapsing an item.
 * @keyboard {End} Moves focus to the last item in the PanelBar that is focusable without expanding an item.
 * @keyboard {Enter} Selects the focused item and toggles the item if it is expandable. It also triggers its action (click or opening url).
 * @keyboard {Space} Selects the focused item and toggles the item if it is expandable. It also triggers its action (click or opening url).
 *
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/treeview/treeview-navigation.html ARIA practices Navigation Treeview Example
 */

export default PanelBar;
