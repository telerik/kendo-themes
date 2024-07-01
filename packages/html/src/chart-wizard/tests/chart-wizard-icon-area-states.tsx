import { ExpansionPanel } from '../../expansion-panel';
import { Icon } from '../../icon';

const styles = `
    #test-area {
        max-width: 1040px;
    }

    .k-window {
        position: relative;
    }

    .k-chart-wizard {
        width: 1700px;
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
                <div className="k-chart-wizard-splitter">
                    <ExpansionPanel expanded title="States" >
                        <div className="k-chart-types-wrapper k-d-flex k-flex-col k-gap-4">
                            <div className="k-icon-text-wrapper">
                                <div className="k-icon-background-area">
                                    <Icon icon="chart-bar-clustered" size="xlarge"/>
                                </div>
                                Normal
                            </div>
                            <div className="k-icon-text-wrapper k-selected">
                                <div className="k-icon-background-area">
                                    <Icon icon="chart-bar-stacked" size="xlarge" />
                                </div>
                                Selected
                            </div>
                        </div>
                    </ExpansionPanel>
                </div>
            </section>
        </div>
    </>
);
