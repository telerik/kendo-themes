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

/**
 * @ariaSpec
 * Wizard implements the WAI-ARIA tabs pattern with step navigation.
 *
 * - StepList: role="tablist"
 * - Step: role="none" (removes implicit li semantics)
 * - Step link: role="tab", aria-controls, aria-selected, aria-current, tabindex
 * - WizardStep: role="tabpanel", aria-label, tabindex="0"
 */
Wizard.ariaSpec = {
    selector: '.k-wizard',
    rules: [
        { selector: '.k-step-list', attribute: 'role=tablist', usage: 'Indicates the role of the tablist container element.' },
        { selector: '.k-step', attribute: 'role=none', usage: 'The implicit semantics of the li element must be removed.' },
        { selector: '.k-step-link', attribute: 'role=tab', usage: 'Specifies the role for the step links.' },
        { selector: '.k-step-link', attribute: 'aria-controls=.k-wizard-step id (when present)', usage: 'Refers to the tabpanel element associated with the tab.' },
        { selector: '.k-step.k-disabled>.k-step-link', attribute: 'aria-disabled=true', usage: 'A disabled (inactive) tab.' },
        { selector: '.k-step-current .k-step-link', attribute: 'aria-selected=true', usage: 'Indicates the tab control is activated.' },
        { selector: '.k-step-current .k-step-link', attribute: 'aria-current=true', usage: 'Indicates the current active step.' },
        { selector: '.k-step-current .k-step-link', attribute: 'tabindex=0', usage: 'Current step is in the page tab sequence.' },
        { selector: '.k-step:not(.k-step-current) .k-step-link', attribute: 'tabindex=-1', usage: 'Non-current steps are removed from tab sequence.' },
        { selector: '.k-wizard-step', attribute: 'role=tabpanel', usage: 'Specifies the role of the element.' },
        { selector: '.k-wizard-step', attribute: 'aria-label', usage: 'Specifies a label for the panel (e.g., "Step 2 of 4").' },
        { selector: '.k-wizard-step', attribute: 'tabindex=0', usage: 'Keeps the tabpanel in the page tab sequence.' },
    ]
};

export default Wizard;
