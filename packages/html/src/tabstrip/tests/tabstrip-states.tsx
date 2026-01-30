import { TabStripClosable, TabStripContent, TabStripItem, TabStripNormal } from '..';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStripNormal
                    tabStripItems={
                        <>
                            {TabStripItem.states.map((state, i) => (
                                <TabStripItem value={state} {...{ [state]: true }} key={i} id={`tab-state-${i}`} />
                            ))}
                        </>
                    }
                >
                    <TabStripContent active id="tabpanel-state-1" aria-labelledby="tab-state-1">
                        <div>item states</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripClosable />
            </section>

            <section>
                <TabStripNormal
                    tabStripItems={
                        <>
                            <TabStripItem first active hover value="hover active" id="tab-combostate-1" aria-controls="tabpanel-combostate-1" />
                            <TabStripItem value="normal" id="tab-combostate-2" />
                            <TabStripItem last active focus value="focus active" id="tab-combostate-3" />
                        </>
                    }
                >
                    <TabStripContent active id="tabpanel-combostate-1" aria-labelledby="tab-combostate-1">
                        <div>active item states</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripClosable dir="rtl" />
            </section>

            <TabStripNormal>
                <TabStripContent active focus id="tabpanel-2" aria-labelledby="tab-2">
                    <div>focus content</div>
                </TabStripContent>
            </TabStripNormal>
        </div>
    </>
);
