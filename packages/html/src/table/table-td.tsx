import { classNames } from '../utils';

const className = `k-table-td`;

export type KendoTableTdProps = {
    text?: string;
    colspan?: any;
};

export const TableTd = (
    props: KendoTableTdProps &
    React.HTMLAttributes<HTMLTableCellElement>
) => {
    const {
        text,
        colspan,
        ...other
    } = props;

    const textOrChildren = text
        ? text
        : props.children;

    return (
        <td
            colSpan={colspan}
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
