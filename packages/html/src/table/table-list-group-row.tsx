import { classNames } from '../misc';

const className = `k-table-group-row`;

export const TableListGroupRow = (
    props: React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        className: propsClassName,
        children,
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                propsClassName,
                className,
            )}
        >
            {children}
        </li>
    );
};
