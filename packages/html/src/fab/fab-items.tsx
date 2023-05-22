import { classNames } from '../misc';

const className = `k-fab-items`;

export type KendoFloatingActionButtonItemsProps = {
    position?: null | 'top' | 'bottom';
};

export const FloatingActionButtonItems = (
    props: KendoFloatingActionButtonItemsProps &
        React.HTMLAttributes<HTMLUListElement>
) => {
    const {
        position,
        ...other
    } = props;

    return (
        <ul
            {...other}
            className={classNames(
                props.className,
                className,
                {
                    [`k-fab-items-${position}`]: position
                }
            )}>
            {props.children}
        </ul>
    );
};
