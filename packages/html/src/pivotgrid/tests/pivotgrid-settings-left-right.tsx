import { PivotGridWithConfiguratorOpened } from '../templates/pivotgrid-with-configurator-opened';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <PivotGridWithConfiguratorOpened configuratorPosition="left" />
            </section>

            <section>
                <PivotGridWithConfiguratorOpened />
            </section>
        </div>
    </>
);
