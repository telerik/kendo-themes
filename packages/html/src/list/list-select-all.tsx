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

/**
 * @aria {aria-label} Provides accessible name for the select-all item or checkbox.
 * @aria {aria-selected="true"|"false"} Indicates selected state when no checkbox is present.
 * @ux {Fixed position} Stays visible at the top of the list while the user scrolls.
 * @ux {Select all} Toggles selection of all items in the list.
 */
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
 * @keyboard {Space} Toggles selection of all items when the select-all item is focused.
 * @keyboard {Tab} Moves focus to the next focusable element.
 * @keyboard {Shift + Tab} Moves focus to the previous focusable element.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/listbox/ WAI-ARIA Listbox Pattern
 * @see https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html WCAG 4.1.2 Name, Role, Value
 */

export default ListSelectAll;
