import { classNames } from '../misc';

const className = `k-input-prefix`;

export type KendoInputPrefixProps = {
    direction?: "horizontal" | "vertical";
};

const defaultOptions = {
    direction: "horizontal"
};

export const InputPrefix = (props:
    KendoInputPrefixProps &
    React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        direction = defaultOptions.direction,
        ...other
    } = props;

    if (!props.children) {
        return <></>;
    }

    return (
        <span
            {...other}
            className={
                classNames(
                    className,
                    props.className,
                    {
                        [`k-input-prefix-${direction}`]: direction,
                    }
                )}>
            {props.children}
        </span>
    );
};
