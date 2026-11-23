import { classNames } from '../misc';
import { KendoComponent } from '../_types/component';
import { PIVOTGRID_FOLDER_NAME, PIVOTGRID_MODULE_NAME } from './constants';

export const PIVOTGRIDCONTAINER_CLASSNAME = `k-pivotgrid-container`;

const states = [];

const options = {};

export type KendoPivotGridContainerProps = {
    orientation?: "horizontal" | "vertical";
};

const defaultOptions = {
    orientation: "vertical" as KendoPivotGridContainerProps["orientation"]
};

/**
 * Groups the PivotGrid with its configurator panel and configurator button,
 * so they share a single outer border and border radius.
 *
 * The flex axis follows the configurator orientation: `k-flex-row` for a vertical configurator
 * and `k-flex-col` for a horizontal one. The configurator and the button are placed
 * before the PivotGrid in the DOM to appear at the start, and after it to appear at the end.
 */
export const PivotGridContainer: KendoComponent<KendoPivotGridContainerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoPivotGridContainerProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        orientation = defaultOptions.orientation,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PIVOTGRIDCONTAINER_CLASSNAME,
                'k-d-flex',
                orientation === "horizontal" ? 'k-flex-col' : 'k-flex-row'
            )}>
            {props.children}
        </div>
    );
};

PivotGridContainer.states = states;
PivotGridContainer.options = options;
PivotGridContainer.className = PIVOTGRIDCONTAINER_CLASSNAME;
PivotGridContainer.moduleName = PIVOTGRID_MODULE_NAME;
PivotGridContainer.folderName = PIVOTGRID_FOLDER_NAME;
PivotGridContainer.defaultOptions = defaultOptions;

export default PivotGridContainer;
