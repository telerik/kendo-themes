import { Step, StepList, Stepper } from "..";
import { ProgressBarNormal } from "../../progressbar";

export const StepperNormal = ({ gridTemplateColumns = "repeat(6, 1fr)", ...other }: any) => (
    <Stepper
        style={{ display: "grid", gridTemplateColumns }}
        children={
            <>
                <StepList style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                    <Step first done icon="check" style={{ maxWidth: "33.333%" }}/>
                    <Step current focus text="2" style={{ maxWidth: "33.333%" }}/>
                    <Step last optional text="3" style={{ maxWidth: "33.333%" }}/>
                </StepList>
                <ProgressBarNormal label={false} value="50" />
            </>
        }
        {...other}
    />
);

export default StepperNormal;
