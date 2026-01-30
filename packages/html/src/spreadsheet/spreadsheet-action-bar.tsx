import { Button } from '../button/button.spec';
import { Combobox } from '../combobox/combobox.spec';
import { classNames } from '../misc';

export const SPREADSHEETACTIONBAR_CLASSNAME = `k-spreadsheet-action-bar`;

const states = [];

const options = {};

export type KendoSpreadsheetActionBarProps = {
    formula?: React.JSX.Element | string;
    cellName?: string;
};

const formulaListId = 'k-spreadsheet-formula-list';

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
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEETACTIONBAR_CLASSNAME,
                props.className
            )}>
            <div className="k-spreadsheet-name-editor">
                <Combobox placeholder={cellName} fillMode="flat" />
            </div>
            <div className="k-spreadsheet-formula-bar">
                <span className="k-separator k-separator-vertical"></span>
                <Button icon="formula-fx" fillMode="flat" aria-label="Insert function" />
                <span className="k-separator k-separator-vertical"></span>

                <div
                    className="k-spreadsheet-formula-input k-textbox k-input k-input-flat"
                    role="combobox"
                    aria-haspopup="menu"
                    aria-controls={formulaListId}
                    aria-expanded={false}
                    title="Formula"
                >
                    {formula}
                </div>
            </div>
            <ul className="k-spreadsheet-formula-list k-list-ul" id={formulaListId} role="menu">
                <li className="k-list-item" role="menuitem">SUM</li>
                <li className="k-list-item" role="menuitem">AVERAGE</li>
                <li className="k-list-item" role="menuitem">MAX</li>
            </ul>
        </div>
    );
};

SpreadsheetActionBar.states = states;
SpreadsheetActionBar.options = options;
SpreadsheetActionBar.className = SPREADSHEETACTIONBAR_CLASSNAME;
SpreadsheetActionBar.defaultOptions = defaultOptions;

export default SpreadsheetActionBar;
