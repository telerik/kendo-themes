import { TabStripContent, TabStripItem, TabStripLeft, TabStripNormal } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <section>
                <TabStripNormal size="small">
                    <TabStripContent active>
                        <div className="k-tabstrip-wrapper">
                            <TabStripLeft
                                tabStripItems={
                                    <>
                                        <TabStripItem first active value="Inner First" />
                                        <TabStripItem last value="Inner Second" />
                                    </>
                                }>
                                <TabStripContent style={{ display: "block", marginLeft: "128px", minHeight: "68px" }}>
                                    Left orientation inside Top orientation
                                </TabStripContent>
                            </TabStripLeft>
                        </div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal>
                    <TabStripContent active>
                        <div className="k-tabstrip-wrapper">
                            <TabStripLeft
                                tabStripItems={
                                    <>
                                        <TabStripItem first active value="Inner First" />
                                        <TabStripItem last value="Inner Second" />
                                    </>
                                }>
                                <TabStripContent style={{ display: "block", marginLeft: "128px", minHeight: "68px" }}>
                                    Left orientation inside Top orientation
                                </TabStripContent>
                            </TabStripLeft>
                        </div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal size="large">
                    <TabStripContent active>
                        <div className="k-tabstrip-wrapper">
                            <TabStripLeft
                                tabStripItems={
                                    <>
                                        <TabStripItem first active value="Inner First" />
                                        <TabStripItem last value="Inner Second" />
                                    </>
                                }>
                                <TabStripContent style={{ display: "block", marginLeft: "128px", minHeight: "68px" }}>
                                    Left orientation inside Top orientation
                                </TabStripContent>
                            </TabStripLeft>
                        </div>
                    </TabStripContent>
                </TabStripNormal>
            </section>
        </div>
    </>
);
