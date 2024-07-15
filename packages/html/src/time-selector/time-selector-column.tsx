import { classNames, stateClassNames, States } from '../misc';
import { timeType } from './time-selector.spec';

const states = [
    States.focus,
];

export type KendoTimeSelectorColumnProps = {
    type?: timeType;
    separator?: boolean;
};

export type KendoTimeSelectorColumnState = { [K in (typeof states)[number]]?: boolean };

export const TimeSelectorColumn = (
    props: KendoTimeSelectorColumnProps &
        KendoTimeSelectorColumnState &
        React.HTMLAttributes<HTMLElement>
) => {
    const {
        type,
        focus,
        separator,
        ...other
    } = props;

    let text: string;
    let columnData = [ "00", "01", "02", "03", "04", "05", "06", "07", "08", "09" ];

    switch (type) {
        case "dd":
            text = "Day";
            break;
        case "HH":
            text = "Hour";
            break;
        case "mm":
            text = "Minute";
            break;
        case "ss":
            text = "Second";
            break;
        case "SSS":
            text = "Millisecond";
            columnData = [ "000", "001", "002", "003", "004", "005", "006", "007", "008", "009" ];
            break;
        case "tt":
            text = "AM/PM";
            columnData = [ "AM", "PM" ];
            break;
        default:
            text = "Column Name";
            break;
    }

    const items = columnData.map(data=>
        <>
            <li className="k-item">
                <span>{data}</span>
            </li>
        </>
    );

    return (
        <>
            {
                separator && (
                    <div className="k-time-separator">:</div>
                )
            }
            <div
                {...other}
                className={classNames(
                    props.className,
                    "k-time-list-wrapper",
                    stateClassNames("k-time-list-wrapper", {
                        focus,
                    })
                )}>
                <span className="k-title">{text}</span>
                <div className="k-time-list">
                    <div className="k-content k-scrollable k-time-container">
                        <ul className="k-reset" style={{ transform: "translateY(97px)" }}>
                            {items}
                        </ul>
                        <div className="k-scrollable-placeholder"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

TimeSelectorColumn.states = states;

export default TimeSelectorColumn;
