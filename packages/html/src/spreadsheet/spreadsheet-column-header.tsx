import { classNames } from '../misc';

export const SPREADSHEETCOLUMNHEADER_CLASSNAME = `k-spreadsheet-column-header`;

const states = [];

const options = {};

export type KendoSpreadsheetColumnHeaderProps = {
    configureSelection?: { [key: string]: "partial" | "full" | null };
};

const defaultProps = {
    configureSelection: { A: "partial" }
};

export const SpreadsheetColumnHeader = (
    props: KendoSpreadsheetColumnHeaderProps
        & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        configureSelection = defaultProps.configureSelection,
        ...other
    } = props;

    const defaultColumnHeaderItems = ([
        <div style={{ position: "absolute", left: "0px", width: "100px", height: "30px" }}>
            <div className="k-vertical-align-center">A</div>
        </div>,
        <div style={{ position: "absolute", left: "100px", width: "215px", height: "30px" }}>
            <div className="k-vertical-align-center">B</div>
        </div>,
        <div style={{ position: "absolute", left: "315px", width: "115px", height: "30px" }}>
            <div className="k-vertical-align-center">C</div>
        </div>,
        <div style={{ position: "absolute", left: "430px", width: "115px", height: "30px" }}>
            <div className="k-vertical-align-center">D</div>
        </div>,
        <div style={{ position: "absolute", left: "545px", width: "115px", height: "30px" }}>
            <div className="k-vertical-align-center">E</div>
        </div>,
        <div style={{ position: "absolute", left: "660px", width: "155px", height: "30px" }}>
            <div className="k-vertical-align-center">F</div>
        </div>,
        <div style={{ position: "absolute", left: "815px", width: "64px", height: "30px" }}>
            <div className="k-vertical-align-center">G</div>
        </div>,
        <div style={{ position: "absolute", left: "879px", width: "64px", height: "30px" }}>
            <div className="k-vertical-align-center">H</div>
        </div>,
        <div style={{ position: "absolute", left: "943px", width: "64px", height: "30px" }}>
            <div className="k-vertical-align-center">I</div>
        </div>,
        <div style={{ position: "absolute", left: "1007px", width: "64px", height: "30px" }}>
            <div className="k-vertical-align-center">J</div>
        </div>,
        <div style={{ position: "absolute", left: "1071px", width: "64px", height: "30px" }}>
            <div className="k-vertical-align-center">K</div>
        </div>,
        <div style={{ position: "absolute", left: "1135px", width: "64px", height: "30px" }}>
            <div className="k-vertical-align-center">L</div>
        </div>
    ]);

    const addColumnSelection = (items: Array<JSX.Element>, configuration: any) => items.map((element: JSX.Element, index: number) => {
        const itemValue = element.props.children.props.children;
        return (
            <div key={index} style={element.props.style}
                className={classNames(
                    {
                        ['k-selection-partial']: configuration[itemValue] === "partial",
                        ['k-selection-full']: configuration[itemValue] === "full",
                        ['k-selection-none']: !(configuration[itemValue])
                    }
                )}
            >
                {element.props.children}
            </div >
        );
    });

    const columnHeaderItems = configureSelection ? addColumnSelection(defaultColumnHeaderItems, configureSelection) : defaultColumnHeaderItems;

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEETCOLUMNHEADER_CLASSNAME,
                props.className
            )}>
            {columnHeaderItems}
        </div>
    );
};

SpreadsheetColumnHeader.states = states;
SpreadsheetColumnHeader.options = options;
SpreadsheetColumnHeader.className = SPREADSHEETCOLUMNHEADER_CLASSNAME;
SpreadsheetColumnHeader.defaultProps = defaultProps;

export default SpreadsheetColumnHeader;
