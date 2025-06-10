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
        >
            {props.children}
        </tr>
    );
};

TableRow.states = states;
TableRow.className = TABLEROW_CLASSNAME;

export default TableRow;
