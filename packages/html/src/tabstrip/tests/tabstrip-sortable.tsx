import { TabStripBottom, TabStripContent, TabStripItem, TabStripLeft, TabStripNormal, TabStripRight } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStripNormal
                    tabStripItems={
                        <>
                            <TabStripItem first active dragging value="dragging" />
                            <TabStripItem last value="normal" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Top sortable</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripBottom
                    tabStripItems={
                        <>
                            <TabStripItem first active dragging value="dragging" />
                            <TabStripItem last value="normal" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Bottom sortable</div>
                    </TabStripContent>
                </TabStripBottom>
            </section>

            <section>
                <TabStripLeft
                    tabStripItems={
                        <>
                            <TabStripItem first active dragging value="dragging" />
                            <TabStripItem last value="normal" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Left sortable</div>
                    </TabStripContent>
                </TabStripLeft>
            </section>

            <section>
                <TabStripRight
                    tabStripItems={
                        <>
                            <TabStripItem first active dragging value="dragging" />
                            <TabStripItem last value="normal" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Right sortable</div>
                    </TabStripContent>
                </TabStripRight>
            </section>

        </div>
    </>
);
