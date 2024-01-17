import { Step, StepList, StepperNormal } from '..';
import { ProgressBarNormal } from '../../progressbar';


const style = `
    #test-area {
        grid-template-columns: 100px 500px;
    }
    #test-area hr {
        width: 100%;
        grid-column: 1 / -1;
        visibility: hidden;
    }

    .subgrid-horizontal {
        display: grid;
        grid-gap: 20px;
    }

    .subgrid-two-cols {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }

    .k-progressbar {
        grid-column-start: 2;
        grid-column-end: 6;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-bg-gray-100">

            <span className="col-2">RTL</span>

            <span>Indicator</span>
            <section>
                <StepperNormal dir="rtl" />
            </section>

            <span>^ + label</span>
            <section>
                <StepperNormal dir="rtl">
                    <StepList style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <Step first done valid text="1" label="Account Info with too long label" style={{ maxWidth: "33.333%" }}/>
                        <Step current focus invalid text="2" label="Personal Info" style={{ maxWidth: "33.333%" }}/>
                        <Step last optional text="3" label="Payment Details" style={{ maxWidth: "33.333%" }}/>
                    </StepList>
                    <ProgressBarNormal label={false} value="50" />
                </StepperNormal>
            </section>

            <span>Icons</span>
            <section>
                <StepperNormal dir="rtl">
                    <StepList style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <Step first done icon="lock" style={{ maxWidth: "33.333%" }}/>
                        <Step current focus icon="user" style={{ maxWidth: "33.333%" }}/>
                        <Step last optional icon="track-changes" style={{ maxWidth: "33.333%" }}/>
                    </StepList>
                    <ProgressBarNormal label={false} value="50" />
                </StepperNormal>
            </section>

            <span>^ + label</span>
            <section>
                <StepperNormal dir="rtl">
                    <StepList style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <Step first done icon="lock" label="Account Info" style={{ maxWidth: "33.333%" }}/>
                        <Step current focus icon="user" label="Personal Info" style={{ maxWidth: "33.333%" }}/>
                        <Step last optional icon="track-changes" label="Payment Details" style={{ maxWidth: "33.333%" }}/>
                    </StepList>
                    <ProgressBarNormal label={false} value="50" />
                </StepperNormal>
            </section>

            <span>Labels</span>
            <section>
                <StepperNormal dir="rtl">
                    <StepList style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <Step first done label="Account Info" style={{ maxWidth: "33.333%" }}/>
                        <Step current focus label="Personal Info" style={{ maxWidth: "33.333%" }}/>
                        <Step last optional label="Payment Details" style={{ maxWidth: "33.333%" }}/>
                    </StepList>
                    <ProgressBarNormal label={false} value="50" />
                </StepperNormal>
            </section>
        </div>
    </>
);
