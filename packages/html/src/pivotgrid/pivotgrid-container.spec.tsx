import { classNames, variantClassNames } from '../misc';
import { KendoComponent } from '../_types/component';
import { PIVOTGRID_FOLDER_NAME, PIVOTGRID_MODULE_NAME } from './constants';

export const PIVOTGRIDCONTAINER_CLASSNAME = `k-pivotgrid-container`;

const PIVOTGRIDCONTAINER_VARIANTS = [
    "pivotgrid-container-left",
    "pivotgrid-container-bottom",
    "pivotgrid-container-right",
    "pivotgrid-container-top"
] as const;

const states = [];

const options = {};

export type KendoPivotGridContainerProps = {
    position?: "left" | "bottom" | "right" | "top";
};

const defaultOptions = {
    position: "right"
};

/**
 * Groups the PivotGrid with its configurator panel and configurator button,
 * so they share a single outer border and border radius.
 */
export const PivotGridContainer: KendoComponent<KendoPivotGridContainerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoPivotGridContainerProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        position = defaultOptions.position,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PIVOTGRIDCONTAINER_CLASSNAME,
                variantClassNames(PIVOTGRIDCONTAINER_CLASSNAME, `pivotgrid-container-${position}`)
            )}>
            {props.children}
        </div>
    );
};

PivotGridContainer.states = states;
PivotGridContainer.options = options;
PivotGridContainer.className = PIVOTGRIDCONTAINER_CLASSNAME;
PivotGridContainer.variants = PIVOTGRIDCONTAINER_VARIANTS;
PivotGridContainer.moduleName = PIVOTGRID_MODULE_NAME;
PivotGridContainer.folderName = PIVOTGRID_FOLDER_NAME;
PivotGridContainer.defaultOptions = defaultOptions;

export default PivotGridContainer;
