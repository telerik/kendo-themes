import { classNames } from '../misc';

const className = `k-table-thead`;

export type KendoTableTheadProps = {
    role?: string;
};

export const TableThead = (
    props: KendoTableTheadProps &
        React.HTMLAttributes<HTMLTableSectionElement>
) => {
    const {
        role,
        ...other
    } = props;

    return (
        <thead
            {...other}
            className={classNames(
                props.className,
                className,
            )}
            {...(role && { role })}
        >
            {props.children}
        </thead>
    );
};
