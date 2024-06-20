import { ChartWizardNormal } from "..";

const styles = `
    #test-area {
        max-width: 1040px;
    }

    .k-window {
        position: relative;
    }

    .k-chart-wizard {
        width: 700px;
        height: 550px;
    }

    .k-chart-wizard-property-pane .k-expander {
        max-width: 576px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <section>
                <ChartWizardNormal />
            </section>
        </div>
    </>
);
