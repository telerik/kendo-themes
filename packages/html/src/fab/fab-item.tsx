import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

const className = `k-fab-item`;

const states = [
    States.hover,
    States.focus,
    States.active,
    States.disabled
];

export type KendoFloatingActionButtonItemProps = {
    align?: 'left' | 'right';
    text?: string;
    icon?: string;
};

export type KendoFloatingActionButtonItemState = { [K in (typeof states)[number]]?: boolean };

export const FloatingActionButtonItem = (
    props: KendoFloatingActionButtonItemProps &
        KendoFloatingActionButtonItemState &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        text,
        icon,
        align,
        hover,
        focus,
        active,
        disabled,
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                className,
                {
                    [`k-text-${align}`]: align,
                },
                stateClassNames(className, {
                    hover,
                    focus,
                    active,
                    disabled,
                }),
            )}>
            <span className="k-fab-item-text">{text}</span>
            <Icon className="k-fab-item-icon" icon={icon} />
        </li>
    );
};

FloatingActionButtonItem.states = states;
