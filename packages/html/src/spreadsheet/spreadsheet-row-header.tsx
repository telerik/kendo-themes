import { classNames } from '../misc';

export const SPREADSHEETROWHEADER_CLASSNAME = `k-spreadsheet-row-header`;

const states = [];

const options = {};

export type KendoSpreadsheetRowHeaderProps = {
    configureSelection?: { [key: string]: "partial" | "full" | null };
};

export const SpreadsheetRowHeader = (
    props: KendoSpreadsheetRowHeaderProps
        & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        configureSelection = { 1: "partial" },
        ...other
    } = props;

    const defaultRowHeaderItems = ([
        <div style={{ width: "30px", height: "70px" }}>
            <div className="k-vertical-align-center">1</div>
        </div>,
        <div style={{ width: "30px", height: "25px" }}>
            <div className="k-vertical-align-center">2</div>
        </div>,
        <div style={{ width: "30px", height: "30px" }}>
            <div className="k-vertical-align-center">3</div>
        </div>,
        <div style={{ width: "30px", height: "30px" }}>
            <div className="k-vertical-align-center">4</div>
        </div>,
        <div style={{ width: "30px", height: "30px" }}>
            <div className="k-vertical-align-center">5</div>
        </div>,
        <div style={{ width: "30px", height: "30px" }}>
            <div className="k-vertical-align-center">6</div>
        </div>,
        <div style={{ width: "30px", height: "30px" }}>
            <div className="k-vertical-align-center">7</div>
        </div>,
        <div style={{ width: "30px", height: "30px" }}>
            <div className="k-vertical-align-center">8</div>
        </div>,
        <div style={{ width: "30px", height: "30px" }}>
            <div className="k-vertical-align-center">9</div>
        </div>,
        <div style={{ width: "30px", height: "30px" }}>
            <div className="k-vertical-align-center">10</div>
        </div>,
        <div style={{ width: "30px", height: "30px" }}>
            <div className="k-vertical-align-center">11</div>
        </div>,
        <div style={{ width: "30px", height: "30px" }}>
            <div className="k-vertical-align-center">12</div>
        </div>,
        <div style={{ width: "30px", height: "30px" }}>
            <div className="k-vertical-align-center">13</div>
        </div>
    ]);

    const addRowSelection = (items: Array<React.JSX.Element>, configuration: any) => items.map((element: React.JSX.Element, index: number) => {
        const itemValue = element.props.children.props.children;
        return (
            <div key={index} style={element.props.style}
                className={classNames(
                    {
                        ['k-selection-partial']: configuration[itemValue] === "partial",
                        ['k-selection-full']: configuration[itemValue] === "full",
                        ['k-selection-none']: !configuration[itemValue]
                    }
                )}
            >
                {element.props.children}
            </div >
        );
    });

    const rowHeaderItems = configureSelection ? addRowSelection(defaultRowHeaderItems, configureSelection) : defaultRowHeaderItems;

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEETROWHEADER_CLASSNAME,
                props.className
            )}>
            {rowHeaderItems}
        </div>
    );
};

SpreadsheetRowHeader.states = states;
SpreadsheetRowHeader.options = options;
SpreadsheetRowHeader.className = SPREADSHEETROWHEADER_CLASSNAME;

export default SpreadsheetRowHeader;
