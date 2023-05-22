import { classNames } from '../misc';

const className = `k-table-th`;

export type KendoTableListThProps = {
    text?: string;
};

export const TableListTh = (
    props: KendoTableListThProps &
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
