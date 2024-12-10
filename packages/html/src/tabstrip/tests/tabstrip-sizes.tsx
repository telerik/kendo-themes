import { TabStripContent, TabStripNormal, TabStripItem } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <section>
                <span>Small</span>
                <TabStripNormal scrollable size="small"
                    tabStripItems={
                        <>
                            <TabStripItem first active value="First" />
                            <TabStripItem last value="Last" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Tab Content</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <span>Medium</span>
                <TabStripNormal scrollable size="medium"
                    tabStripItems={
                        <>
                            <TabStripItem first active value="First" />
                            <TabStripItem last value="Last" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Tab Content</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <span>Large</span>
                <TabStripNormal scrollable size="large"
                    tabStripItems={
                        <>
                            <TabStripItem first active value="First" />
                            <TabStripItem last value="Last" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Tab Content</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>
        </div>
    </>
);
