import { classNames, stateClassNames, States } from '../misc';

export const TABLEROW_CLASSNAME = `k-table-row`;

const states = [
    States.hover,
    States.focus,
    States.selected,
    States.disabled
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
                })
            )}
        >
            {props.children}
        </tr>
    );
};
