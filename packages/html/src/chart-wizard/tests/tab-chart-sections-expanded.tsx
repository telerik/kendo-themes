import { ExpansionPanel } from '../../expansion-panel';
import { Icon } from '../../icon';

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
                <ExpansionPanel expanded title="Bar chart" >
                    <div className="k-chart-types-wrapper k-d-flex k-flex-col k-gap-4">
                        <div className="k-icon-text-wrapper">
                            <div className="k-icon-background-area">
                                <Icon icon="chart-bar-clustered" size="xlarge"/>
                            </div>
                            Bar
                        </div>
                        <div className="k-icon-text-wrapper">
                            <div className="k-icon-background-area">
                                <Icon icon="chart-bar-stacked" size="xlarge" />
                            </div>
                            Stacked Bar
                        </div>
                        <div className="k-icon-text-wrapper">
                            <div className="k-icon-background-area">
                                <Icon icon="chart-bar-stacked100" size="xlarge" />
                            </div>
                            100% Stacked bar
                        </div>
                    </div>
                </ExpansionPanel>
            </section>
            <section>
                <span className="k-font-bold">Pie chart section expanded</span>
                <ExpansionPanel expanded title="Pie chart" >
                    <div className="k-chart-types-wrapper k-d-flex k-flex-col k-gap-4">
                        <div className="k-icon-text-wrapper">
                            <div className="k-icon-background-area">
                                <Icon icon="chart-pie" size="xlarge" />
                            </div>
                            Pie
                        </div>
                    </div>
                </ExpansionPanel>
            </section>
            <section>
                <span className="k-font-bold">Column chart section expanded</span>
                <ExpansionPanel expanded title="Column chart" >
                    <div className="k-chart-types-wrapper k-d-flex k-flex-col k-gap-4">
                        <div className="k-icon-text-wrapper">
                            <div className="k-icon-background-area">
                                <Icon icon="chart-column-clustered" size="xlarge" />
                            </div>
                            Column
                        </div>
                        <div className="k-icon-text-wrapper">
                            <div className="k-icon-background-area">
                                <Icon icon="chart-column-stacked" size="xlarge" />
                            </div>
                            Stacked Column
                        </div>
                        <div className="k-icon-text-wrapper">
                            <div className="k-icon-background-area">
                                <Icon icon="chart-column-stacked100" size="xlarge" />
                            </div>
                            100% Stacked Column
                        </div>
                    </div>
                </ExpansionPanel>
            </section>

            <section>
                <span className="k-font-bold">Line chart section expanded</span>
                <ExpansionPanel expanded title="Line chart" >
                    <div className="k-chart-types-wrapper k-d-flex k-flex-col k-gap-4">
                        <div className="k-icon-text-wrapper">
                            <div className="k-icon-background-area">
                                <Icon icon="chart-column-clustered" size="xlarge" />
                            </div>
                            Line
                        </div>
                        <div className="k-icon-text-wrapper">
                            <div className="k-icon-background-area">
                                <Icon icon="chart-line-stacked" size="xlarge" />
                            </div>
                            Stacked Line
                        </div>
                        <div className="k-icon-text-wrapper">
                            <div className="k-icon-background-area">
                                <Icon icon="chart-line-stacked100" size="xlarge" />
                            </div>
                            100% Stacked Line
                        </div>
                    </div>
                </ExpansionPanel>
            </section>
            <section>
                <span className="k-font-bold">Scatter chart section expanded</span>
                <ExpansionPanel expanded title="Scatter chart" >
                    <div className="k-chart-types-wrapper k-d-flex k-flex-col k-gap-4">
                        <div className="k-icon-text-wrapper">
                            <div className="k-icon-background-area">
                                <Icon icon="chart-scatter" size="xlarge" />
                            </div>
                            Scatter
                        </div>
                    </div>
                </ExpansionPanel>
            </section>
        </div>
    </>
);
