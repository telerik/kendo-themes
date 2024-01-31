import { Button } from '../../button';
import { TabStrip, TabStripContent, TabStripItem, TabStripItems, TabStripItemsWrapper } from '..';


const style = `
    /*
        This simulates the element "scroll" (scrollLeft, scrollTop, scrollBy) property
    */
    .k-tabstrip-scrollable .k-hstack .k-tabstrip-items .k-item:first-child {
        margin-left: -30px;
    }
    .k-tabstrip-scrollable .k-vstack .k-tabstrip-items .k-item:first-child {
        margin-top: -34px;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStrip scrollable>
                    <TabStripItemsWrapper orientation="horizontal">
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-left" className="k-tabstrip-prev"></Button>
                        <TabStripItems>
                            <TabStripItem first active value="First" />
                            <TabStripItem value="Closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
                            <TabStripItem last focus value="Focused" />
                        </TabStripItems>
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-right" className="k-tabstrip-next"></Button>
                    </TabStripItemsWrapper>
                    <TabStripContent active focus>
                        <div>Top scrollable</div>
                    </TabStripContent>
                </TabStrip>
            </section>

            <section>
                <TabStrip scrollable position="bottom">
                    <TabStripContent active>
                        <div>Bottom scrollable</div>
                    </TabStripContent>
                    <TabStripItemsWrapper orientation="horizontal">
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-left" className="k-tabstrip-prev"></Button>
                        <TabStripItems>
                            <TabStripItem first active value="First" />
                            <TabStripItem value="Closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
                            <TabStripItem last focus value="Focused" />
                        </TabStripItems>
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-right" className="k-tabstrip-next"></Button>
                    </TabStripItemsWrapper>
                </TabStrip>
            </section>

            <section>
                <TabStrip scrollable position="left">
                    <TabStripItemsWrapper orientation="vertical">
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-up" className="k-tabstrip-prev"></Button>
                        <TabStripItems>
                            <TabStripItem first active value="Active" />
                            <TabStripItem value="Normal" />
                            <TabStripItem hover value="Hover" />
                            <TabStripItem focus value="Focused" />
                            <TabStripItem value="Closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
                            <TabStripItem last disabled value="Disabled" />
                        </TabStripItems>
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-down" className="k-tabstrip-next"></Button>
                    </TabStripItemsWrapper>
                    <TabStripContent active>
                        <div>Scrollable Left orientation</div>
                    </TabStripContent>
                </TabStrip>
            </section>

            <section>
                <TabStrip scrollable position="right">
                    <TabStripItemsWrapper orientation="vertical">
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-up" className="k-tabstrip-prev"></Button>
                        <TabStripItems>
                            <TabStripItem first active value="Active" />
                            <TabStripItem value="Normal" />
                            <TabStripItem hover value="Hover" />
                            <TabStripItem focus value="Focused" />
                            <TabStripItem value="Closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
                            <TabStripItem last disabled value="Disabled" />
                        </TabStripItems>
                        <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-down" className="k-tabstrip-next"></Button>
                    </TabStripItemsWrapper>
                    <TabStripContent active>
                        <div>Scrollable Right orientation</div>
                    </TabStripContent>
                </TabStrip>
            </section>
        </div>
    </>
);
