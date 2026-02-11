import { Step } from '../step';
import { StepList } from '../step-list';
import { Stepper } from '../stepper.spec';
import { ProgressBarNormal } from "../../progressbar/templates/progressbar-normal";

export const StepperVertical = ({ gridTemplateRows = "repeat(3, 1fr)", ...other }: any) => (
    <Stepper
        style={{ display: "grid", gridTemplateRows }}
        children={
            <>
                <StepList orientation="vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                    <Step first done icon="check" style={{ maxHeight: "33.333%" }}/>
                    <Step current focus text="2" style={{ maxHeight: "33.333%" }}/>
                    <Step last optional text="3" style={{ maxHeight: "33.333%" }}/>
                </StepList>
                <ProgressBarNormal orientation="vertical" reverse={true} label={false} value="50" />
            </>
        }
        {...other}
    />
);
