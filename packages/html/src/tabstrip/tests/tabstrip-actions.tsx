import { TabStripContent, TabStripItem, TabStripNormal } from '..';
import { Button } from '../../button';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <TabStripNormal
                  tabStripItems={
                    <>
                      <TabStripItem first value="One Action" actions={<Button fillMode="flat" icon="pin"></Button>}/>
                      <TabStripItem active value="Two Actions" actions={
                        <>
                          <Button fillMode="flat" icon="pin"></Button>
                          <Button fillMode="flat" icon="more-vertical"></Button>
                        </>}/>
                        <TabStripItem last value="Action and Close" closable actions={<Button fillMode="flat" icon="pin"></Button>}/>
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
