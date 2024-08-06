import { classNames } from '../misc';

const className = `k-input-suffix`;

export type KendoInputSuffixProps = {
    direction?: "horizontal" | "vertical";
};

export const InputSuffix = (props:
    KendoInputSuffixProps &
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
                        [`k-input-suffix-${direction}`]: direction,
                    }
                )}>
            {props.children}
        </span>
    );
};
