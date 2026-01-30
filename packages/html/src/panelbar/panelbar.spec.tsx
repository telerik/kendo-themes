import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { PANELBAR_FOLDER_NAME, PANELBAR_MODULE_NAME } from './constants';
export const PANELBAR_CLASSNAME = `k-panelbar`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoPanelBarProps = {
    id?: string;
    activedescendantId?: string;
};

export const PanelBar: KendoComponent<KendoPanelBarProps & React.HTMLAttributes<HTMLUListElement>> = (
    props: KendoPanelBarProps & React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        id = 'k-panelbar',
        activedescendantId,
        ...other
    } = props;

    return (
        <ul
            {...other}
            className={classNames(
                props.className,
                PANELBAR_CLASSNAME
            )}
            id={id}
            role="tree"
            {...(activedescendantId && { 'aria-activedescendant': activedescendantId })}
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

export default PanelBar;
