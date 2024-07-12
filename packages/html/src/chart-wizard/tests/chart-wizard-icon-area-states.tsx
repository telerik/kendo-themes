import { ExpansionPanel } from '../../expansion-panel';
import { ChartWizardChartTypesWrapper, ChartWizardIconTextWrapper } from "..";

const styles = `
    #test-area {
        max-width: 1040px;
    }

    .k-window {
        position: relative;
    }

    .k-chart-wizard .k-expander {
        max-width: 576px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <div className="k-chart-wizard">
                <ExpansionPanel expanded title="States" >
                    <ChartWizardChartTypesWrapper>
                        <ChartWizardIconTextWrapper icon="chart-bar-clustered" text="Normal" />
                        <ChartWizardIconTextWrapper icon="chart-bar-clustered" text="Focus" focus />
                        <ChartWizardIconTextWrapper icon="chart-bar-stacked" text="Selected" selected />
                    </ChartWizardChartTypesWrapper>
                </ExpansionPanel>
            </div>
        </div>
    </>
);
