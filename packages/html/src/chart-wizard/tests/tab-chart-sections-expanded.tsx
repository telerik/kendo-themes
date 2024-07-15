import { ExpansionPanel } from '../../expansion-panel';
import { ChartWizardChartTypesWrapper, ChartWizardIconTextWrapper } from "..";

const styles = `
    #test-area {
        max-width: 1040px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <section>
                <span className="k-font-bold">Bar chart section expanded</span>
                <div className="k-chart-wizard">
                    <ExpansionPanel expanded title="Bar chart" >
                        <ChartWizardChartTypesWrapper>
                            <ChartWizardIconTextWrapper icon="chart-bar-clustered" text="Bar" />
                            <ChartWizardIconTextWrapper icon="chart-bar-stacked" text="Stacked Bar" />
                            <ChartWizardIconTextWrapper icon="chart-bar-stacked100" text="100% Stacked Bar" />
                        </ChartWizardChartTypesWrapper>
                    </ExpansionPanel>
                </div>
            </section>
            <section>
                <span className="k-font-bold">Pie chart section expanded</span>
                <div className="k-chart-wizard">
                    <ExpansionPanel expanded title="Pie chart" >
                        <ChartWizardChartTypesWrapper>
                            <ChartWizardIconTextWrapper icon="chart-pie" text="Pie" />
                        </ChartWizardChartTypesWrapper>
                    </ExpansionPanel>
                </div>
            </section>
            <section>
                <span className="k-font-bold">Column chart section expanded</span>
                <div className="k-chart-wizard">
                    <ExpansionPanel expanded title="Column chart" >
                        <ChartWizardChartTypesWrapper>
                            <ChartWizardIconTextWrapper icon="chart-column-clustered" text="Column" />
                            <ChartWizardIconTextWrapper icon="chart-column-stacked" text="Stacked Column" />
                            <ChartWizardIconTextWrapper icon="chart-column-stacked100" text="100% Stacked Column" />
                        </ChartWizardChartTypesWrapper>
                    </ExpansionPanel>
                </div>
            </section>

            <section>
                <span className="k-font-bold">Line chart section expanded</span>
                <div className="k-chart-wizard">
                    <ExpansionPanel expanded title="Line chart" >
                        <ChartWizardChartTypesWrapper>
                            <ChartWizardIconTextWrapper icon="chart-line" text="Line" />
                            <ChartWizardIconTextWrapper icon="chart-line-stacked" text="Stacked Line" />
                            <ChartWizardIconTextWrapper icon="chart-line-stacked100" text="100% Stacked Line" />
                        </ChartWizardChartTypesWrapper>
                    </ExpansionPanel>
                </div>
            </section>
            <section>
                <span className="k-font-bold">Scatter chart section expanded</span>
                <div className="k-chart-wizard">
                    <ExpansionPanel expanded title="Scatter chart" >
                        <ChartWizardChartTypesWrapper>
                            <ChartWizardIconTextWrapper icon="chart-scatter" text="Scatter" />
                        </ChartWizardChartTypesWrapper>
                    </ExpansionPanel>
                </div>
            </section>
        </div>
    </>
);
