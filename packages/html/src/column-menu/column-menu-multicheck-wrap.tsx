import { classNames } from '../misc';

const className = `k-multicheck-wrap`;

export const ColumnMenuMulticheckWrap = (
    props: React.HTMLAttributes<HTMLUListElement>
) => (
    <ul
        {...props}
        className={classNames(
            props.className,
            className
        )}
    >
        {props.children}
    </ul>
);