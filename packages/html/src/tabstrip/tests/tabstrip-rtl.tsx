import { TabStripBottom, TabStripContent, TabStripItem, TabStripLeft, TabStripNormal, TabStripRight } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStripNormal dir="rtl">
                    <TabStripContent active id="tabpanel-2" aria-labelledby="tab-2">
                        <div className="k-tabstrip-wrapper">
                            <TabStripLeft dir="rtl"
                                tabStripItems={
                                    <>
                                        <TabStripItem first active value="Inner First" id="tab-inner-rtl-1" aria-controls="tabpanel-inner-rtl-1" />
                                        <TabStripItem last value="Inner Second" id="tab-inner-rtl-2" />
                                    </>
                                }>
                                <TabStripContent style={{ display: "block", marginLeft: "128px", minHeight: "68px" }} id="tabpanel-inner-rtl-1" aria-labelledby="tab-inner-rtl-1">
                                    Left orientation inside Top orientation
                                </TabStripContent>
                            </TabStripLeft>
                        </div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripBottom dir="rtl">
                    <TabStripContent active id="tabpanel-bottom-2" aria-labelledby="tab-bottom-2">
                        <div>Bottom orientation</div>
                    </TabStripContent>
                </TabStripBottom>
            </section>

            <section>
                <TabStripLeft dir="rtl">
                    <TabStripContent active id="tabpanel-left-2" aria-labelledby="tab-left-2">
                        <div>Left orientation</div>
                    </TabStripContent>
                </TabStripLeft>
            </section>

            <section>
                <TabStripRight dir="rtl">
                    <TabStripContent active id="tabpanel-right-2" aria-labelledby="tab-right-2">
                        <div>Right orientation</div>
                    </TabStripContent>
                </TabStripRight>
            </section>
        </div>
    </>
);
