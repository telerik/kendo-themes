import { TabStripContent, TabStripItem, TabStripNormal } from '..';
import { Icon } from "../../icon";


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <TabStripNormal
                  tabStripItems={
                    <>
                      <TabStripItem first value="One Action" actions={<span className="k-link-action" title="Pin tab"><Icon icon="pin" /></span>} id="tab-action-1" />
                      <TabStripItem active value="Two Actions" actions={
                        <>
                          <span className="k-link-action" title="Pin tab"><Icon icon="pin" /></span>
                          <span className="k-link-action" title="More options"><Icon icon="more-vertical" /></span>
                        </>} id="tab-action-2" aria-controls="tabpanel-action-2" />
                        <TabStripItem last value="Action and Close" closable actions={<span className="k-link-action" title="Pin tab"><Icon icon="pin" /></span>} id="tab-action-3" />
                    </>
                }
                >
                    <TabStripContent active id="tabpanel-action-2" aria-labelledby="tab-action-2">
                      <div>Tab Actions</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>
        </div>
    </>
);
