import { classNames, stateClassNames, States } from '../misc';

export const TABLEROW_CLASSNAME = `k-table-row`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled,
    States.highlighted
];

export type KendoTableRowProps = {
    alt?: boolean;
    role?: string;
    'aria-rowindex'?: number;
    'aria-selected'?: 'true' | 'false';
    'aria-expanded'?: 'true' | 'false';
    'aria-owns'?: string;
};

export type KendoTableRowState = { [K in (typeof states)[number]]?: boolean };


export const TableRow = (
    props: KendoTableRowProps &
        KendoTableRowState &
        React.HTMLAttributes<HTMLTableRowElement>
) => {
    const {
        hover,
        focus,
        selected,
        highlighted,
        disabled,
        alt,
        role,
        'aria-rowindex': ariaRowindex,
        'aria-selected': ariaSelected,
        'aria-expanded': ariaExpanded,
        'aria-owns': ariaOwns,
        ...other
    } = props;

    return (
        <tr
            {...other}
            className={classNames(
                props.className,
                TABLEROW_CLASSNAME,
                {
                    ['k-table-alt-row']: alt,
                },
                stateClassNames(TABLEROW_CLASSNAME, {
                    hover,
                    focus,
                    disabled,
                    selected,
                    highlighted,
                })
            )}
            {...(role && { role })}
            {...(ariaRowindex && { 'aria-rowindex': ariaRowindex })}
            {...(ariaSelected && { 'aria-selected': ariaSelected })}
            {...(ariaExpanded && { 'aria-expanded': ariaExpanded })}
            {...(ariaOwns && { 'aria-owns': ariaOwns })}
        >
            {props.children}
        </tr>
    );
};

TableRow.states = states;
TableRow.className = TABLEROW_CLASSNAME;

export default TableRow;
