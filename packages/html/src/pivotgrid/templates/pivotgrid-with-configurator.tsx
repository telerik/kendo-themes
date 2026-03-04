import { PivotGridConfigurator, PivotGridNormal } from "..";

export const PivotGridWithConfigurator = (props) => (
    <PivotGridNormal
        configurator={<PivotGridConfigurator />}
        configuratorDisplay="closed"
        {...props}
    />
);
