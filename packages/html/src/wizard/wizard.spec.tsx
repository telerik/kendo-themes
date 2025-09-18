import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { WIZARD_FOLDER_NAME, WIZARD_MODULE_NAME } from './constants';
export const WIZZARD_CLASSNAME = `k-wizard`;

const states = [
    States.disabled,
];

const options = {};

export type KendoWizardProps = {
    orientation?: "vertical" | "horizontal";
    contentPosition?: "right" | "left";
};

export type KendoWizardState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    orientation: "horizontal",
    contentPosition: "right",
};

export const Wizard: KendoComponent<KendoWizardProps & KendoWizardState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoWizardProps & KendoWizardState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        disabled,
        orientation = defaultOptions.orientation,
        contentPosition = defaultOptions.contentPosition,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                WIZZARD_CLASSNAME,
                stateClassNames(WIZZARD_CLASSNAME, { disabled }),
                {
                    [`${WIZZARD_CLASSNAME}-${orientation}`]: orientation,
                    [`${WIZZARD_CLASSNAME}-${contentPosition}`]: contentPosition && orientation !== "horizontal",
                }
            )}>
            {props.children}
        </div>
    );
};

Wizard.states = states;
Wizard.options = options;
Wizard.className = WIZZARD_CLASSNAME;
Wizard.defaultOptions = defaultOptions;
Wizard.moduleName = WIZARD_MODULE_NAME;
Wizard.folderName = WIZARD_FOLDER_NAME;

export default Wizard;
