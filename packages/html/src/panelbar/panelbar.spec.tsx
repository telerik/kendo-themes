import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
export const PANELBAR_CLASSNAME = `k-panelbar`;

const states = [];

const options = {};

const defaultOptions = {};

export const PanelBar: KendoComponent<React.HTMLAttributes<HTMLUListElement>> = (
    props: React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        ...other
    } = props;

    return (
        <ul
            {...other}
            className={classNames(
                props.className,
                PANELBAR_CLASSNAME
            )}
        >
            {props.children}
        </ul>
    );
};

PanelBar.states = states;
PanelBar.options = options;
PanelBar.className = PANELBAR_CLASSNAME;
PanelBar.defaultOptions = defaultOptions;
PanelBar.moduleName = "panelbar";
PanelBar.folderName = "panelbar";

export default PanelBar;
