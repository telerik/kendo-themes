import { Button } from '../button';
import { classNames, stateClassNames, States } from '../misc';

export const WIZZARDSTEP_CLASSNAME = `k-wizard-step`;

const states = [
    States.focus,
];

const options = {};

export type KendoWizardStepProps = {
    buttons?: JSX.Element;
};

export type KendoWizardStepState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    buttons: (
        <>
            <span className="k-wizard-buttons-left">
                <span className="k-wizard-pager">Step 2 of 3</span>
            </span>
            <span className="k-wizard-buttons-right">
                <Button>Previous</Button>
                <Button themeColor="primary">Next</Button>
            </span>
        </>
    ),
};

export const WizardStep = (
    props: KendoWizardStepProps & KendoWizardStepState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        focus,
        buttons,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                WIZZARDSTEP_CLASSNAME,
                stateClassNames(WIZZARDSTEP_CLASSNAME, { focus }),
            )}>

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
WizardStep.defaultProps = defaultProps;

export default WizardStep;
