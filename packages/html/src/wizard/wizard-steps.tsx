import { classNames } from '../misc';

export const WIZZARDSTEPS_CLASSNAME = `k-wizard-steps`;

const states = [];

const options = {};

export const WizardSteps = (
    props: & React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            props.className,
            WIZZARDSTEPS_CLASSNAME,
        )}>
        {props.children}
    </div>
);

WizardSteps.states = states;
WizardSteps.options = options;
WizardSteps.className = WIZZARDSTEPS_CLASSNAME;

export default WizardSteps;
