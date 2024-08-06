import { classNames } from '../misc';

const className = `k-input-prefix`;

export type KendoInputPrefixProps = {
    direction?: "horizontal" | "vertical";
};

export const InputPrefix = (props:
    KendoInputPrefixProps &
    React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        direction = "horizontal",
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
