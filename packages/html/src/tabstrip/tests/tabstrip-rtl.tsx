import { TabStripBottom, TabStripContent, TabStripItem, TabStripLeft, TabStripNormal, TabStripRight } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStripNormal dir="rtl">
                    <TabStripContent active>
                        <div className="k-tabstrip-wrapper">
                            <TabStripLeft dir="rtl"
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
                <TabStripBottom dir="rtl">
                    <TabStripContent active>
                        <div>Bottom orientation</div>
                    </TabStripContent>
                </TabStripBottom>
            </section>

            <section>
                <TabStripLeft dir="rtl">
                    <TabStripContent active>
                        <div>Left orientation</div>
                    </TabStripContent>
                </TabStripLeft>
            </section>

            <section>
                <TabStripRight dir="rtl">
                    <TabStripContent active>
                        <div>Right orientation</div>
                    </TabStripContent>
                </TabStripRight>
            </section>
        </div>
    </>
);
