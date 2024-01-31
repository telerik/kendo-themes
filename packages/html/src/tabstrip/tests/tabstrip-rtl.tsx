import { Button } from '../../button';
import { TabStrip, TabStripContent, TabStripItem, TabStripItems, TabStripItemsWrapper } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStrip dir="rtl">
                    <TabStripItemsWrapper>
                        <TabStripItems>
                            <TabStripItem first active value="Active" />
                            <TabStripItem value="Normal" />
                            <TabStripItem hover value="Hover" />
                            <TabStripItem dragging value="Dragging" />
                            <TabStripItem last disabled value="Disabled" />
                        </TabStripItems>
                    </TabStripItemsWrapper>
                    <TabStripContent active>
                        <div className="k-tabstrip-wrapper">
                            <TabStrip position="left" dir="rtl">
                                <TabStripItemsWrapper orientation="vertical">
                                    <TabStripItems>
                                        <TabStripItem first className="k-tab-on-top" active value="Inner Tab 1" />
                                        <TabStripItem last value="Inner Tab 2" />
                                    </TabStripItems>
                                </TabStripItemsWrapper>
                                <TabStripContent style={{ display: "block", marginLeft: "128px", minHeight: "68px" }}>
                                    Left orientation inside Top orientation
                                </TabStripContent>
                            </TabStrip>
                        </div>
                    </TabStripContent>
                </TabStrip>
            </section>

            <section>
                <TabStrip position="bottom" dir="rtl">
                    <TabStripContent active>
                        <div>Bottom orientation</div>
                    </TabStripContent>
                    <TabStripItemsWrapper orientation="horizontal">
                        <TabStripItems>
                            <TabStripItem first active value="Active" />
                            <TabStripItem value="Normal" />
                            <TabStripItem hover value="Hover" />
                            <TabStripItem dragging value="Dragging" />
                            <TabStripItem last disabled value="Disabled" />
                        </TabStripItems>
                    </TabStripItemsWrapper>
                </TabStrip>
            </section>

            <section>
                <TabStrip position="left" dir="rtl">
                    <TabStripItemsWrapper orientation="vertical">
                        <TabStripItems>
                            <TabStripItem first active value="Active" />
                            <TabStripItem value="Normal" />
                            <TabStripItem hover value="Hover" />
                            <TabStripItem focus value="Focused" />
                            <TabStripItem value="Closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
                            <TabStripItem dragging value="Dragging" />
                            <TabStripItem last disabled value="Disabled" />
                        </TabStripItems>
                    </TabStripItemsWrapper>
                    <TabStripContent active>
                        <div>Left orientation</div>
                    </TabStripContent>
                </TabStrip>
            </section>

            <section>
                <TabStrip position="right" dir="rtl">
                    <TabStripItemsWrapper orientation="vertical">
                        <TabStripItems>
                            <TabStripItem first active value="Active" />
                            <TabStripItem value="Normal" />
                            <TabStripItem hover value="Hover" />
                            <TabStripItem focus value="Focused" />
                            <TabStripItem value="Closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
                            <TabStripItem dragging value="Dragging" />
                            <TabStripItem last disabled value="Disabled" />
                        </TabStripItems>
                    </TabStripItemsWrapper>
                    <TabStripContent active>
                        <div>Right orientation</div>
                    </TabStripContent>
                </TabStrip>
            </section>
        </div>
    </>
);
