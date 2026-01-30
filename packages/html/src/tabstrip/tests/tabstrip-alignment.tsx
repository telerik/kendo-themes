import { TabStripContent, TabStripNormal } from '..';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <TabStripNormal tabAlignment="start">
                    <TabStripContent active id="tabpanel-2" aria-labelledby="tab-2">
                      <div>Start Alignment</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal tabAlignment="center">
                    <TabStripContent active id="tabpanel-center-2" aria-labelledby="tab-center-2">
                      <div>Center Alignment</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal tabAlignment="end">
                    <TabStripContent active id="tabpanel-end-2" aria-labelledby="tab-end-2">
                      <div>End Alignment</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal tabAlignment="stretched">
                    <TabStripContent active id="tabpanel-stretched-2" aria-labelledby="tab-stretched-2">
                      <div>Stretched Alignment</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>

            <section>
                <TabStripNormal tabAlignment="justify">
                    <TabStripContent active id="tabpanel-justify-2" aria-labelledby="tab-justify-2">
                      <div>Justified Alignment</div>
                    </TabStripContent>
                </TabStripNormal>
            </section>
        </div>
    </>
);
