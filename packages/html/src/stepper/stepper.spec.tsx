import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
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
Stepper.moduleName = "stepper";
Stepper.folderName = Stepper.moduleName;

export default Stepper;
