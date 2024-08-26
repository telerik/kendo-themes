import { Wizard, WizardStep, WizardSteps } from "..";
import { StepperNormal } from "../../stepper";

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

export default WizardNormal;
