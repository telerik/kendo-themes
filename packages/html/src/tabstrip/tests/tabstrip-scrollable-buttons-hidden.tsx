import { TabStripContent, TabStripItem, TabStripLeft, TabStripNormal } from '..';


const style = ``;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Horizontal orientation</span>
            <span></span>
            <span></span>
             <section>
                <TabStripNormal scrollable scrollButtonsPosition="hidden" scrollingPosition="start"
                    tabStripItems={
                        <>
                            <TabStripItem first active value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem value="Sixth" />
                            <TabStripItem last value="Last Very Long item" />
                        </>
                    }>
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll Start</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal scrollable scrollButtonsPosition="hidden" scrollingPosition="end"
                    tabStripItems={
                        <>
                            <TabStripItem first active value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem last value="Last" />
                        </>
                    }>
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll End</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>


            <section>
                <TabStripNormal scrollable scrollButtonsPosition="hidden"
                    tabStripItems={
                        <>
                            <TabStripItem first active value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem value="Sixth" />
                            <TabStripItem last value="Last Very Long item" />
                        </>
                    }>
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll Both</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <span>Vertical orientation</span>
            <span></span>
            <span></span>
            <section>
                <TabStripLeft scrollable scrollButtonsPosition="hidden" scrollingPosition="start">
                    <TabStripContent active>
                        <div>Vertical - Scrollable - No Buttons Scroll Start</div>
                    </TabStripContent>
                </TabStripLeft>
            </section>



            <section>
                <TabStripLeft scrollable scrollButtonsPosition="hidden" scrollingPosition="end">
                    <TabStripContent active>
                        <div>Vertical - Scrollable - No Buttons Scroll End</div>
                    </TabStripContent>
                </TabStripLeft>
            </section>


            <section>
                <TabStripLeft scrollable scrollButtonsPosition="hidden">
                    <TabStripContent active>
                        <div>Vertical - Scrollable - No Buttons Scroll both</div>
                    </TabStripContent>
                </TabStripLeft>
            </section>

            <span>Horizontal orientation - RTL</span>
            <span></span>
            <span></span>
            <section>
                <TabStripNormal scrollable scrollButtonsPosition="hidden" scrollingPosition="start" dir="rtl"
                    tabStripItems={
                        <>
                            <TabStripItem first active value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem value="Sixth" />
                            <TabStripItem last value="Last Very Long item" />
                        </>
                    }>
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll Start</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal scrollable scrollButtonsPosition="hidden" scrollingPosition="end" dir="rtl"
                    tabStripItems={
                        <>
                            <TabStripItem first active value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem last value="Last" />
                        </>
                    }>
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll End</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>


            <section>
                <TabStripNormal scrollable scrollButtonsPosition="hidden" dir="rtl"
                    tabStripItems={
                        <>
                            <TabStripItem first active value="First" />
                            <TabStripItem value="Second" />
                            <TabStripItem value="Third" />
                            <TabStripItem value="Fourth" />
                            <TabStripItem value="Fifth - last visible" />
                            <TabStripItem value="Sixth" />
                            <TabStripItem last value="Last Very Long item" />
                        </>
                    }>
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll Both</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

        </div>
    </>
);
