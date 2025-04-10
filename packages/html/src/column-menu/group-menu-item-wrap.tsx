import { classNames } from '../misc';

const className = `k-group-menu-item-wrap`;

export const GroupMenuItemWrapper = (
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

