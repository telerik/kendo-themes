import { Wizard, WizardStep, WizardSteps } from "..";
import { StepperVertical } from "../../stepper";

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
