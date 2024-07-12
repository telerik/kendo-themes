import { TabStrip, TabStripItem, TabStripContent } from '../../tabstrip';
import { ExpansionPanel } from '../../expansion-panel';


const styles = `
    #test-area {
        max-width: 1040px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <div className="k-font-bold">Chart Tab</div>
            <div className="k-font-bold">Data Tab</div>
            <div className="k-font-bold">Format Tab</div>
            <section>
                <TabStrip
                    tabStripItems={
                        <>
                            <TabStripItem first value="Chart" active></TabStripItem>
                            <TabStripItem value="Data"></TabStripItem>
                            <TabStripItem last value="Format"></TabStripItem>
                        </>
                    }
                >
                    <TabStripContent active>
                        <ExpansionPanel title="Bar Chart" />
                        <ExpansionPanel title="Pie Chart" />
                        <ExpansionPanel title="Column Chart" />
                        <ExpansionPanel title="Line Chart" />
                        <ExpansionPanel title="Scatter Chart" />
                    </TabStripContent>
                </TabStrip>
            </section>
            <section>
                <TabStrip
                    tabStripItems={
                        <>
                            <TabStripItem first value="Chart"></TabStripItem>
                            <TabStripItem value="Data" active></TabStripItem>
                            <TabStripItem last value="Format"></TabStripItem>
                        </>
                    }
                >
                    <TabStripContent active>
                        <ExpansionPanel title="Configuration" />
                    </TabStripContent>
                </TabStrip>
            </section>
            <section>
                <TabStrip
                    tabStripItems={
                        <>
                            <TabStripItem first value="Chart"></TabStripItem>
                            <TabStripItem value="Data"></TabStripItem>
                            <TabStripItem last value="Format" active></TabStripItem>
                        </>
                    }
                >
                    <TabStripContent active>
                        <ExpansionPanel title="Chart area" />
                        <ExpansionPanel title="Title" />
                        <ExpansionPanel title="Series" />
                        <ExpansionPanel title="Legend" />
                        <ExpansionPanel title="Category axis" />
                        <ExpansionPanel title="Value axis" />
                    </TabStripContent>
                </TabStrip>
            </section>
        </div>
    </>
);
