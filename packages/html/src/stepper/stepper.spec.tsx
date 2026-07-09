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

/**
 * @aria {role="navigation"} The landmark role navigation must be assigned to the component.
 */
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
 * @keyboard {Shift + Tab} Focuses previous link.
 * @keyboard {Tab} Focuses next link.
 * @keyboard {Home} Focuses first link.
 * @keyboard {End} Focuses last link.
 * @keyboard {Space or Enter} Activates the currently focused link.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#navigation WAI-ARIA specification for navigation
 */

export default Stepper;
