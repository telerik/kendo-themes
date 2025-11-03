import { TabStripBottom, TabStripContent, TabStripLeft, TabStripNormal, TabStripRight } from '..';


const style = `
    /*
        This simulates the element "scroll" (scrollLeft, scrollTop, scrollBy) property
    */
    .k-tabstrip-scrollable .k-hstack .k-tabstrip-items .k-tabstrip-item:first-child {
        margin-left: -30px;
    }
    .k-tabstrip-scrollable .k-vstack .k-tabstrip-items .k-tabstrip-item:first-child {
        margin-top: -34px;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStripNormal scrollable scrollButtons="end">
                    <TabStripContent active>
                        <div>Top scrollable</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripBottom scrollable scrollButtons="end">
                    <TabStripContent active>
                        <div>Bottom scrollable</div>
                    </TabStripContent>
                </TabStripBottom>
            </section>

            <section>
                <TabStripLeft scrollable scrollButtons="end">
                    <TabStripContent active>
                        <div>Left scrollable</div>
                    </TabStripContent>
                </TabStripLeft>
            </section>

            <section>
                <TabStripRight scrollable scrollButtons="end">
                    <TabStripContent active>
                        <div>Right scrollable</div>
                    </TabStripContent>
                </TabStripRight>
            </section>

        </div>
    </>
);
