import { classNames, optionClassNames, Size } from '../misc';
import { TimeSelectorColumn } from '.';

export type timeType = 'dd' | 'HH' | 'mm' | 'ss' | 'SSS' | 'tt';

const TIMESELECTOR_CLASSNAME = `k-timeselector`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoTimeSelectorOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoTimeSelectorProps = KendoTimeSelectorOptions & {
    header?: null | JSX.Element;
    fastSelection?: null | JSX.Element;
    value?: string;
    columns: Array<timeType>;
    focusedColumn?: null | timeType;
};

const defaultProps = {
    size: Size.medium
} as const;

export const TimeSelector = (
    props: KendoTimeSelectorProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        header,
        fastSelection,
        columns,
        focusedColumn,
        ...other
    } = props;

    const columnsDom = columns.map(function(columnType, index) {
        let focus = false;
        let separator = true;

        if (columnType === focusedColumn) {
            focus = true;
        }
        if (index === 0 || columnType === "tt") {
            separator = false;
        }

        return (
            <>
                <TimeSelectorColumn type={columnType} focus={focus} separator={separator}></TimeSelectorColumn>
            </>
        );
    });

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                TIMESELECTOR_CLASSNAME,
                optionClassNames(TIMESELECTOR_CLASSNAME, {
                    size
                })
            )}>
            <>
                {header}
            </>
            <>
                {fastSelection}
            </>
            <div className="k-time-list-container">
                <span className="k-time-highlight"></span>
                {columnsDom}
            </div>
        </div>
    );
};

TimeSelector.states = states;
TimeSelector.options = options;
TimeSelector.className = TIMESELECTOR_CLASSNAME;
TimeSelector.defaultProps = defaultProps;

export default TimeSelector;
