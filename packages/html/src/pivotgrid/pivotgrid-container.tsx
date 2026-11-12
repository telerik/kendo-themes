import { classNames, variantClassNames } from '../misc';

export const PIVOTGRIDCONTAINER_CLASSNAME = `k-pivotgrid-container`;

export const PIVOTGRIDCONTAINER_VARIANTS = [
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
export const PivotGridContainer = (
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
PivotGridContainer.moduleName = null;
PivotGridContainer.folderName = null;
PivotGridContainer.defaultOptions = defaultOptions;

export default PivotGridContainer;
