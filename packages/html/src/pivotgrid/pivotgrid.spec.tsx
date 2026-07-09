import { classNames, nextId } from '../misc';
import PivotGridConfiguratorButton from './pivotgrid-configurator-button.spec';
import React from 'react';

import { KendoComponent } from '../_types/component';
import { PIVOTGRID_FOLDER_NAME, PIVOTGRID_MODULE_NAME } from './constants';
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

/**
 * @aria {role="grid"} The role specifies the element is a Data Grid.
 * @aria {id} Sets a unique identifier for the cell to be referenced from the first column header row aria-owns attribute.
 */
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

/**
 * @keyboard {ArrowRight} Moves focus one cell to the right (if any)
 * @keyboard {ArrowLeft} Moves focus one cell to the left (if any)
 * @keyboard {ArrowDown} Moves focus one cell down (if any)
 * @keyboard {ArrowUp} Moves focus one cell up (if any)
 * @keyboard {Home} Moves focus to the first cell in the row that contains focus.
 * @keyboard {End} Moves focus to the last cell in the row that contains focus.
 * @keyboard {Control/Cmd(Mac) + Home} Moves focus to the first (top-left) data cell in the grid.
 * @keyboard {Control/Cmd(Mac) + End} Moves focus to the last cell in the last row of the Grid.
 * @keyboard {o} Opens the configurator when available.
 * @keyboard {Escape} Closes the configurator when available and open.
 * @keyboard {Enter or Space} If the header cell is expandable, toggles the current expanded state.
 * @keyboard {Escape} Closes the Configurator and returns focus to the last focused PivotGrid table cell (or the first cell).
 * @keyboard {Tab} Focuses the next focusable element or the first focusable element, if the focus is on the last focusable element.
 * @keyboard {Shift + Tab} Focuses the previous focusable element or the last focusable element, if the focus is on the first focusable element.
 * @keyboard {Backspace or Delete} Applicable when a Chip is focused. Removes the Chip, and the previous focusable element is focused.
 * @keyboard {Control/Cmd(Mac) + Shift + ArrowLeft or ArrowRight} Applicable when a Chip is focused. Switches the Chip with the next/previous one from the same section (if one is available).
 * @keyboard {Control/Cmd(Mac) + Shift + ArrowUp or ArrowDown} Applicable when a Chip is focused. Moves a Chip from the Rows section to the Columns one or vice-versa.
 * @keyboard {Alt/Opt(Mac) + ArrowDown} Opens the Chip menu for the focused Chip. Focus goes to the first menu element is trapped in the menu popup.
 * @keyboard {Escape} Closes the menu and returns the focus to the Chip that triggered it.
 * @keyboard {Tab} Focuses the next focusable menu element or the first focusable element, if the focus is on the last focusable element.
 * @keyboard {Shift + Tab} Focuses the previous focusable element or the last focusable element, if the focus is on the first focusable element.
 * @keyboard {Enter} Triggers the default action associated with the focused menu item.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#grid WAI-ARIA specification for grid
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role WAI-ARIA specification for dialog
 */

export default PivotGrid;
