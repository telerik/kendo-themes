import { PivotGridConfiguratorButton, PivotGridNormal } from "..";

export const PivotGridWithConfigurator = (props) => (
    <>
        <PivotGridNormal {...props} />
        <PivotGridConfiguratorButton />
    </>
);
