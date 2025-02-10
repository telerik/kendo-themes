import { classNames } from '../misc';

const className = `k-table-td`;

export type KendoTableTdProps = {
    text?: string;
    colspan?: any;
    rowspan?: any;
};

export const TableTd = (
    props: KendoTableTdProps &
    React.HTMLAttributes<HTMLTableCellElement>
) => {
    const {
        text,
        colspan,
        rowspan,
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
            )}
        >
            {textOrChildren}
        </td>
    );
};
