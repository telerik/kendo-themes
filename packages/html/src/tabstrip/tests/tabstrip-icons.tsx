import { TabStripContent, TabStripItem, TabStripNormal } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStripNormal
                  tabStripItems={
                    <>
                        <TabStripItem first value="First" icon="star"/>
                        <TabStripItem active value="Second" icon="star"/>
                        <TabStripItem value="Third" icon="star"/>
                        <TabStripItem last value="Fourth" icon="star"/>
                    </>
                }
                >
                    <TabStripContent active>
                      <div>Icons with text</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal
                  tabStripItems={
                    <>
                        <TabStripItem first value="First" icon="star" iconPosition="after"/>
                        <TabStripItem active value="Second" icon="star" iconPosition="after"/>
                        <TabStripItem value="Third" icon="star" iconPosition="after"/>
                        <TabStripItem last value="Fourth" icon="star" iconPosition="after"/>
                    </>
                  }
                >
                    <TabStripContent active>
                      <div>Text with icons</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>
        </div>
    </>
);
