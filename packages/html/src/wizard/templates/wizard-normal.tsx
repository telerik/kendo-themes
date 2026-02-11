import { Wizard } from '../wizard.spec';
import { WizardStep } from '../wizard-step';
import { WizardSteps } from '../wizard-steps';
import { StepperNormal } from "../../stepper/templates/stepper-normal";

export const WizardNormal = ({ ...other }: any) => (
    <Wizard
        id="wizard"
        children={
            <>
                <StepperNormal />
                <WizardSteps>
                    <WizardStep>
                        Short content
                    </WizardStep>
                </WizardSteps>
            </>
        }
        {...other}
    />
);
