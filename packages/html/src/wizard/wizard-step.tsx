import { Button } from '../button';
import { classNames, stateClassNames, States } from '../misc';

export const WIZZARDSTEP_CLASSNAME = `k-wizard-step`;

const states = [
    States.focus,
];

const options = {};

export type KendoWizardStepProps = {
    buttons?: React.JSX.Element;
    /** @aria aria-label for the tabpanel, e.g. "Step 2 of 3" */
    stepLabel?: string;
};

export type KendoWizardStepState = { [K in (typeof states)[number]]?: boolean };

const defaultButtons = (
    <>
    <span className="k-wizard-buttons-left">
        <span className="k-wizard-pager">Step 2 of 3</span>
    </span>
    <span className="k-wizard-buttons-right">
        <Button>Previous</Button>
        <Button themeColor="primary">Next</Button>
    </span>
</>
);

const defaultOptions = {
    buttons: defaultButtons
};

export const WizardStep = (
    props: KendoWizardStepProps & KendoWizardStepState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        focus,
        buttons = defaultOptions.buttons,
        stepLabel,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                WIZZARDSTEP_CLASSNAME,
                stateClassNames(WIZZARDSTEP_CLASSNAME, { focus }),
            )}
            role="tabpanel"
            aria-label={stepLabel || "Step"}
            tabIndex={0}
        >

            <div className="k-wizard-content">
                {props.children}
            </div>

            {buttons &&
                <div className="k-wizard-buttons">
                    {buttons}
                </div>
            }
        </div>
    );
};

WizardStep.states = states;
WizardStep.options = options;
WizardStep.className = WIZZARDSTEP_CLASSNAME;
WizardStep.defaultOptions = defaultOptions;

export default WizardStep;
