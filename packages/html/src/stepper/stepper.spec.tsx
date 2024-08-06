import { classNames } from '../misc';

const STEPPER_CLASSNAME = 'k-stepper';

const states = [];

const options = {};

export type KendoStepperProps = {
    style?: React.CSSProperties;
    dir?: "ltr" | "rtl";
}


export const Stepper = (
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

export default Stepper;
