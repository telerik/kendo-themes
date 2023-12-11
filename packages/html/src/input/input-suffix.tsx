import { classNames } from '../misc';

const className = `k-input-suffix`;

export type KendoInputSuffixProps = {
    direction?: "horizontal" | "vertical";
};

const defaultProps = {
    direction: "horizontal"
};

export const InputSuffix = (props:
    KendoInputSuffixProps &
    React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        direction = defaultProps.direction,
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
