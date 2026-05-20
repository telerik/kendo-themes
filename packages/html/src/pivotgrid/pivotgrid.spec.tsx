import { classNames, nextId } from '../misc';
import PivotGridConfiguratorButton from './pivotgrid-configurator-button';
import React from 'react';

import { KendoComponent } from '../_types/component';
import { PIVOTGRID_FOLDER_NAME, PIVOTGRID_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
export const PIVOTGRID_CLASSNAME = `k-pivotgrid`;

const states = [];

const options = {};

export type KendoPivotGridProps = {
    emptyCell?: React.JSX.Element;
    columnHeaders?: React.JSX.Element;
    rowHeaders?: React.JSX.Element;
    configurator?: React.JSX.Element;
    configuratorDisplay?: "none" | "closed" | "opened";
    configuratorPosition?: "left" | "bottom" | "right" | "top";

};

const defaultOptions = {
    emptyCell: <div className="k-pivotgrid-empty-cell" role="none">
                <table role="none"><thead role="none"><tr role="none"><th aria-colspan={1} aria-rowspan={1} id={nextId('pivotgrid-empty')}>
                    <span className="k-sr-only">PivotGrid component. Use the arrow keys to navigate.</span>
                </th></tr></thead></table>
            </div>,
    configuratorDisplay: "none",
    configuratorPosition: "right"
};

export const PivotGrid: KendoComponent<KendoPivotGridProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoPivotGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        emptyCell = defaultOptions.emptyCell,
        configuratorDisplay = defaultOptions.configuratorDisplay,
        configuratorPosition = defaultOptions.configuratorPosition,
        configurator,
        columnHeaders,
        rowHeaders,
        children,
        ...other
    } = props;

    const positionMap: Record<string, string> = {
        left: "k-d-flex k-flex-row-reverse k-pos-relative",
        bottom: "k-d-flex k-flex-col k-pos-relative",
        top: "k-d-flex k-flex-col-reverse k-pos-relative",
        right: "k-d-flex k-flex-row k-pos-relative"
    }

    return (
        <div className={positionMap[configuratorPosition]}>
            <div
                {...other}
                className={classNames(
                    props.className,
                    PIVOTGRID_CLASSNAME,
                )}
                role="grid">
                {emptyCell}
                <div className="k-pivotgrid-column-headers" role="none">
                    {columnHeaders}
                </div>
                <div className="k-pivotgrid-row-headers" role="none">
                    {rowHeaders}
                </div>
                <div className="k-pivotgrid-values" role="none">
                    {children}
                </div>
            </div>
            {(configurator && configuratorDisplay === "opened") && configurator}
            {(configurator && configuratorDisplay === "closed") && React.cloneElement(configurator as React.ReactElement<React.HTMLAttributes<HTMLElement>>, { 'aria-hidden': 'true' })}
            {(configuratorDisplay !== "none") && <PivotGridConfiguratorButton />}
        </div>
    );
};

PivotGrid.states = states;
PivotGrid.options = options;
PivotGrid.className = PIVOTGRID_CLASSNAME;
PivotGrid.defaultOptions = defaultOptions;
PivotGrid.moduleName = PIVOTGRID_MODULE_NAME;
PivotGrid.folderName = PIVOTGRID_FOLDER_NAME;

PivotGrid.ariaSpec = a11ySpec.ariaSpec;

export default PivotGrid;
