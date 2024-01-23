import { Step, StepList, StepperNormal } from '..';
import { ProgressBarNormal } from '../../progressbar';


const style = `
    body {
        background: #fcfcfc;
    }
    #test-area {
        grid-template-columns: 100px 500px;
    }
    #test-area hr {
        width: 100%;
        grid-column: 1 / -1;
        visibility: hidden;
    }
    .k-progressbar {
        grid-column-start: 2;
        grid-column-end: 6;
    }
    section:last-of-type .k-progressbar {
        grid-column-end: 16;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">

            <span className="col-2">LTR</span>

            <span>Indicator</span>
            <section>
                <StepperNormal />
            </section>

            <span>^ + label</span>
            <section>
                <StepperNormal>
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
                <StepperNormal>
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
                <StepperNormal>
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
                <StepperNormal>
                    <StepList style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <Step first done label="Account Info" style={{ maxWidth: "33.333%" }}/>
                        <Step current focus label="Personal Info" style={{ maxWidth: "33.333%" }}/>
                        <Step last optional label="Payment Details" style={{ maxWidth: "33.333%" }}/>
                    </StepList>
                    <ProgressBarNormal label={false} value="50" />
                </StepperNormal>
            </section>

            <hr />

            <span>Many steps</span>
            <section className="col-2">
                <StepperNormal gridTemplateColumns="repeat(16, 1fr)">
                    <StepList style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                        <Step done first text="1" label="Step one" style={{ maxWidth: "12.5%" }}/>
                        <Step done text="2" label="Step two" style={{ maxWidth: "12.5%" }}/>
                        <Step done text="3" label="Step three with extremely long label" style={{ maxWidth: "12.5%" }}/>
                        <Step done text="4" label="Step four" style={{ maxWidth: "12.5%" }}/>
                        <Step current focus text="5" label="Step five" style={{ maxWidth: "12.5%" }}/>
                        <Step text="6" label="Step six" style={{ maxWidth: "12.5%" }}/>
                        <Step text="7" label="Step seven" style={{ maxWidth: "12.5%" }}/>
                        <Step last text="8" label="Step eight" style={{ maxWidth: "12.5%" }}/>
                    </StepList>
                    <ProgressBarNormal label={false} value="60" />
                </StepperNormal>
            </section>
        </div>
    </>
);
