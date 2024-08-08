import { Button, Combobox } from '..';
import { classNames } from '../misc';

export const SPREADSHEETACTIONBAR_CLASSNAME = `k-spreadsheet-action-bar`;

const states = [];

const options = {};

export type KendoSpreadsheetActionBarProps = {
    formula?: React.JSX.Element | string;
    cellName?: string;
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
                <Button icon="formula-fx" fillMode="flat" />
                <span className="k-separator k-separator-vertical"></span>

                <div className="k-spreadsheet-formula-input k-textbox k-input k-input-md k-input-flat k-rounded-md">
                    {formula}
                </div>
            </div>
        </div>
    );
};

SpreadsheetActionBar.states = states;
SpreadsheetActionBar.options = options;
SpreadsheetActionBar.className = SPREADSHEETACTIONBAR_CLASSNAME;
SpreadsheetActionBar.defaultOptions = defaultOptions;

export default SpreadsheetActionBar;
