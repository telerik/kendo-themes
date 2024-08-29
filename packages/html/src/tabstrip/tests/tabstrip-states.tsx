import { TabStripClosable, TabStripContent, TabStripItem, TabStripNormal } from '..';

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
                <TabStripClosable />
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
                <TabStripClosable dir="rtl" />
            </section>

            <TabStripNormal>
                <TabStripContent active focus>
                    <div>focus content</div>
                </TabStripContent>
            </TabStripNormal>
        </div>
    </>
);
