import { classNames } from '../misc';

const className = `k-columnmenu-item-wrapper`;

export const ColumnMenuItemWrapper = (
    props: React.HTMLAttributes<HTMLDivElement>
) => (
    <div
        {...props}
        className={classNames(
            props.className,
            className,
        )}
    >
        {props.children}
    </div>
);