import { classNames, stateClassNames, States } from '../misc';

const className = `k-table-td`;

const states = [
    States.focus,
    States.selected,
    States.highlighted
];

export type KendoTableTdProps = {
    text?: string;
    colspan?: any;
    rowspan?: any;
    role?: string;
    'aria-colindex'?: number;
    'aria-selected'?: 'true' | 'false';
    'aria-label'?: string;
};

export type KendoTableTdState = { [K in (typeof states)[number]]?: boolean };

export const TableTd = (
    props: KendoTableTdProps &
        KendoTableTdState &
        React.HTMLAttributes<HTMLTableCellElement>
) => {
    const {
        focus,
        selected,
        highlighted,
        text,
        colspan,
        rowspan,
        role,
        'aria-colindex': ariaColindex,
        'aria-selected': ariaSelected,
        'aria-label': ariaLabel,
        ...other
    } = props;

    const textOrChildren = text
        ? text
        : props.children;

    return (
        <td
            colSpan={colspan}
            rowSpan={rowspan}
            {...other}
            className={classNames(
                props.className,
                className,
                stateClassNames(className, {
                    focus,
                    selected,
                    highlighted,
                })
            )}
            {...(role && { role })}
            {...(ariaColindex && { 'aria-colindex': ariaColindex })}
            {...(ariaSelected && { 'aria-selected': ariaSelected })}
            {...(ariaLabel && { 'aria-label': ariaLabel })}
        >
            {textOrChildren}
        </td>
    );
};

TableTd.states = states;
TableTd.className = className;

export default TableTd;
