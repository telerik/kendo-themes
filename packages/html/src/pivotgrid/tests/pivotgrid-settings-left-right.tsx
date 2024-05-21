import { PivotGridWithConfiguratorOpened } from '../';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <div className="k-d-flex k-flex-row-reverse k-pos-relative">
                    <PivotGridWithConfiguratorOpened/>
                </div>
            </section>

            <section>
                <div className="k-d-flex k-flex-row k-pos-relative">
                    <PivotGridWithConfiguratorOpened/>
                </div>
            </section>
        </div>
    </>
);
