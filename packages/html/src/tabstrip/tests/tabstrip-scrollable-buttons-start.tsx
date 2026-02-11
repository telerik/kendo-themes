import { TabStripBottom } from '../templates/tabstrip-bottom';
import { TabStripContent } from '../tabstrip-content';
import { TabStripLeft } from '../templates/tabstrip-left';
import { TabStripNormal } from '../templates/tabstrip-normal';
import { TabStripRight } from '../templates/tabstrip-right';


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
                <TabStripNormal scrollable scrollButtons="start">
                    <TabStripContent active>
                        <div>Top scrollable</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripBottom scrollable scrollButtons="start">
                    <TabStripContent active>
                        <div>Bottom scrollable</div>
                    </TabStripContent>
                </TabStripBottom>
            </section>

            <section>
                <TabStripLeft scrollable scrollButtons="start">
                    <TabStripContent active>
                        <div>Left scrollable</div>
                    </TabStripContent>
                </TabStripLeft>
            </section>

            <section>
                <TabStripRight scrollable scrollButtons="start">
                    <TabStripContent active>
                        <div>Right scrollable</div>
                    </TabStripContent>
                </TabStripRight>
            </section>

        </div>
    </>
);
