import { classNames } from '../misc';

const className = `k-table-tfoot`;

export type KendoTableTfootProps = {
    role?: string;
};

export const TableTfoot = (
    props: KendoTableTfootProps &
        React.HTMLAttributes<HTMLTableSectionElement>
) => {
    const {
        role,
        ...other
    } = props;

    return (
        <tfoot
            {...other}
            className={classNames(
                props.className,
                className,
            )}
            {...(role && { role })}
        >
            {props.children}
        </tfoot>
    );
};
