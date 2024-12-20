import { TabStripContent, TabStripItem, TabStripScrollableButtonsHidden } from '..';

const style = ``;


export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Horizontal orientation</span>
            <span></span>
            <span></span>
            <section>
                <TabStripScrollableButtonsHidden
                    tabStripItems={
                        <>
                            <TabStripItem first value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem active value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem value="Sixth" />
                            <TabStripItem last value="Last Very Long item" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll Start</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>

            <section>
                <TabStripScrollableButtonsHidden scrollingPosition="end"
                    tabStripItems={
                        <>
                            <TabStripItem first value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem active value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem value="Sixth" />
                            <TabStripItem last value="Last Very Long item" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll End</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>


            <section>
                <TabStripScrollableButtonsHidden scrollingPosition={null}
                    tabStripItems={
                        <>
                            <TabStripItem first value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem active value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem value="Sixth" />
                            <TabStripItem last value="Last Very Long item" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll Both</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>

            <span>Vertical orientation</span>
            <span></span>
            <span></span>
            <section>
                <TabStripScrollableButtonsHidden position="left"
                    tabStripItems={
                        <>
                            <TabStripItem first value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem active value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem value="Sixth" />
                            <TabStripItem last value="Last Very Long item" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Vertical - Scrollable - No Buttons Scroll Start</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>

            <section>
                <TabStripScrollableButtonsHidden position="left" scrollingPosition="end"
                    tabStripItems={
                        <>
                            <TabStripItem first value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem active value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem value="Sixth" />
                            <TabStripItem last value="Last Very Long item" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Vertical - Scrollable - No Buttons Scroll End</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>


            <section>
                <TabStripScrollableButtonsHidden position="left" scrollingPosition={null}
                    tabStripItems={
                        <>
                            <TabStripItem first value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem active value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem value="Sixth" />
                            <TabStripItem last value="Last Very Long item" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Vertical - Scrollable - No Buttons Scroll both</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>

            <span>Horizontal orientation - RTL</span>
            <span></span>
            <span></span>

            <section>
                <TabStripScrollableButtonsHidden dir="rtl"
                    tabStripItems={
                        <>
                            <TabStripItem first value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem active value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem value="Sixth" />
                            <TabStripItem last value="Last Very Long item" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll Start</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>

            <section>
                <TabStripScrollableButtonsHidden scrollingPosition="end" dir="rtl"
                    tabStripItems={
                        <>
                            <TabStripItem first value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem active value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem value="Sixth" />
                            <TabStripItem last value="Last Very Long item" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll End</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>


            <section>
                <TabStripScrollableButtonsHidden scrollingPosition={null} dir="rtl"
                    tabStripItems={
                        <>
                            <TabStripItem first value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem active value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem value="Sixth" />
                            <TabStripItem last value="Last Very Long item" />
                        </>
                    }
                >
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll Both</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>

        </div>
    </>
);
