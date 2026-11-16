import { PivotGridHorizontalSettings } from '..';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <section>
                <PivotGridHorizontalSettings configuratorPosition="top" />
            </section>

            <section>
                <PivotGridHorizontalSettings configuratorPosition="bottom" />
            </section>
        </div>
    </>
);
