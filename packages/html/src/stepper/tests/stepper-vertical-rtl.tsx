import { Step, StepList, StepperVertical } from '..';
import { ProgressBarNormal } from '../../progressbar';


const style = `
    #test-area hr {
        width: 100%;
        grid-column: 1 / -1;
        visibility: hidden;
    }
    .k-progressbar {
        grid-row-start: 1;
        grid-row-end: 3;
        top: 17px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4 k-bg-gray-100">

            <span className="col-4">RTL</span>
            <span>Indicator</span>
            <span>Indicator + label</span>
            <span>Icon</span>
            <span>Label</span>

            <section>
                <StepperVertical dir="rtl" />
            </section>
            <section>
                <StepperVertical dir="rtl">
                    <StepList orientation="vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <Step first done valid text="1" label="Account Info with too long label" style={{ maxHeight: "33.333%" }}/>
                        <Step current focus invalid text="2" label="Personal Info" style={{ maxHeight: "33.333%" }}/>
                        <Step last optional text="3" label="Payment Details" style={{ maxHeight: "33.333%" }}/>
                    </StepList>
                    <ProgressBarNormal orientation="vertical" reverse={true} label={false} value="40" />
                </StepperVertical>
            </section>
            <section>
                <StepperVertical dir="rtl">
                    <StepList orientation="vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <Step first done icon="lock" style={{ maxHeight: "33.333%" }}/>
                        <Step current focus icon="user" style={{ maxHeight: "33.333%" }}/>
                        <Step last optional icon="track-changes" style={{ maxHeight: "33.333%" }}/>
                    </StepList>
                    <ProgressBarNormal orientation="vertical" reverse={true} label={false} value="40" />
                </StepperVertical>
            </section>
            <section>
                <StepperVertical dir="rtl">
                    <StepList orientation="vertical" style={{ gridRowStart: "1", gridRowEnd: "-1" }}>
                        <Step first done label="Account Info" style={{ maxHeight: "33.333%" }}/>
                        <Step current focus label="Personal Info" style={{ maxHeight: "33.333%" }}/>
                        <Step last optional label="Payment Details" style={{ maxHeight: "33.333%" }}/>
                    </StepList>
                    <ProgressBarNormal orientation="vertical" reverse={true} label={false} value="40" />
                </StepperVertical>
            </section>
        </div>
    </>
);
