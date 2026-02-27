import { classNames, optionClassNames, Size } from '../misc';
import { TimeSelectorColumn } from '.';

import { KendoComponent } from '../_types/component';
import { TIME_SELECTOR_FOLDER_NAME, TIME_SELECTOR_MODULE_NAME } from './constants';
export type timeType = 'dd' | 'HH' | 'mm' | 'ss' | 'SSS' | 'tt';

const TIMESELECTOR_CLASSNAME = `k-timeselector`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type KendoTimeSelectorOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoTimeSelectorProps = KendoTimeSelectorOptions & {
    header?: null | React.JSX.Element;
    fastSelection?: null | React.JSX.Element;
    value?: string;
    columns: Array<timeType>;
    focusedColumn?: null | timeType;
};

const defaultOptions = {
} as const;

export const TimeSelector: KendoComponent<KendoTimeSelectorProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoTimeSelectorProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
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
            <TimeSelectorColumn key={index} type={columnType} focus={focus} separator={separator} />
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
            )}
            role="group"
            aria-label="Time selector">
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
TimeSelector.defaultOptions = defaultOptions;
TimeSelector.moduleName = TIME_SELECTOR_MODULE_NAME;
TimeSelector.folderName = TIME_SELECTOR_FOLDER_NAME;

/**
 * Accessibility specification for TimeSelector.
 *
 * @accessibility
 * - The wrapper has role=group with an aria-label
 * - Each time column list has role=listbox with aria-label describing the column
 * - Each item in the list has role=option
 *
 * @wcag 4.1.2 Name, Role, Value - listbox pattern for time selection
 */
TimeSelector.ariaSpec = {
    selector: '.k-timeselector',
    rules: [
        { selector: '.k-timeselector', attribute: 'role=group', usage: 'Groups the time selection columns.' },
        { selector: '.k-timeselector', attribute: 'aria-label', usage: 'Describes the time selector purpose.' },
        { selector: '.k-time-list', attribute: 'role=listbox', usage: 'Each time column list acts as a listbox.' },
        { selector: '.k-time-list', attribute: 'aria-label', usage: 'Describes which time unit the column selects.' },
        { selector: '.k-time-list-wrapper .k-reset', attribute: 'role=none', usage: 'Removes semantic meaning from the ul element.' },
        { selector: '.k-time-list-wrapper .k-item', attribute: 'role=option', usage: 'Each item in the time list is an option.' },
    ]
};

export default TimeSelector;
