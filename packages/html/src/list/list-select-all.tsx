import { classNames, stateClassNames, States } from '../misc';
import { Checkbox } from '../checkbox';

const LIST_SELECTALL_CLASSNAME = `k-list-sticky-header`;

const states = [
    States.hover,
    States.focus,
    States.selected,
];

const options = {};

const defaultOptions = {};

export type KendoListSelectAllProps = {
    label?: string;
    showCheckbox?: boolean;
    checked?: boolean;
    indeterminate?: boolean;
};

export type KendoListSelectAllState = { [K in (typeof states)[number]]?: boolean };

export const ListSelectAll = (
    props: KendoListSelectAllProps &
    KendoListSelectAllState &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        label = 'Select all',
        showCheckbox = true,
        checked,
        indeterminate,
        hover,
        focus,
        selected,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                LIST_SELECTALL_CLASSNAME,
                props.className,
            )}
        >
            <div className={classNames(
                `${LIST_SELECTALL_CLASSNAME}-item`,
                stateClassNames(`${LIST_SELECTALL_CLASSNAME}-item`, { hover, focus, selected }),
            )}
            aria-label={label}
            {...(!showCheckbox && {
                'tabIndex': 0,
                'aria-selected': selected ? 'true' : 'false'
            })}
            >
                {showCheckbox && <Checkbox checked={checked} indeterminate={indeterminate} aria-label={label} />}
                <span className="k-list-item-text">{label}</span>
            </div>
        </div>
    );
};

ListSelectAll.states = states;
ListSelectAll.options = options;
ListSelectAll.className = LIST_SELECTALL_CLASSNAME;
ListSelectAll.defaultOptions = defaultOptions;

/**
 * Accessibility specification for ListSelectAll.
 *
 * @accessibility
 * - With checkbox: the checkbox provides the interactive toggle with aria-label for accessible name
 * - Without checkbox: the item gets aria-selected for assistive tech
 */
ListSelectAll.ariaSpec = {
    selector: '.k-list-sticky-header',
    rules: [
        { selector: '.k-list-sticky-header-item .k-checkbox', attribute: 'aria-label', usage: 'Provides accessible name for the select-all checkbox.' },
        { selector: '.k-list-sticky-header-item', attribute: 'aria-label', usage: 'Provides accessible name for the select-all item.' },
        { selector: '.k-list-sticky-header-item', attribute: 'tabindex=0', usage: 'Makes the select-all item focusable.' },
        { selector: '.k-list-sticky-header-item', attribute: 'aria-selected', usage: 'Indicates selected state when no checkbox is present.' },
    ]
};

export default ListSelectAll;
