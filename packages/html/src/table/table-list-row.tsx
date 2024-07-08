import { classNames, stateClassNames, States } from '../misc';

export const TABLELISTROW_CLASSNAME = `k-table-row`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
];

export type KendoTableListRowProps = {
    alt?: boolean;
};

export type KendoTableListRowState = { [K in (typeof states)[number]]?: boolean };


export const TableListRow = (
    props: KendoTableListRowProps &
        KendoTableListRowState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        hover,
        focus,
        selected,
        disabled,
        alt,
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                TABLELISTROW_CLASSNAME,
                {
                    ['k-table-alt-row']: alt,
                },
                stateClassNames(TABLELISTROW_CLASSNAME, {
                    hover,
                    focus,
                    disabled,
                    selected,
                })
            )}
        >
            {props.children}
        </li>
    );
};

TableListRow.states = states;
TableListRow.className = TABLELISTROW_CLASSNAME;

export default TableListRow;
