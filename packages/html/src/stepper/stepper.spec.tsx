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
            )}>
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

export default Stepper;
