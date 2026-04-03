import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { PANELBAR_FOLDER_NAME, PANELBAR_MODULE_NAME } from './constants';
export const PANELBAR_CLASSNAME = `k-panelbar`;

const states = [];

const options = {};

export type KendoPanelBarProps = {
    /** @aria aria-activedescendant - Points to the currently focused item */
    activeDescendant?: string;
};

const defaultOptions = {};

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
 * @ariaSpec
 * PanelBar implements the WAI-ARIA tree pattern.
 *
 * - Root element: role="tree" with aria-activedescendant
 * - Items: role="treeitem" with aria-expanded and aria-selected
 * - Child groups: role="group", aria-hidden when parent is collapsed
 */
PanelBar.ariaSpec = {
    selector: '.k-panelbar',
    rules: [
        { selector: '.k-panelbar', attribute: 'role=tree', usage: 'The root element of the PanelBar has role tree.' },
        { selector: '.k-panelbar', attribute: 'aria-activedescendant (when present)', usage: 'Points to the currently focused item in the PanelBar.' },
        { selector: '.k-panelbar-group', attribute: 'role=group', usage: 'The ul element that wraps child nodes.' },
        { selector: '.k-panelbar-item:not(.k-expanded) > .k-panelbar-group', attribute: 'aria-hidden=true', usage: 'Hides the group element from assistive technologies when its parent is not expanded.' },
        { selector: '.k-panelbar-item', attribute: 'role=treeitem', usage: 'The li element rendered for a PanelBar item.' },
        { selector: '.k-panelbar-item', attribute: 'aria-expanded=true/false', usage: 'Announces the expanded state of the item (if expandable).' },
        { selector: '.k-panelbar-item', attribute: 'aria-selected=true/false', usage: 'Announces the selected state of the item.' },
    ]
};

export default PanelBar;
