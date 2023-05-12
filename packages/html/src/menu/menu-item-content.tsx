import { classNames } from '../misc';

const className = `k-menu-item-content`;

export const MenuItemContent = (props: React.HTMLAttributes<HTMLSpanElement>) => {

    if (!props.children) {
        return <></>;
    }

    return (
        <span className={classNames(className, props.className)}>
            {props.children}
        </span>
    );
};
