import { TabStrip, TabStripClosable, TabStripContent, TabStripItem } from '..';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section>
                <TabStripClosable />
            </section>

            <section>
                <TabStrip
                    position="bottom"
                    tabStripItems={
                        <>
                            <TabStripItem first closable value="First" id="tab-closable-bottom-1" />
                            <TabStripItem active closable value="Second" id="tab-closable-bottom-2" aria-controls="tabpanel-closable-bottom-2" />
                            <TabStripItem closable value="Third" id="tab-closable-bottom-3" />
                        </>
                    }
                >
                    <TabStripContent active id="tabpanel-closable-bottom-2" aria-labelledby="tab-closable-bottom-2">
                        <div>Closable items</div>
                    </TabStripContent>
                </TabStrip>
            </section>

            <section>
                <TabStrip
                    position="left"
                    tabStripItems={
                        <>
                            <TabStripItem first closable value="First" id="tab-closable-left-1" />
                            <TabStripItem active closable value="Second" id="tab-closable-left-2" aria-controls="tabpanel-closable-left-2" />
                            <TabStripItem closable value="Third" id="tab-closable-left-3" />
                        </>
                    }
                >
                    <TabStripContent active id="tabpanel-closable-left-2" aria-labelledby="tab-closable-left-2">
                        <div>Closable items</div>
                    </TabStripContent>
                </TabStrip>
            </section>

            <section>
                <TabStrip
                    position="right"
                    tabStripItems={
                        <>
                            <TabStripItem first closable value="First" id="tab-closable-right-1" />
                            <TabStripItem active closable value="Second" id="tab-closable-right-2" aria-controls="tabpanel-closable-right-2" />
                            <TabStripItem closable value="Third" id="tab-closable-right-3" />
                        </>
                    }
                >
                    <TabStripContent active id="tabpanel-closable-right-2" aria-labelledby="tab-closable-right-2">
                        <div>Closable items</div>
                    </TabStripContent>
                </TabStrip>
            </section>

        </div>
    </>
);
