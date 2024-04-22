import { TabStripBottom, TabStripContent, TabStripItem, TabStripLeft, TabStripNormal, TabStripRight } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStripNormal>
                    <TabStripContent active>
                        <div className="k-tabstrip-wrapper">
                            <TabStripLeft
                                tabStripItems={
                                    <>
                                        <TabStripItem first className="k-tab-on-top" active value="Inner First" />
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
                <TabStripBottom>
                    <TabStripContent active>
                        <div>Bottom orientation</div>
                    </TabStripContent>
                </TabStripBottom>
            </section>

            <section>
                <TabStripLeft>
                    <TabStripContent active>
                        <div>Left orientation</div>
                    </TabStripContent>
                </TabStripLeft>
            </section>

            <section>
                <TabStripRight>
                    <TabStripContent active>
                        <div>Right orientation</div>
                    </TabStripContent>
                </TabStripRight>
            </section>
        </div>
    </>
);
