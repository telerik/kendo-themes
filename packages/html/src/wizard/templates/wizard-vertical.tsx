import { Wizard, WizardStep, WizardSteps } from "..";
import { Step, StepList, Stepper } from "../../stepper";
import { ProgressBarNormal } from "../../progressbar";

export const WizardVertical = ({ ...other }: any) => (
    <Wizard
        id="wizard"
        orientation="vertical"
        children={
            <>
                <Stepper
                    style={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}
                >
                    <StepList wizardContext orientation="vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <Step first done icon="check" style={{ maxHeight: "33.333%" }} wizardContext />
                        <Step current focus text="2" style={{ maxHeight: "33.333%" }} wizardContext />
                        <Step last optional text="3" style={{ maxHeight: "33.333%" }} wizardContext />
                    </StepList>
                    <ProgressBarNormal orientation="vertical" reverse={true} label={false} value="50" aria-hidden="true" />
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
