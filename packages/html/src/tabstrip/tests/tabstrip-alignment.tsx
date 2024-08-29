import { TabStripContent, TabStripNormal } from '..';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStripNormal tabAlignment="start">
                    <TabStripContent active>
                      <div>Start Alignment</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal tabAlignment="center">
                    <TabStripContent active>
                      <div>Center Alignment</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal tabAlignment="end">
                    <TabStripContent active>
                      <div>End Alignment</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal tabAlignment="stretched">
                    <TabStripContent active>
                      <div>Stretched Alignment</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal tabAlignment="justify">
                    <TabStripContent active>
                      <div>Justified Alignment</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>
        </div>
    </>
);
