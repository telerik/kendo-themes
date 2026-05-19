import { TabStripContent, TabStripItem, TabStripNormal } from '..';
import Button from "../../button/button.spec";


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <TabStripNormal
                  tabStripItems={
                    <>
                      <TabStripItem first value="One Action" actions={<Button fillMode="flat" icon="pin" size="xsmall"></Button>}/>
                      <TabStripItem active value="Two Actions" actions={
                        <>
                          <Button fillMode="flat" icon="pin" size="xsmall"></Button>
                          <Button fillMode="flat" icon="more-vertical" size="xsmall"></Button>
                        </>}/>
                        <TabStripItem last value="Action and Close" closable actions={<Button fillMode="flat" icon="pin" size="xsmall"></Button>}/>
                    </>
                }
                >
                    <TabStripContent active>
                      <div>Tab Actions</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>
        </div>
    </>
);
