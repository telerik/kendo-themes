import { Wizard, KendoWizardProps } from '../wizard.spec';
import { WizardStep } from '../wizard-step';
import { WizardSteps } from '../wizard-steps';
import { WizardNormal } from '../templates/wizard-normal';
import { WizardVertical } from '../templates/wizard-vertical';
import { ProgressBarNormal } from '../../progressbar';
import { Stepper, Step, StepList } from '../../stepper';

const options = Wizard.options;
const states = Wizard.states;
const defaults = {
  ...Wizard.defaultOptions,
  variant: 'bottom',
};
const variants = [
    {
        name: 'bottom',
        title: 'Content Bottom',
    },
    {
        name: 'right',
        title: 'Content Right',
    },
    {
        name: 'left',
        title: 'Content Left',
    },
];
const modifiers = [];

export const WizardDemo = (props: KendoWizardProps & { variant?: (typeof variants)[number]['name'] }) => {
    const { variant, ...other } = props;

    switch (variant) {
        case 'right':
            return (
                <WizardVertical {...other}>
                    <Stepper style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
                        <StepList orientation="vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                            <Step first done text="1" label="Step 1" style={{ maxHeight: "33.333%" }} />
                            <Step current focus text="2" label="Step 2" style={{ maxHeight: "33.333%" }} />
                            <Step last text="3" label="Step 3" style={{ maxHeight: "33.333%" }} />
                        </StepList>
                        <ProgressBarNormal className="k-top-5 k-row-start-1 k-row-end-3" orientation="vertical" reverse={true} label={false} value="50" />
                    </Stepper>
                    <WizardSteps>
                        <WizardStep>
                            Some quick example text to make up the bulk of the Wizard step content. Some quick example text to make up the bulk of the Wizard step content. Some quick example text to make up the bulk of the Wizard step content.
                        </WizardStep>
                    </WizardSteps>
                </WizardVertical>
            );
        case 'left':
            return (
                <WizardVertical contentPosition="left" {...other}>
                    <Stepper style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
                        <StepList orientation="vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                            <Step first done text="1" label="Step 1" style={{ maxHeight: "33.333%" }} />
                            <Step current focus text="2" label="Step 2" style={{ maxHeight: "33.333%" }} />
                            <Step last text="3" label="Step 3" style={{ maxHeight: "33.333%" }} />
                        </StepList>
                        <ProgressBarNormal className="k-top-5 k-row-start-1 k-row-end-3" orientation="vertical" reverse={true} label={false} value="50" />
                    </Stepper>
                    <WizardSteps>
                        <WizardStep>
                            Some quick example text to make up the bulk of the Wizard step content. Some quick example text to make up the bulk of the Wizard step content. Some quick example text to make up the bulk of the Wizard step content.
                        </WizardStep>
                    </WizardSteps>
                </WizardVertical>
            );
        case 'bottom':
        default:
            return (
                <WizardNormal {...other}>
                    <Stepper style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
                        <StepList style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                            <Step first done icon="check" label="Step 1" style={{ maxWidth: "33.333%" }} />
                            <Step current focus text="2" label="Step 2" style={{ maxWidth: "33.333%" }} />
                            <Step last text="3" label="Step 3" style={{ maxWidth: "33.333%" }} />
                        </StepList>
                        <ProgressBarNormal className="k-col-start-2 k-col-end-6" label={false} value="50" />
                    </Stepper>
                    <WizardSteps>
                        <WizardStep>
                            Some quick example text to make up the bulk of the Wizard step content. Some quick example text to make up the bulk of the Wizard step content. Some quick example text to make up the bulk of the Wizard step content.
                        </WizardStep>
                    </WizardSteps>
                </WizardNormal>
            );
    }
}


WizardDemo.options = options;
WizardDemo.states = states;
WizardDemo.variants = variants;
WizardDemo.defaultOptions = defaults;
WizardDemo.modifiers = modifiers;
WizardDemo.className = Wizard.className;

export default WizardDemo;

