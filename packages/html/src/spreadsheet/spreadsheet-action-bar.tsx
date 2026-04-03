import { Button } from '../button/button.spec';
import { Combobox } from '../combobox/combobox.spec';
import { classNames, nextId } from '../misc';

export const SPREADSHEETACTIONBAR_CLASSNAME = `k-spreadsheet-action-bar`;

const states = [];

const options = {};

export type KendoSpreadsheetActionBarProps = {
    formula?: React.JSX.Element | string;
    cellName?: string;
    /** @aria When true, renders the formula list popup in expanded state. */
    formulaExpanded?: boolean;
    /** @aria Custom formula list items to render when expanded. */
    formulaListItems?: React.JSX.Element;
};

const defaultFormula = (
    <>
        <span className="k-syntax-startexp">=</span>
        <span className="k-syntax-ref k-series-a">B6</span>
        <span className="k-syntax-op">+</span>
        <span className="k-syntax-ref k-series-b">C6</span>
        <span className="k-syntax-op">+</span>
        <span className="k-syntax-ref k-series-c">C3</span>
    </>
);

const defaultOptions = {
    formula: defaultFormula,
    cellName: "B6"
};

export const SpreadsheetActionBar = (
    props: KendoSpreadsheetActionBarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        formula = defaultOptions.formula,
        cellName = defaultOptions.cellName,
        formulaExpanded = false,
        formulaListItems,
        ...other
    } = props;

    const formulaListId = formulaExpanded ? nextId('spreadsheet-formula-list') : undefined;

    const defaultFormulaListItems = (
        <>
            <li className="k-list-item" role="menuitem"><span className="k-list-item-text">SUM</span></li>
            <li className="k-list-item" role="menuitem"><span className="k-list-item-text">AVERAGE</span></li>
            <li className="k-list-item" role="menuitem"><span className="k-list-item-text">COUNT</span></li>
        </>
    );

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEETACTIONBAR_CLASSNAME,
                props.className
            )}>
            <div className="k-spreadsheet-name-editor">
                <Combobox placeholder={cellName} fillMode="flat" aria-label="Name editor" />
            </div>
            <div className="k-spreadsheet-formula-bar">
                <span className="k-separator k-separator-vertical"></span>
                <Button icon="formula-fx" fillMode="flat" aria-label="Formula" />
                <span className="k-separator k-separator-vertical"></span>

                <div className="k-spreadsheet-formula-input k-textbox k-input k-input-flat"
                    role="combobox"
                    title="Formula input"
                    aria-haspopup="menu"
                    aria-expanded={formulaExpanded ? "true" : "false"}
                    {...(formulaListId && { 'aria-controls': formulaListId })}>
                    {formula}
                </div>
                {formulaExpanded && (
                    <ul className="k-spreadsheet-formula-list" id={formulaListId} role="menu">
                        {formulaListItems || defaultFormulaListItems}
                    </ul>
                )}
            </div>
        </div>
    );
};

SpreadsheetActionBar.states = states;
SpreadsheetActionBar.options = options;
SpreadsheetActionBar.className = SPREADSHEETACTIONBAR_CLASSNAME;
SpreadsheetActionBar.defaultOptions = defaultOptions;

export default SpreadsheetActionBar;
