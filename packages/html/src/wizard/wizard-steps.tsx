import { classNames } from '../misc';

export const WIZZARDSTEPS_CLASSNAME = `k-wizard-steps`;

const states = [];

const options = {};

const defaultProps = {};

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
WizardSteps.defaultProps = defaultProps;

export default WizardSteps;
