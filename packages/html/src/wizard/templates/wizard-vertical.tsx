import { Wizard } from '../wizard.spec';
import { WizardStep } from '../wizard-step';
import { WizardSteps } from '../wizard-steps';
import { StepperVertical } from "../../stepper/templates/stepper-vertical";

export const WizardVertical = ({ ...other }: any) => (
    <Wizard
        id="wizard"
        orientation="vertical"
        children={
            <>
                <StepperVertical />
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
