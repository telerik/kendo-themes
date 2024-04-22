import { TabStripContent, TabStripItem, TabStripNormal } from '..';
import { Button } from '../..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStripNormal
                    tabStripItems={
                        <>
                            {TabStripItem.states.map((state) => (
                                <TabStripItem value={state} {...{ [state]: true }} />
                            ))}
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>item states</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal
                    tabStripItems={
                        <>
                            <TabStripItem first active value="closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
                            <TabStripItem last value="closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>closable items</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal
                    tabStripItems={
                        <>
                            <TabStripItem first active focus value="focus active" />
                            <TabStripItem last value="normal" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>focus active item</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal
                    dir="rtl"
                    tabStripItems={
                        <>
                            <TabStripItem first active value="closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
                            <TabStripItem last value="closable">
                                <Button fillMode="flat" icon="x" className="k-remove-tab"></Button>
                            </TabStripItem>
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>closable items rtl</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <TabStripNormal>
                <TabStripContent active focus>
                    <div>focus content</div>
                </TabStripContent>
            </TabStripNormal>
        </div>
    </>
);
