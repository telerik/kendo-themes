import { classNames } from '../misc';

const className = `k-list-ul`;

export const ListUl = (
    props: React.HTMLAttributes<HTMLUListElement>
) => {
    const { children, ...other } = props;

    return (
        <ul
            {...other}
            className={classNames(className, props.className)}
        >
            {children}
        </ul>
    );
};
