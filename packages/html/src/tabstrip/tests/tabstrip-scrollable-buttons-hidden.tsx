import { TabStripContent, TabStripScrollableButtonsHidden, TabStripLeftScrollableButtonsHidden } from '..';

const style = ``;


export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Horizontal orientation</span>
            <span></span>
            <span></span>
             <section>
                <TabStripScrollableButtonsHidden>
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll Start</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>

            <section>
                <TabStripScrollableButtonsHidden scrollingPosition="end">
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll End</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>


            <section>
                <TabStripScrollableButtonsHidden scrollingPosition={null}>
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll Both</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>

            <span>Vertical orientation</span>
            <span></span>
            <span></span>
            <section>
                <TabStripLeftScrollableButtonsHidden>
                    <TabStripContent active>
                        <div>Vertical - Scrollable - No Buttons Scroll Start</div>
                    </TabStripContent>
                </TabStripLeftScrollableButtonsHidden>
            </section>

            <section>
                <TabStripLeftScrollableButtonsHidden scrollingPosition="end">
                    <TabStripContent active>
                        <div>Vertical - Scrollable - No Buttons Scroll End</div>
                    </TabStripContent>
                </TabStripLeftScrollableButtonsHidden>
            </section>


            <section>
                <TabStripLeftScrollableButtonsHidden scrollingPosition={null}>
                    <TabStripContent active>
                        <div>Vertical - Scrollable - No Buttons Scroll both</div>
                    </TabStripContent>
                </TabStripLeftScrollableButtonsHidden>
            </section>

            <span>Horizontal orientation - RTL</span>
            <span></span>
            <span></span>

            <section>
                <TabStripScrollableButtonsHidden dir="rtl">
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll Start</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>

            <section>
                <TabStripScrollableButtonsHidden scrollingPosition="end" dir="rtl">
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll End</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>


            <section>
                <TabStripScrollableButtonsHidden scrollingPosition={null} dir="rtl">
                    <TabStripContent active>
                        <div>Horizontal - Scrollable - No Buttons Scroll Both</div>
                    </TabStripContent>
                </TabStripScrollableButtonsHidden>
            </section>

        </div>
    </>
);
