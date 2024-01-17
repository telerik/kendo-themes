import { classNames } from '../misc';

const className = `k-columnmenu-item-content`;

export const ColumnMenuItemContent = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            props.className,
            className,
            "k-columns-item"
        )}
    >
        {props.children}
    </div>
);