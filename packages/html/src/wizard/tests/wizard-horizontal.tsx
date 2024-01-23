import { WizardNormal, WizardStep, WizardSteps } from '..';
import { StepperNormal } from '../../stepper';


const style = `
    section {
        border: 1px solid #6c757d4f;
    }

    section > p {
        background-color:  #6c757d4f;
    }

    .k-progressbar {
        grid-column-start: 2;
        grid-column-end: 6;
    }
`;


export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">
            <section>
                <p>Horizontal wizard, Content is rendered below the Stepper</p>
                <WizardNormal>
                    <StepperNormal />
                    <WizardSteps>
                        <WizardStep focus>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </WizardStep>
                    </WizardSteps>
                </WizardNormal>
            </section>

            <section>
                <p>Horizontal wizard -{'>'} Long content; Height set</p>
                <WizardNormal style={{ height: "250px" }}>
                    <StepperNormal />
                    <WizardSteps>
                        <WizardStep>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </WizardStep>
                    </WizardSteps>
                </WizardNormal>
            </section>

            <section>
                <p>Horizontal wizard -{'>'} Short content</p>
                <WizardNormal />
            </section>

            <section>
                <p>Horizontal wizard -{'>'} Short content; Height set</p>
                <WizardNormal style={{ height: "250px" }} />
            </section>

        </div>
    </>
);
