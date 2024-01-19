import { classNames } from '../misc';

const className = `k-table-th`;

export type KendoTableThProps = {
    text?: string;
    colspan?: any;
};

export const TableTh = (
    props: KendoTableThProps &
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
        <th
            colSpan={colspan}
            {...other}
            className={classNames(
                props.className,
                className,
            )}
        >
            {textOrChildren}
        </th>
    );
};
