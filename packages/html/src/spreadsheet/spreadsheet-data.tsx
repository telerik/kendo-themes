import { classNames } from '../misc';
import { data, axis } from './data';

export const SPREADSHEETDATA_CLASSNAME = `k-spreadsheet-data`;

const states = [];

const options = {};

export type KendoSpreadsheetDataProps = {
    activeCellIndex?: number;
};

const defaultProps = {};

export const SpreadsheetData = (
    props: KendoSpreadsheetDataProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        activeCellIndex,
        ...other
    } = props;

    const addActiveCell = (data: Array<JSX.Element>, activeCellIndex: number) => data.map((element: JSX.Element, index: number) => {
        if (index === activeCellIndex) {
            return (
                <div key={index} style={element.props.style}
                    className={classNames(
                        element.props.className,
                        "k-spreadsheet-active-cell"
                    )}>
                    {element.props.children}
                </div>
            );
        }
        return element;
    });

    const spreadsheetData = activeCellIndex ? addActiveCell(data, activeCellIndex) : data;

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEETDATA_CLASSNAME,
                props.className
            )}>
            {[ ...axis, ...spreadsheetData ]}
        </div>
    );
};

SpreadsheetData.states = states;
SpreadsheetData.options = options;
SpreadsheetData.className = SPREADSHEETDATA_CLASSNAME;
SpreadsheetData.defaultProps = defaultProps;

export default SpreadsheetData;
