import { WizardVertical, WizardStep, WizardSteps } from '..';
import { StepperVertical } from '../../stepper';


const style = `
    .wrapper {
        border: 1px solid #6c757d4f;
        margin-bottom: 16px;
    }

    .wrapper p {
        background-color:  #6c757d4f;
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
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section>
                <div className="wrapper">
                    <p>Vertical wizard; Content is placed to the right (Default)</p>
                    <WizardVertical>
                        <StepperVertical />
                        <WizardSteps>
                            <WizardStep focus>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </WizardStep>
                        </WizardSteps>
                    </WizardVertical>
                </div>

                <div className="wrapper">
                    <p>Small height set</p>
                    <WizardVertical style={{ height: "200px" }}>
                        <StepperVertical />
                        <WizardSteps>
                            <WizardStep>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </WizardStep>
                        </WizardSteps>
                    </WizardVertical>
                </div>

                <div className="wrapper">
                    <p>Short content</p>
                    <WizardVertical />
                </div>

                <div className="wrapper">
                    <p>Short content; Big height set</p>
                    <WizardVertical style={{ height: "280px" }} />
                </div>
            </section>

            <section>
                <div className="wrapper">
                    <p>Vertical wizard; Content is placed to the left</p>
                    <WizardVertical contentPosition="left">
                        <StepperVertical />
                        <WizardSteps>
                            <WizardStep focus>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </WizardStep>
                        </WizardSteps>
                    </WizardVertical>
                </div>

                <div className="wrapper">
                    <p>Small height set</p>
                    <WizardVertical contentPosition="left" style={{ height: "200px" }}>
                        <StepperVertical />
                        <WizardSteps>
                            <WizardStep>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </WizardStep>
                        </WizardSteps>
                    </WizardVertical>
                </div>

                <div className="wrapper">
                    <p>Short content</p>
                    <WizardVertical contentPosition="left" />
                </div>

                <div className="wrapper">
                    <p>Short content; Big height set</p>
                    <WizardVertical contentPosition="left" style={{ height: "280px" }} />
                </div>
            </section>

        </div>
    </>
);
