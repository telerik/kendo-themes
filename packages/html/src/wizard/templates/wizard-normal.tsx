import { Wizard, WizardStep, WizardSteps } from "..";
import { Step, StepList, Stepper } from "../../stepper";
import { ProgressBarNormal } from "../../progressbar";

export const WizardNormal = ({ ...other }: any) => (
    <Wizard
        id="wizard"
        children={
            <>
                <Stepper
                    style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}
                >
                    <StepList wizardContext style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <Step first done icon="check" style={{ maxWidth: "33.333%" }} wizardContext />
                        <Step current focus text="2" style={{ maxWidth: "33.333%" }} wizardContext />
                        <Step last optional text="3" style={{ maxWidth: "33.333%" }} wizardContext />
                    </StepList>
                    <ProgressBarNormal label={false} value="50" aria-hidden="true" />
                </Stepper>
                <WizardSteps>
                    <WizardStep stepLabel="Step 2 of 3">
                        Short content
                    </WizardStep>
                </WizardSteps>
            </>
        }
        {...other}
    />
);
