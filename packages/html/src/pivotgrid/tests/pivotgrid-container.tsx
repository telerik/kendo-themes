import {
    PivotGridConfigurator,
    PivotGridConfiguratorButton,
    PivotGridContainer,
    PivotGridNormal
} from '..';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <h3>PivotGrid without a container</h3>
                <PivotGridNormal />
            </section>

            <section>
                <h3>Configurator and button after the PivotGrid (end)</h3>
                <PivotGridContainer>
                    <PivotGridNormal />
                    <PivotGridConfigurator />
                    <PivotGridConfiguratorButton />
                </PivotGridContainer>
            </section>

            <section>
                <h3>Configurator and button before the PivotGrid (start)</h3>
                <PivotGridContainer>
                    <PivotGridConfiguratorButton />
                    <PivotGridConfigurator />
                    <PivotGridNormal />
                </PivotGridContainer>
            </section>

            <section>
                <h3>Button only, after the PivotGrid</h3>
                <PivotGridContainer>
                    <PivotGridNormal />
                    <PivotGridConfiguratorButton />
                </PivotGridContainer>
            </section>

            <section>
                <h3>Button only, before the PivotGrid, horizontal</h3>
                <PivotGridContainer orientation="horizontal">
                    <PivotGridConfiguratorButton />
                    <PivotGridNormal />
                </PivotGridContainer>
            </section>

            <section>
                <h3>Button only, after the PivotGrid, horizontal</h3>
                <PivotGridContainer orientation="horizontal">
                    <PivotGridNormal />
                    <PivotGridConfiguratorButton />
                </PivotGridContainer>
            </section>

            <section className="k-rtl">
                <h3>RTL: button after the PivotGrid</h3>
                <PivotGridContainer>
                    <PivotGridNormal />
                    <PivotGridConfiguratorButton />
                </PivotGridContainer>
            </section>

            <section className="k-rtl">
                <h3>RTL: button before the PivotGrid</h3>
                <PivotGridContainer>
                    <PivotGridConfiguratorButton />
                    <PivotGridNormal />
                </PivotGridContainer>
            </section>
        </div>
    </>
);
