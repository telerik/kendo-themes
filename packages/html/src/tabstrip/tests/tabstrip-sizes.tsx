import { TabStripContent, TabStripNormal, TabStripItem, TabStrip } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            {
                TabStrip.options.size.map((size) => (
                    <>
                        <div>
                            <span>{size}</span>
                            <TabStripNormal scrollable size={size}
                                tabStripItems={
                                    <>
                                        <TabStripItem first active value="First" />
                                        <TabStripItem last value="Last" />
                                    </>
                                }
                                >
                                <TabStripContent active>
                                    <div>Tab Content</div>
                                </TabStripContent>
                            </TabStripNormal>
                        </div>
                    </>
                ))
            }
        </div>
    </>
);
