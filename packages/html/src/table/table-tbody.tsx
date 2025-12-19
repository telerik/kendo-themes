import { classNames } from '../misc';

const className = `k-table-tbody`;

export type KendoTableTbodyProps = {
    role?: string;
};

export const TableTbody = (
    props: KendoTableTbodyProps &
        React.HTMLAttributes<HTMLTableSectionElement>
) => {
    const {
        role,
        ...other
    } = props;

    return (
        <tbody
            {...other}
            className={classNames(
                props.className,
                className,
            )}
            {...(role && { role })}
        >
            {props.children}
        </tbody>
    );
};
