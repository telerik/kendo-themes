import { Button } from '../../button';
import { TabStrip, TabStripContent, TabStripItem, TabStripItems, TabStripItemsWrapper } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStrip>
                    <TabStripItemsWrapper orientation="horizontal">
                        <TabStripItems>
                            <TabStripItem first active dragging value="First" />
                            <TabStripItem value="Closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
                            <TabStripItem last focus value="Focused" />
                        </TabStripItems>
                    </TabStripItemsWrapper>
                    <TabStripContent active focus>
                        <div>Top sortable</div>
                    </TabStripContent>
                </TabStrip>
            </section>

            <section>
                <TabStrip position="bottom">
                    <TabStripContent active>
                        <div>Bottom sortable</div>
                    </TabStripContent>
                    <TabStripItemsWrapper orientation="horizontal">
                        <TabStripItems>
                            <TabStripItem first active dragging value="First" />
                            <TabStripItem value="Closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
                            <TabStripItem last focus value="Focused" />
                        </TabStripItems>
                    </TabStripItemsWrapper>
                </TabStrip>
            </section>

            <section>
                <TabStrip position="left">
                    <TabStripItemsWrapper orientation="vertical">
                        <TabStripItems>
                            <TabStripItem first active dragging value="Active" />
                            <TabStripItem value="Normal" />
                            <TabStripItem hover value="Hover" />
                            <TabStripItem focus value="Focused" />
                            <TabStripItem value="Closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
                            <TabStripItem last disabled value="Disabled" />
                        </TabStripItems>
                    </TabStripItemsWrapper>
                    <TabStripContent active>
                        <div>Left orientation</div>
                    </TabStripContent>
                </TabStrip>
            </section>

            <section>
                <TabStrip position="right">
                    <TabStripItemsWrapper orientation="vertical">
                        <TabStripItems>
                            <TabStripItem first active dragging value="Active" />
                            <TabStripItem value="Normal" />
                            <TabStripItem hover value="Hover" />
                            <TabStripItem focus value="Focused" />
                            <TabStripItem value="Closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
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
