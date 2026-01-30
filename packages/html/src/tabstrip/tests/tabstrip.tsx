import { TabStripBottom, TabStripContent, TabStripItem, TabStripLeft, TabStripNormal, TabStripRight } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStripNormal>
                    <TabStripContent active id="tabpanel-2" aria-labelledby="tab-2">
                        <div className="k-tabstrip-wrapper">
                            <TabStripLeft
                                tabStripItems={
                                    <>
                                        <TabStripItem first active value="Inner First" id="tab-inner-1" aria-controls="tabpanel-inner-1" />
                                        <TabStripItem last value="Inner Second" id="tab-inner-2" />
                                    </>
                                }>
                                <TabStripContent style={{ display: "block", marginLeft: "128px", minHeight: "68px" }} id="tabpanel-inner-1" aria-labelledby="tab-inner-1">
                                    Left orientation inside Top orientation
                                </TabStripContent>
                            </TabStripLeft>
                        </div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripBottom>
                    <TabStripContent active id="tabpanel-2" aria-labelledby="tab-2">
                        <div>Bottom orientation</div>
                    </TabStripContent>
                </TabStripBottom>
            </section>

            <section>
                <TabStripLeft>
                    <TabStripContent active id="tabpanel-2" aria-labelledby="tab-2">
                        <div>Left orientation</div>
                    </TabStripContent>
                </TabStripLeft>
            </section>

            <section>
                <TabStripRight>
                    <TabStripContent active id="tabpanel-2" aria-labelledby="tab-2">
                        <div>Right orientation</div>
                    </TabStripContent>
                </TabStripRight>
            </section>
        </div>
    </>
);
