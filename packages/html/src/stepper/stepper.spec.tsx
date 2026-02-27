import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { STEPPER_FOLDER_NAME, STEPPER_MODULE_NAME } from './constants';
const STEPPER_CLASSNAME = 'k-stepper';

const states = [];

const options = {};

export type KendoStepperProps = {
    style?: React.CSSProperties;
    dir?: "ltr" | "rtl";
}

const defaultOptions = {};

export const Stepper: KendoComponent<KendoStepperProps & React.HTMLAttributes<HTMLElement>> = (
    props: KendoStepperProps & React.HTMLAttributes<HTMLElement>
) => {
    const {
        style,
        ...other
    } = props;

    return (
        <nav
            {...other}
            style={style}
            className={classNames(
                props.className,
                STEPPER_CLASSNAME,
            )}
            aria-label="Stepper"
        >
            {props.children}
        </nav>
    );
};

Stepper.options = options;
Stepper.states = states;
Stepper.className = STEPPER_CLASSNAME;
Stepper.defaultOptions = defaultOptions;
Stepper.moduleName = STEPPER_MODULE_NAME;
Stepper.folderName = STEPPER_FOLDER_NAME;

/**
 * @ariaSpec
 * Stepper uses a nav landmark with ordered list of navigation items.
 *
 * - nav: aria-label="Stepper"
 * - Step links: tabindex management via roving tabindex
 * - Current step: aria-current="step"
 * - Disabled steps: aria-disabled="true"
 */
Stepper.ariaSpec = {
    selector: '.k-stepper',
    rules: [
        { selector: '.k-stepper', attribute: 'role=navigation or nodeName=nav', usage: 'The landmark role navigation must be assigned to the component.' },
        { selector: '.k-step.k-disabled>.k-step-link', attribute: 'aria-disabled=true', usage: 'A disabled (inactive) link.' },
        { selector: '.k-step-current>.k-step-link', attribute: 'aria-current=step', usage: 'The currently selected link.' },
        { selector: '.k-step.k-focus .k-step-link', attribute: 'tabindex=0', usage: 'Focused step link is in the tab order.' },
        { selector: '.k-step:not(.k-focus) .k-step-link', attribute: 'tabindex=-1', usage: 'Non-focused step links are removed from tab order.' },
    ]
};

export default Stepper;
