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
            )}>
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

export default ListSelectAll;
