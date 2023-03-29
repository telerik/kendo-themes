import { classNames } from '../utils';

const className = `k-table-td`;

export type KendoTableListTdProps = {
    text?: string;
};

export const TableListTd = (
    props: KendoTableListTdProps &
    React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        text,
        ...other
    } = props;

    const textOrChildren = text
        ? text
        : props.children;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                className,
            )}
        >
            {textOrChildren}
        </span>
    );
};
