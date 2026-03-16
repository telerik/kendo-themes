import { classNames, nextId } from '../misc';
import PivotGridConfiguratorButton from './pivotgrid-configurator-button';
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

PivotGrid.ariaSpec = {
    selector: '.k-pivotgrid',
    rules: [
        // ── Grid Element ──
        { selector: '.k-pivotgrid', attribute: 'role=grid', usage: 'The role specifies the element is a Data Grid.' },

        // ── Empty Cell ──
        { selector: '.k-pivotgrid-empty-cell th', attribute: 'id', usage: 'Sets a unique identifier for the cell to be referenced from the first column header row aria-owns attribute.' },

        // ── Column Headers ──
        { selector: '.k-pivotgrid-column-headers>.k-pivotgrid-table', attribute: 'role=none', usage: 'Negates the default semantic role of the <table> element.' },
        { selector: '.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody', attribute: 'role=rowgroup', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row', attribute: 'role=row', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row:first-child', attribute: 'aria-owns', usage: 'Lists the IDs of the empty cell and all cells in the first column headers row to construct the a11y tree.' },
        { selector: '.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th', attribute: 'role=columnheader', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th[aria-expanded]', attribute: 'aria-expanded', usage: 'Indicates the current expanded state of the header.' },
        { selector: '.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th', attribute: 'id', usage: 'Unique and deterministic identifier, used to associate the header cell with respective data cells.' },

        // ── Toggle Icons ──
        { selector: '[class*="i-chevron-up"]', attribute: 'aria-hidden=true', usage: 'Excludes the collapse icon from the screen reader output.' },
        { selector: '[class*="i-chevron-down"]', attribute: 'aria-hidden=true', usage: 'Excludes the expand icon from the screen reader output.' },

        // ── Row Headers ──
        { selector: '.k-pivotgrid-row-headers>.k-pivotgrid-table', attribute: 'role=none', usage: 'Negates the default semantic role of the <table> element.' },
        { selector: '.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody', attribute: 'role=rowgroup', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row', attribute: 'role=row', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row[aria-owns]', attribute: 'aria-owns', usage: 'Used to associate row header cells with the corresponding data cells.' },
        { selector: '.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th', attribute: 'role=rowheader', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th[aria-expanded]', attribute: 'aria-expanded', usage: 'Indicates the current expanded state of the header.' },

        // ── Grid Data Table ──
        { selector: '.k-pivotgrid-values>.k-pivotgrid-table', attribute: 'role=none', usage: 'Negates the default semantic role of the <table> element.' },
        { selector: '.k-pivotgrid-values>.k-pivotgrid-table>tbody', attribute: 'role=none', usage: 'The contained rows are associated with their headers through alternative mechanics.' },
        { selector: '.k-pivotgrid-values>.k-pivotgrid-table>tbody>.k-pivotgrid-row', attribute: 'role=none', usage: 'The rows are associated with their headers through alternative mechanics.' },
        { selector: '.k-pivotgrid-values>.k-pivotgrid-table>tbody>.k-pivotgrid-row>td', attribute: 'role=gridcell', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-pivotgrid-values>.k-pivotgrid-table>tbody>.k-pivotgrid-row>td', attribute: 'id', usage: 'Unique and deterministic identifier, used to associate the data cell with respective row header cells.' },
        { selector: '.k-pivotgrid-values>.k-pivotgrid-table>tbody>.k-pivotgrid-row>td[aria-describedby]', attribute: 'aria-describedby', usage: 'Used to associate the data cells with the respective column header cells.' },

        // ── Configurator Button ──
        { selector: '.k-pivotgrid-configurator-button', attribute: 'aria-hidden=true', usage: 'Hide the element from assistive technologies.' },

        // ── Configurator Dialog ──
        { selector: '.k-pivotgrid-configurator', attribute: 'role=dialog', usage: 'The role specifies the element is a dialog.' },
        { selector: '.k-pivotgrid-configurator[aria-hidden]', attribute: 'aria-hidden', usage: 'Specifies whether the configurator is visible if it is still in the DOM when closed.' },
        { selector: '.k-pivotgrid-configurator', attribute: 'aria-labelledby', usage: 'Associates the configurator wrapper with its internal header element.' },

        // ── Configurator Internal Elements ──
        { selector: '.k-pivotgrid-configurator-header-text', attribute: 'id', usage: 'Unique identifier used to associate the header text with elements that reference it as a label.' },
        { selector: '.k-pivotgrid-configurator-content .k-label', attribute: 'id', usage: 'Unique identifier used to associate the label text with elements that reference it as a label.' },
        { selector: '.k-pivotgrid-configurator-actions .k-button[aria-disabled]', attribute: 'aria-disabled', usage: 'Announces the disabled state of the configurator Cancel and Apply buttons.' },
        { selector: '.k-fields-list-wrapper .k-treeview', attribute: 'aria-labelledby', usage: 'Associates the fields chooser TreeView with the Fields section and Configurator header texts.' },
        { selector: '.k-pivotgrid-configurator-content .k-chip-list', attribute: 'aria-labelledby', usage: 'Associates the chip lists with their respective section label and Configurator header texts.' },
    ]
};

export default PivotGrid;
