import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { PANELBAR_FOLDER_NAME, PANELBAR_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
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

PanelBar.ariaSpec = a11ySpec.ariaSpec;

export default PanelBar;
