import { Step, StepList, StepperNormal } from '..';
import { ProgressBarNormal } from '../../progressbar';


const style = `
    #test-area {
        grid-template-columns: auto 1fr 1fr 1fr 1fr;
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
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-bg-gray-100">

            {[ "normal", ...Step.states ].map((state) => (
                <>
                    <span>{state}</span>
                    <section className="col-4">
                        <StepperNormal>
                            <StepList style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                                <Step first done icon="check" label="Account Info" { ...{ [state]: true }} style={{ maxWidth: "33.333%" }}/>
                                <Step current text="2" label="Personal Info" { ...{ [state]: true }} style={{ maxWidth: "33.333%" }}/>
                                <Step last text="3" label="Payment Details" { ...{ [state]: true }} style={{ maxWidth: "33.333%" }}/>
                            </StepList>
                            <ProgressBarNormal label={false} value="50" />
                        </StepperNormal>
                    </section>

                    <span></span>
                    <section className="col-4">
                        <StepperNormal>
                            <StepList style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                                <Step first done label="Account Info" { ...{ [state]: true }} style={{ maxWidth: "33.333%" }}/>
                                <Step current label="Personal Info" { ...{ [state]: true }} style={{ maxWidth: "33.333%" }}/>
                                <Step last label="Payment Details" { ...{ [state]: true }} style={{ maxWidth: "33.333%" }}/>
                            </StepList>
                            <ProgressBarNormal label={false} value="50" />
                        </StepperNormal>
                    </section>

                    <hr/>
                </>
            ))
            }

        </div>
    </>
);
